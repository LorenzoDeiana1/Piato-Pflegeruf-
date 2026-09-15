# Schritt-für-Schritt: Website auf GitHub Pages hochladen

Repository: `LorenzoDeiana1/Piato-Pflegeruf-`
Branch: `main`
Ziel-Link: https://lorenzodeiana1.github.io/Piato-Pflegeruf-/

---

## 1. ZIP herunterladen und entpacken
Die Datei `github-pages.zip` aus dem Chat herunterladen und entpacken.
Wichtig: Es wird der **Inhalt** des Ordners hochgeladen, nicht der Ordner selbst.

## 2. Repository öffnen
https://github.com/LorenzoDeiana1/Piato-Pflegeruf- aufrufen und einloggen.

## 3. Alte Dateien ersetzen (nur wenn schon Dateien im Repo liegen)
Beim Upload gleichnamiger Dateien überschreibt GitHub automatisch.
Dateien, die es im neuen Paket **nicht** mehr gibt, einzeln löschen:
Datei anklicken → Papierkorb-Symbol oben rechts → „Commit changes".

## 4. Dateien hochladen
1. Im Repository auf **Add file → Upload files** klicken.
2. Alle entpackten Dateien **und** den Ordner `assets` in das Feld ziehen.
   (Mehrfachauswahl: alles markieren mit Strg+A / Cmd+A und gemeinsam ziehen.)
3. Warten bis alle Dateien vollständig geladen sind (Fortschrittsanzeige).
4. Commit-Nachricht eintragen, z. B. `Website-Stand September 2026`.
5. **Commit changes** klicken.

### Hinweis zu versteckten Dateien
Die Datei `.nojekyll` wird im Finder/Explorer eventuell nicht angezeigt.
- macOS: im Finder `Cmd + Shift + .` drücken, dann ist sie sichtbar.
- Windows: Explorer → Ansicht → „Ausgeblendete Elemente" aktivieren.
Diese Datei muss zwingend mit hochgeladen werden, sonst werden Teile der Seite nicht geladen.

## 5. GitHub Pages aktivieren (nur beim ersten Mal)
1. Im Repository auf **Settings** klicken.
2. Links im Menü **Pages** wählen.
3. Unter „Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**, Ordner: **/ (root)**
4. **Save** klicken.

## 6. Veröffentlichung abwarten
Nach 1–3 Minuten ist die Seite online. Der Status ist im Reiter **Actions**
oder oben auf der Pages-Einstellungsseite sichtbar (grüner Haken).

## 7. Prüfen
https://lorenzodeiana1.github.io/Piato-Pflegeruf-/ öffnen und durchklicken:
Start, Pflegeruf, Einsatzbereiche, About PIATO, Contact, Impressum, Datenschutz.

Falls die Seite noch den alten Stand zeigt: Browser-Cache leeren bzw.
mit `Cmd/Strg + Shift + R` neu laden.

## 8. Link an den Kunden senden
https://lorenzodeiana1.github.io/Piato-Pflegeruf-/

---

## Wenn etwas nicht funktioniert

**Seite bleibt weiß / Header und Footer fehlen**
`support.js`, `site.js`, `SiteHeader.dc.html`, `SiteFooter.dc.html` und `.nojekyll`
müssen im Repository-Root liegen — nicht in einem Unterordner.

**Bilder fehlen**
Der Ordner `assets` muss vollständig mit hochgeladen sein (gleiche Ebene wie `index.html`).

**404-Fehler beim Aufruf**
Settings → Pages prüfen: Branch `main`, Ordner `/ (root)`.

**Unterseiten nicht erreichbar**
Dateinamen prüfen — die Links sind relativ (`./pflegeruf.html`) und
Groß-/Kleinschreibung ist relevant.
