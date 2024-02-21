✅ Använder Express och Prisma
✅ Vara skriven i TypeScript
✅ Följa REST, CRUD och Resource Controller mönster
✅ Alla svar följer JSend-specifikationen
✅ Autentisering via HTTP Basic/JWT med hashing/salting av lösenord via bcrypt
✅ Validering av samtlig inkommande data
✅ Följer angiven specifikation av endpoints (såväl http-metod som path, request och response)
✅ Felhantering (t.ex. om användaren försöker komma åt en annan användares album eller foton, eller om användaren försöker lägga till ett foto som inte tillhör användaren i ett album, eller lägga till ett foto i ett album som inte finns)
✅ Använder korrekta HTTP-statuskoder
✅ Minst en migration
✅ All källkod vara korrekt indenterad (så klart!)
❓ Publicerad på railway

---

# Skicka in

Länk till ditt GitHub-repo (lägg en uppdaterad SQL-dump i roten av repot)
Länk till ditt publicerade API
Ange om du gjort G eller VG-nivå
Om du gjort VG JWT, vad har du för lifetimes på din tokens i ditt publicerade API?
Ev. kända buggar eller kommentarer du tror jag skulle ha nytta av när jag granskar din inlämning

---

# Användare

Registrera nytt konto
Se användarinformation
VG: Logga in för att få en JWT access-token
VG: Få en JWT access-token från en JWT refresh-token
VG: Uppdatera användarinformation (inkl. ändra lösenord)

# Foton

Lista sina foton
Skapa ett nytt foto
Uppdatera ett foto
VG: Radera ett foto (raderar även eventuella kopplingar mellan fotot och album som fotot finns i)

# Album

Lista sina album
Skapa nya album
Uppdatera ett album
VG: Radera ett album (raderar även eventuella kopplingar mellan albumet och fotona som finns i albumet)

# Album > Foton

Lista foton i ett album
Lägga till foto i ett album
VG: Lägga till flera foton i ett album
VG: Ta bort ett foto från ett album
