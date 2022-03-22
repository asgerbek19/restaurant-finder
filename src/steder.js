
export const restaurants = [
   {
      name: "Alouette",
      reviews: 14,
      location: "aarhus",
      desc: "Vil du prøvet noget dejligt fransk mad så er du velkommen her.",
      info: "Vi er en nyåbnet restaurant der specialisere sig inden for mad fra det franske køkken. Vi har mange traditionelle rette fra Frankrig, og vi har også et stort udvalg af franske vine. Så kom med ned og spis med!"
   },
   {
      name: "Næs",
      reviews: 5,
      location: "kobenhavn",
      desc: "Savner du traditionelt dansk mad som stegt flæst eller frikadeller, så er vi stedet for dig!",
      info: "Vi er en traditionel dansk restaurant med et fokus på dansk mad som mormor lavede det! Dette tilbyder vi i dejlige kro omgivelser der giver en hyggelig dansk stemning. Hvis det lyder som noget for dig så glæder vi os til at se dig!"
   },
   {
      name: "De hvide svaner",
      review: 25,
      location: "odense",
      desc:"Vi er en kro i odense med øje for dansk mad og natur, som svanerne vi er opkaldt efter",
      info:"Vores navn stammer fra svanerne der frit bevæger sig rundt i området, og vi servere dansk mad så du kan nyde både den danske mad og den danske natur. Vi glæder og til at se dig!"
   },
   {
      name: "Lotus",
      review: 19,
      location: "aalborg",
      desc:"Bla bla bla bla bla bla bla",
      info:"bla bla bla bla bla bla bla"
   },
   {
      name: "Ankara",
      review: 31,
      location: "kobenhavn",
      desc:"Traditionelt indisk mad uden at tage til indien. Kom ned og smag det rigtige Indien",
      info:"Restauranten er åbnet fordi vi gerne vil gerne vil give danskerne en indisk oplevelse i Danmark. Du kan finde indiske retter fra alle hjørner af indien, i omgivelser der også er inspireret herfra. Så kom ned og prøv en ægte indisk madoplevelse.Vi glæder os til at se dig"
   },
   {
      name: "Pearl India",
      review: 2,
      location: "aarhus",
      desc:"Indisk mad i hjærtet af Århus, nemt og tilgængeligt",
      info:"Kom ned til Pearl India for en ægte Indisk madoplevelse!. Du behøver ikke at tage til Indien for at få en ægte Indisk madoplevelse, bare kom ned til os. Vi sørger for rolige og hyggelige omgivelser så du kan nyde din mad i ro og mag. Vi glæder os til at se dig!"
   },
   {
      name: "Den Gyldne Måge",
      review: 17,
      location: "odense",
      desc:"Slatne burgers hurtigere end du kan sige McDonalds!",
      info:"Hvis du er til ægte, store, saftige burgers, er dette ikke stedet for dig. Vi specialisere os i at levere burgere så hurtigt som muligt og går gerne ned i kvalitet for at opnå dette mål! Hvis du er sulten og har hurtigt brug for noget der minder om mad, er vi stedet for dig. Men det går så hurtigt med at give dig maden at du skal komme flere gange for at vi kan huske hvem du er!"
   },
   {
      name: "Carlslund",
      review: 31,
      location: "aalborg",
      desc:"Dansk inspireret mad med et moderne tvist, hvis dette lyder som noget for dig, så kom ned så tager vi en god hånd om dig!",
      info:"Vi tager god gammel dansk mad og pifter den op med noget moderne videnskab! Vi tager både farver og smagsforstærkere i brug i dansk mad for at give det nyt liv. Var det noget med kartofler og blå sovs med smagen af blåbær? Så kom ned til os og få en unik smagsoplevelse! Vi glæder os til at se dig!"
   },
]
restaurants.forEach((item, i) => {
   item.id = i + 1;
});