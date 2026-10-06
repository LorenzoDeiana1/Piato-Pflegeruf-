# PIATO Pflegeruf – Checkliste vor dem Livegang

Das Paket in `github-pages/` ist live-fertig für `https://piatohealth.de`. Bitte auf GitHub prüfen und freigeben.

## Bereits erledigt
- Domain `https://piatohealth.de` (ohne www) überall eingetragen: Canonical, Open Graph, Schema.org, `sitemap.xml`, `robots.txt`, `.htaccess`
- Indexierung freigeschaltet (`index,follow`); Impressum, Datenschutz und 404 bewusst `noindex`
- Schrift und Skripte lokal, keine Verbindungen zu Drittanbietern, kein Cookie-Banner nötig
- Bilder als WebP, Favicon, Vorschaubild für Social Media, `lang="de"`
- `.htaccess` (Apache): HTTPS- und www-Weiterleitung, Security-Header, Caching, Komprimierung, 404-Seite, keine Verzeichnisanzeige
- Impressum § 5 DDG, Datenschutz ohne interne Notizen und ohne STRATO

## Vom Entwickler zu erledigen
1. **Datenschutz:** Platzhalter Hosting-Anbieter (Name, Anschrift) und AV-Vertrag ersetzen; Abschnitt Server-Logdaten an tatsächliche Speicherdauer anpassen
2. **Upload:** Inhalt von `github-pages/` ins Web-Root des Servers, inkl. `.htaccess` und `assets/`
3. **DNS/HTTPS:** `piatohealth.de` und `www.piatohealth.de` auf den Server, gültiges Zertifikat
4. **Bei nginx statt Apache:** Regeln aus `.htaccess` übertragen
5. **Search Console:** Domain bestätigen, `https://piatohealth.de/sitemap.xml` einreichen

## Bitte rechtlich prüfen
- Aussage „kein Datenschutzbeauftragter erforderlich" (Health-Kontext, Art. 37 DSGVO)
- Impressum vollständig

## Technische Hinweise
- Seiten werden im Browser aufgebaut und benötigen JavaScript. Die CSP erlaubt deshalb `'unsafe-eval'` – nicht entfernen.
- Test nach Upload: alle Seiten, Mobilmenü, `/gibtsnicht` → 404, http → https, Header z. B. mit securityheaders.com

## Inhalt (von der GF freigegeben – nur zur Kenntnis)
- Schreibweise: Hero „PatientInnen", sonst „Patient:innen"; „vom zuständigen Mitarbeiter"
- „Für jede Versorgungsform geeignet" bei zwei genannten Bereichen
- „Übertragung nur mit Datenschlüsseln" – gemeint ist vermutlich Verschlüsselung
- About: „Entwickelt in Deutschland" und Text zur sicheren Infrastruktur doppelt
- Wertschöpfung Schritt 3: Überschrift vs. Beschreibung
- Quellen für Kennzahlen und Erfahrungsberichte liegen der GF vor
