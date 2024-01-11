<script setup>
const vivre_page = {
  title: "Vivre à Zogbodomey",
  description:`Venir vivre à Zogbodomey peut être une expérience enrichissante pour diverses raisons. Cette localité
offre un mélange unique de culture, d'opportunités et de qualité de vie. Voici quelques raisons pour
lesquelles vivre à Zogbodomey peut être attrayant :`,
  title1:"Zogbodomey, terre d’hospitalité",
  description1: `Les habitants de Zogbodomey sont réputés pour leur hospitalité et leur chaleur. Vous serez donc accueilli chaleureusement dans la communauté locale, ce qui facilite l'adaptation et l'intégration.
La population de Zogbodomey aime les étrangers et les accueille à bras ouverts tout en facilitant leur intégration dans leur nouvel environnement. 
`,
  title2: "Des demandes administratives plus simplifiée",
  description2: `Quant à la mairie, elle a simplifié les procédures pour votre installation, grâce à un meilleur traitement des actes domaniaux, il est plus facile pour vous de vous installer.
`,
  title3: "Richesse naturelle et culturelle",
  description3: `La ville est connue pour ses festivals, sa musique, sa danse, sa cuisine et son artisanat, offrant une expérience culturelle riche et authentique. Des artistes en vue sur la scène nationale et internationale comme : Sébastien Davo, Simplice Wekpon, Rosalie Bai Dagueh,  ou Sèdjro Giovanni Houansou y sont originaires.
Zogbodomey se trouve dans une région dotée de magnifiques paysages naturels, notamment des parcs nationaux, des réserves de faune. Vous aurez l'occasion d'explorer une variété de milieux naturels, de la savane à la forêt tropicale.`,
  title4: "Opportunités économiques",
  description4: `Zogbodomey offre des opportunités économiques dans divers secteurs, tels que l'agriculture, l'artisanat, le commerce et le tourisme. Elle dispose de vastes terres pour installer vos projets agricoles, touristiques et vos entreprises. De plus, la commune est la porte d'entrée dans le département du Zou par la RNIE1 donc plus proche de Cotonou et Abomey-Calavi. Elle est également une commune voisine et très proche de Bohicon, offrant ainsi un accès à un éventail plus large d'opportunités professionnelles.`,
  title5: "Principaux groupes socio-culturels et migrations",
  description5: `Zogbodomey est généralement considéré comme un pays offrant un coût de la vie abordable.
Les dépenses courantes, y compris le logement, l'alimentation et les transports, sont généralement
plus abordables que dans d’autres villes. Par exemple, les loyers à Zogbodomey sont relativement bas
et abordables`,
title6: "Zogbodomey, une commune en modernisation",
  description6: `L’équipe communale travaille continuellement à moderniser Zogbodomey
tout en étant compte de ses atouts environnementaux et potentialités agricoles.
Ne vous étonnez pas de voir d’ici là de nouveaux centres commerciaux, hypermarchés,  immeubles 
ultramodernes, éclosion de nouveaux quartiers résidentiels, aménagement d’espaces verts.
Les services déconcentrés de l’état tels que la police, les centres de santé, les écoles, le Service des 
Impôts, les agences SONEB et SBEE etc.. sont fonctionnels dans la commune.
`,

};
</script>

<template>
  <Banner :title="vivre_page.title" />
  <BiographieVivre
  :description="vivre_page.description"
  :title1="vivre_page.title1"
  :description1="vivre_page.description1" 
  :title2="vivre_page.title2"
  :description2="vivre_page.description2"
  :title3="vivre_page.title3" 
  :description3="vivre_page.description3" 
  :title4="vivre_page.title4"
  :description4="vivre_page.description5"
  :title5="vivre_page.title5"
  :description5="vivre_page.description5"
  :title6="vivre_page.title6" 
  :description6="vivre_page.description6" 
  />
  <Social />
</template>
