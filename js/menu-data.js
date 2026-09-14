// ==========================================================================
// MELLBY CAFÉ — MENY
// Redigera menyn HÄR. Varje kategori är en rubrik, varje rad är en rätt.
// Lägg till, ta bort eller ändra rader fritt — sidan uppdateras automatiskt.
// Lämna "price": "" om du inte vill visa något pris (t.ex. innan ni bestämt det).
// "note" är en valfri kort textrad som visas direkt under kategorins rubrik.
// ==========================================================================

const MENU_DATA = [
  {
    category: "Kaffe & Dryck",
    items: [
      { name: "Espresso", desc: "Enkel / Dubbel", price: "30 / 40 kr" },
      { name: "Cappuccino", desc: "", price: "50 kr" },
      { name: "Latte", desc: "", price: "40 kr" },
      { name: "Bryggkaffe", desc: "", price: "25 kr" },
      { name: "Varm choklad", desc: "", price: "40 kr" },
      { name: "Nescafé Frappé", desc: "", price: "50 kr" },
      { name: "Freddo Cappuccino", desc: "", price: "60 kr" },
      { name: "Freddo Espresso", desc: "", price: "50 kr" },
    ],
  },
  {
    category: "Förrätt",
    items: [
      { name: "🧀 Saganaki", desc: "Ljuvlig stekt/friterad grekisk ost som toppas med flytande honung och krispiga valnötter. En riktig dröm!", price: "120 kr" },
    ],
  },
  {
    category: "Hamburgare",
    note: "Krispiga pommes ingår alltid i priset!",
    items: [
      { name: "🍔 Mellby Hamburgare (150g)", desc: "Gjord på vårt egna nymalda premiumkött med långsamt karamelliserad lök, smält ost och vår hemmagjorda dippsås.", price: "139 kr" },
      { name: "🍔 Stora Mellby Hamburgare", desc: "Vårt nymalda kött med krispig bacon, vår egna picklade gurka, smält ost och hemmagjord dippsås.", price: "159 kr" },
      { name: "🍔 Mellby Halloumiburgare (Vegetarisk)", desc: "Perfekt grillad halloumiost med karamelliserad lök, vår egna picklade gurka och hemmagjord dippsås.", price: "139 kr" },
      { name: "🍔 Mellbys Dubbel", desc: "Dubbel smashburgare, bacon, dubbel ost, pommes och sås.", price: "200 kr" },
      { name: "🍔 Barnburgare", desc: "Upp till 12 år — mindre smashburgare, pommes och sås.", price: "74 kr" },
    ],
  },
  {
    category: "Souvlaki & Grill",
    items: [
      { name: "🍢 Grekiska Grillspett (Souvlaki)", desc: "Perfekt grillade spett (fläsk eller kyckling) som serveras med pommes, varmt pitabröd och vår magiska hemmagjorda tzatziki.", price: "159 kr" },
      { name: "🥙 Vår Gyrostallrik", desc: "Skivat fläsk eller kyckling med pommes, pitabröd, tzatziki och färsk sallad.", price: "159 kr" },
      { name: "🧆 Vår Stora Grill Mix", desc: "Den ultimata grekiska festmåltiden! Ett jättefat fyllt till bredden med olika sorters grillat kött, souvlaki, pitabröd, tillbehör och röror. Helt perfekt att dela runt bordet på uteserveringen!", price: "330 kr" },
    ],
  },
  {
    category: "Sallader",
    items: [
      { name: "Grekisk horiatiki", desc: "Tomat, gurka, lök, fetaost", price: "100 kr" },
      { name: "Caesarsallad", desc: "Med grillad kyckling", price: "130 kr" },
      { name: "Arancini-tryffel", desc: "Friterade risottobollar med svamp, parmesan och tryffelmajonnäs", price: "130 kr" },
    ],
  },
  {
    category: "Club Sandwich",
    items: [
      { name: "Club Sandwich Skinka", desc: "Rostat bröd, skinka, ost, tomat, gurka, sallad & majonnäs, pommes", price: "100 kr" },
      { name: "Club Sandwich Kyckling", desc: "Rostat bröd, kycklingfilé, bacon, pommes, parmesan & caesarsås", price: "130 kr" },
    ],
  },
  {
    category: "Varmrätter",
    items: [
      { name: "Fish n' chips", desc: "Serveras varje dag", price: "130 kr" },
      { name: "Schnitzel", desc: "Fläsk eller kyckling — serveras varje dag", price: "130 kr" },
      { name: "Grekisk husmanskost", desc: "Serveras torsdag–lördag", price: "139 kr" },
    ],
  },
  {
    category: "Smörgåsar & Tårtor",
    items: [
      { name: "Smörgåstårta", desc: "", price: "100 kr" },
      { name: "Baguette räkor", desc: "", price: "90 kr" },
      { name: "Baguette skinka", desc: "", price: "75 kr" },
      { name: "Baguette jamón serrano", desc: "", price: "80 kr" },
      { name: "Glutenfri macka", desc: "", price: "75 kr" },
      { name: "Fralla", desc: "Ost och skinka", price: "60 kr" },
      { name: "Croissant macka", desc: "Med pepparsalami och brieost", price: "60 kr" },
      { name: "Halv baguette", desc: "Skinka eller ost", price: "55 kr" },
      { name: "Baguette brieost/salami", desc: "", price: "80 kr" },
    ],
  },
  {
    category: "Hemlagat fika & efterrätter",
    note: "Efter maten bjuder vi på kaffet! Missa inte vår monter fylld med hembakat.",
    items: [
      { name: "🍰 Hembakade pajer", desc: "Dagens sort — se utbudet i disken", price: "45 kr" },
      { name: "🍰 Tiramisu", desc: "", price: "50 kr" },
      { name: "🍎 Äppelstrudel", desc: "Med valnötter och kanel — husets specialitet!", price: "50 kr" },
      { name: "🍰 Cheesecake", desc: "I olika smaker — se utbudet i disken", price: "60 kr" },
      { name: "🍰 Tårtbitar", desc: "I olika sorter — se utbudet i disken", price: "65 kr" },
      { name: "🥕 Morotskaka", desc: "", price: "45 kr" },
    ],
  },
];
