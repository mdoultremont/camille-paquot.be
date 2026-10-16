# Legal publication checklist

The three French legal pages are drafts and use `noindex`. Remove the draft notice and `noindex` only after their missing facts and processing descriptions have been confirmed. These drafts do not replace a patient privacy notice.

Before publication:

- Confirm the legal professional address, BCE number, VAT status, exact qualification and country that granted the professional title.
- Confirm the Cloudflare contracting entity, contact details, active hosting/security settings, logging data, retention and provider agreements.
- The owner confirms simple traffic analytics are active for aggregate visit/page statistics. Confirm the exact Cloudflare service, configuration, data processed and retention, including any dashboard-injected beacon. Inspect deployed responses, browser requests, cookies and other trackers. No analytics or advertising integration was found in the source code; dashboard settings and deployed behavior have not been inspected. Do not infer absence of personal-data processing or visitor identification from this code inspection.
- Confirm the legal bases, recipients, retention periods or criteria, and any international transfers and safeguards for website/contact data, including the email provider.
- Supply the separate patient privacy information and verify consultation arrangements with the practitioner.

Static hosting still processes technical request data, separately from aggregate audience statistics. Do not infer zero logging, zero personal data, anonymity or a consent exemption from the site's static nature or the intended simplicity of the analytics.

Repository evidence: `src/constants.ts` holds known contact and registration numbers; `src/components/BookingLink.tsx` uses an external Rosa link; `src/routes/__root.tsx` and `src/styles.css` load local assets; `wrangler.jsonc` enables Workers observability with `head_sampling_rate: 1`. This setting does not identify the audience analytics service; active basic traffic analytics are recorded on the owner's confirmation. No Web Analytics beacon or deployment injection configuration was found in the repository. Professional addresses are still missing from the existing practical information page.

Primary references for review:

- [SPF Economie: business website information](https://economie.fgov.be/fr/themes/line/commerce-electronique/vente-par-internet/site-dentreprise-et-comptes)
- [APD: right to information](https://www.autoriteprotectiondonnees.be/professionnel/rgpd-/droits-des-citoyens/droit-a-l-information)
- [APD: cookies and other trackers](https://www.autoriteprotectiondonnees.be/cookies-et-autres-traceurs)
- [Commission des Psychologues: professional code](https://www.compsy.be/le-code-de-deontologie)
