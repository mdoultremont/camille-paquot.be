export function ConsultationOpening({ className = "" }: { className?: string }) {
  return (
    <p className={`text-base font-semibold text-ink-soft ${className}`}>
      Ouverture des consultations prochainement.
    </p>
  );
}
