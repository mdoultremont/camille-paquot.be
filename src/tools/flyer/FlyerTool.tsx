import { useEffect, useMemo, useRef, useState } from "react";
import { encode } from "uqr";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import {
  DEFAULT_CONTENT,
  DEFAULT_PHOTO,
  PHOTO_ASPECT_RATIO,
  FLYER_BACKGROUNDS,
  FLYER_FORMATS,
  FLYER_PRESETS,
  type FlyerContent,
} from "./model";
import { renderFlyer } from "./render";
import { download, flyerFilename, jpegBlob, pdfBlob } from "./export";

const groups: {
  label: string;
  fields: { key: Exclude<keyof FlyerContent, "title">; label: string; multiline?: boolean }[];
}[] = [
  {
    label: "Lieu et horaire",
    fields: [
      { key: "place", label: "Lieu", multiline: true },
      { key: "schedule", label: "Horaire", multiline: true },
    ],
  },
  {
    label: "Pour qui ?",
    fields: [
      { key: "highlight", label: "Message principal" },
      { key: "note", label: "Précision", multiline: true },
    ],
  },
  {
    label: "Contact",
    fields: [
      { key: "contactLabel", label: "Titre du contact" },
      { key: "contactName", label: "Nom du contact" },
      { key: "contactPhone", label: "Téléphone" },
    ],
  },
  {
    label: "Lien et QR code",
    fields: [
      { key: "qrUrl", label: "Adresse du lien" },
      { key: "qrLabel", label: "Texte du lien", multiline: true },
    ],
  },
  {
    label: "Signature",
    fields: [
      { key: "signatureName", label: "Nom de la signature" },
      { key: "signatureRole", label: "Fonction", multiline: true },
    ],
  },
];
const inputClass =
  "mt-1 w-full rounded-xl border border-ink/25 bg-white px-3 py-2 text-base focus:outline-2 focus:outline-mustard";
const controlClass =
  "rounded-full border border-ink/25 px-4 py-2 font-semibold focus-visible:outline-mustard disabled:opacity-50";

export function FlyerTool() {
  const [content, setContent] = useState<FlyerContent>(DEFAULT_CONTENT);
  const [formatId, setFormatId] = useState("a4");
  const [backgroundId, setBackgroundId] = useState("cream");
  const [file, setFile] = useState<File | null>(null);
  const [photo, setPhoto] = useState<ImageBitmap | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const ready = photo !== null;
  const canvas = useRef<HTMLCanvasElement>(null);
  const upload = useRef<HTMLInputElement>(null);
  const format = FLYER_FORMATS.find((item) => item.id === formatId)!;
  const background = FLYER_BACKGROUNDS.find((item) => item.id === backgroundId)!;
  const { qr, qrError } = useMemo(() => {
    const value = content.qrUrl.trim();
    if (!value) return { qr: null, qrError: "" };
    try {
      const url = new URL(/^[a-z][a-z0-9+.-]*:/i.test(value) ? value : `https://${value}`);
      if (!["https:", "http:"].includes(url.protocol) || !url.hostname.includes("."))
        throw new Error("url");
      return { qr: encode(url.href, { ecc: "M", border: 0 }).data, qrError: "" };
    } catch {
      return {
        qr: null,
        qrError: "Indiquez une adresse complète, par exemple https://camille-paquot.be/yoga.",
      };
    }
  }, [content.qrUrl]);
  useEffect(() => {
    let cancelled = false;
    let bitmap: ImageBitmap | undefined;
    void (async () => {
      await Promise.all(
        [400, 600, 700, 800].map((weight) => document.fonts.load(`${weight} 16px Gabarito`)),
      );
      const source: Blob =
        file ||
        (await fetch(DEFAULT_PHOTO).then((response) => {
          if (!response.ok) throw new Error("photo");
          return response.blob();
        }));
      bitmap = await createImageBitmap(source, { imageOrientation: "from-image" });
      if (cancelled) {
        bitmap.close();
        return;
      }
      setPhoto(bitmap);
    })().catch(() => {
      if (!cancelled)
        setError(
          file
            ? "Impossible de préparer l’affiche. Vérifiez la photo choisie ou réessayez."
            : "Impossible de charger la photo d’exemple ou la police. Réessayez.",
        );
    });
    return () => {
      cancelled = true;
      bitmap?.close();
    };
  }, [file]);
  useEffect(() => {
    if (!photo || !canvas.current) return;
    const ctx = canvas.current.getContext("2d");
    if (!ctx) {
      return;
    }
    renderFlyer(ctx, content, format, background, photo, qr);
  }, [content, format, background, photo, qr]);
  const lowResolution =
    photo &&
    format.print &&
    Math.min(
      photo.width / (format.width * format.layout.photo[2]),
      photo.height / ((format.width * format.layout.photo[2]) / PHOTO_ASPECT_RATIO),
    ) *
      300 <
      150;
  async function exportFile(extension: "jpg" | "pdf") {
    setBusy(true);
    setError("");
    try {
      const jpeg = await jpegBlob(canvas.current!);
      download(
        extension === "pdf" ? await pdfBlob(jpeg, format) : jpeg,
        flyerFilename(content, format, extension),
      );
    } catch {
      setError("Le téléchargement a échoué. Réessayez.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <Container className="py-6 md:py-16">
      <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-ink-soft">
        L’atelier de Camille
      </p>
      <Heading level={1}>Votre affiche de Viniyoga</Heading>
      <p className="mt-3 max-w-2xl text-base text-ink-soft md:mt-4 md:text-lg">
        Un lieu, un horaire, une invitation. Adaptez votre affiche puis téléchargez-la, prête à
        partager ou à imprimer.
      </p>
      <div className="mt-6 grid items-start gap-6 lg:mt-10 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <form className="min-w-0 space-y-8" onSubmit={(event) => event.preventDefault()}>
          <fieldset>
            <legend className="mb-3 text-xl font-bold">Partir d’un cours</legend>
            <div className="flex flex-wrap gap-2">
              {FLYER_PRESETS.map((preset) => (
                <button
                  type="button"
                  key={preset.label}
                  className={`${controlClass} ${content.place === preset.place ? "bg-ink text-white" : "bg-white"}`}
                  onClick={() =>
                    setContent({ ...content, place: preset.place, schedule: preset.schedule })
                  }
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="space-y-4">
            <legend className="mb-3 text-xl font-bold">Format et papier</legend>
            <label className="block">
              Format
              <select
                className={inputClass}
                value={formatId}
                onChange={(event) => setFormatId(event.target.value)}
              >
                {FLYER_FORMATS.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <fieldset className="flex flex-wrap gap-2" aria-label="Couleur du papier">
              {FLYER_BACKGROUNDS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={backgroundId === item.id}
                  onClick={() => setBackgroundId(item.id)}
                  className={`${controlClass} ${backgroundId === item.id ? "ring-2 ring-ink" : ""} ${{ cream: "bg-[#faf6ef]", sage: "bg-[#e9eee3]", sky: "bg-[#e9f0f4]", lilac: "bg-[#f1eaf3]" }[item.id]}`}
                >
                  {item.label}
                </button>
              ))}
            </fieldset>
            <div>
              <p className="mb-2">Photo</p>
              <label
                htmlFor="flyer-photo"
                className={`${controlClass} inline-block cursor-pointer bg-white focus-within:outline-2 focus-within:outline-mustard`}
              >
                Choisir une photo
                <input
                  ref={upload}
                  id="flyer-photo"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="sr-only"
                  onChange={(event) => {
                    setPhoto(null);
                    setError("");
                    setFile(event.target.files?.[0] ?? null);
                  }}
                />
              </label>
              <p className="mt-2 break-words text-sm text-ink-soft">
                {file?.name ?? "Photo par défaut"}
              </p>
            </div>
            {file && (
              <button
                type="button"
                className="text-sm underline underline-offset-4"
                onClick={() => {
                  setPhoto(null);
                  setError("");
                  setFile(null);
                  if (upload.current) upload.current.value = "";
                }}
              >
                Revenir à la photo par défaut
              </button>
            )}
            {lowResolution && (
              <p className="text-sm text-ink-soft">
                {file
                  ? "Cette photo est petite pour ce format. Choisissez une photo plus grande pour l’impression."
                  : "Cette photo d’exemple est de faible résolution. Ajoutez une photo plus grande pour l’impression."}
              </p>
            )}
          </fieldset>
          <fieldset className="space-y-3">
            <legend className="mb-3 text-xl font-bold">Titre</legend>
            {content.title.map((value, index) => (
              <label key={index} className="block">
                Ligne {index + 1}
                <input
                  className={inputClass}
                  value={value}
                  onChange={(event) =>
                    setContent({
                      ...content,
                      title:
                        index === 0
                          ? [event.target.value, content.title[1]]
                          : [content.title[0], event.target.value],
                    })
                  }
                />
              </label>
            ))}
          </fieldset>
          {groups.map((group) => (
            <fieldset key={group.label} className="space-y-3">
              <legend className="mb-3 text-xl font-bold">{group.label}</legend>
              {group.fields.map((field) => (
                <label className="block" key={field.key}>
                  {field.label}
                  {field.multiline ? (
                    <textarea
                      rows={2}
                      className={inputClass}
                      value={content[field.key]}
                      onChange={(event) =>
                        setContent({ ...content, [field.key]: event.target.value })
                      }
                    />
                  ) : (
                    <input
                      type={field.key === "qrUrl" ? "url" : "text"}
                      className={inputClass}
                      value={content[field.key]}
                      aria-invalid={field.key === "qrUrl" && !!qrError}
                      aria-describedby={field.key === "qrUrl" ? "qr-hint qr-error" : undefined}
                      onChange={(event) =>
                        setContent({ ...content, [field.key]: event.target.value })
                      }
                    />
                  )}
                </label>
              ))}
              {group.label === "Lien et QR code" && (
                <>
                  <p id="qr-hint" className="text-sm text-ink-soft">
                    Laissez l’adresse vide pour masquer le QR code et son texte.
                  </p>
                  <output id="qr-error" className="text-sm text-red-800">
                    {qrError}
                  </output>
                </>
              )}
            </fieldset>
          ))}
        </form>
        <section
          className="sticky top-[72px] sm:top-20 z-10 order-first -mx-5 grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 border-b border-ink/20 bg-[#f0f2e9] px-5 py-3 md:-mx-8 md:px-8 lg:top-24 lg:order-last lg:mx-0 lg:block lg:rounded-3xl lg:border-0 lg:p-6"
          aria-label="Aperçu de l’affiche"
        >
          <div className="mb-4 hidden items-center justify-between gap-3 lg:flex">
            <h2 className="font-bold">Votre affiche</h2>
          </div>
          <canvas
            ref={canvas}
            className="mx-auto block h-auto max-h-[26svh] lg:max-h-[calc(100svh-288px)] w-auto max-w-full shadow-lg"
            aria-label="Aperçu de votre affiche de Viniyoga"
          />
          {!photo && !error && (
            <output className="mt-3 text-sm">Préparation de votre affiche…</output>
          )}
          <div className="flex flex-col gap-2 lg:mt-3 lg:flex-row lg:flex-wrap">
            {(["pdf", "jpg"] as const).map((extension) => (
              <button
                key={extension}
                type="button"
                disabled={!ready || busy || !!qrError}
                className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
                aria-label={`Télécharger en ${extension.toUpperCase()}`}
                onClick={() => void exportFile(extension)}
              >
                <span className="hidden lg:inline">Télécharger en </span>
                {extension.toUpperCase()}
              </button>
            ))}
          </div>
          <output className="col-span-2 text-sm empty:hidden lg:mt-2">
            {busy ? "Préparation du téléchargement…" : error}
          </output>
        </section>
      </div>
    </Container>
  );
}
