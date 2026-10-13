# Tims Allservice

## Öppna och publicera

Alla publiceringsfiler ligger i `dist`. Ladda upp innehållet i den mappen, inklusive `assets`, till GitHub Pages eller ditt webbhotells webbrot. Indexfilen ensam innehåller inte bilder, typsnitt och stilmallar.

Ingen installation eller byggprocess behövs för webbhotellet. Lokalt kan du öppna `dist/index.html` direkt.

För GitHub Pages: lägg innehållet i repots rot och välj Settings → Pages → Deploy from a branch → main / root. Alla interna länkar är relativa och fungerar även i ett GitHub-projekts undermapp.

## Ingår

- Startsida med fullstor hero och tillgänglig tjänsteväljare.
- Fyra tjänstesidor, om oss, kontakt, integritet och 404-sida.
- Telefon- och e-postlänkar. Ingen server behövs.
- Lokala komprimerade WebP-bilder och självhostat typsnitt.
- Sidtitlar, beskrivningar, canonical, strukturerad företagsdata, sitemap, robots och favicon.

## Viktigt före skarp lansering

- Canonical, sitemap och delningsbild utgår från `https://timsallservice.se/`. Byt dessa om en annan slutlig domän ska användas. Företagets befintliga domän är inte uppdaterad av detta arbete.
- Befintliga lokala SEO-sidor ingår inte som kopior. Behåll dem på nuvarande server, eller planera URL-migrering och 301-ompekningar innan webbplatsens webbrot ersätts. Skriv inte över hela nuvarande WordPress-installationen utan backup och migreringsplan.
- Mejllänkar öppnar besökarens mejlprogram. De skickar inte automatiskt. Inga formulär eller påhittade bekräftelser finns.
- Bilderna kommer från företagets befintliga webbplats och är där märkta som AdobeStock-material. De används som tjänsteillustrationer, inte dokumenterade kundprojekt. Kunden bör bekräfta att befintliga bildlicenser omfattar fortsatt användning på den nya webbplatsen.
- Inga betyg eller kundomdömen har hittats som säkert gäller just detta företag. Därför är inga sådana påståenden inlagda.
- Säkerhetsrubriker, HTTPS, serverloggar och eventuella analysverktyg ställs in på webbhotellet. Ingen fullständig säkerhets- eller juridisk revision har beställts eller utförts.

## Underhåll

Innehållet genereras av `build.mjs`. Kör `node build.mjs` efter innehållsändringar och `node verify.mjs` för kontroll av lokala länkar och grundläggande struktur. CSS och JavaScript finns direkt i dist.

## Design och kontroll

Originalets gröna profil och ordmärke har bevarats. Designarbetet med Taste och Impeccable gav större bildytor, tydlig informationshierarki, mobilanpassad kontakt och återhållsam rörelse. Förhandsvisning och portabel leverans används eftersom Sites-publiceringen stoppades av kontots hostinggräns.
