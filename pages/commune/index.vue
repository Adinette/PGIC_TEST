<script setup>
const commune_page = {
  title: "La commune",
  picture: "/images/maire/commune1.png",
  title_content: "Situation géographique",
  description: `La commune de Zogbodomey est située dans la partie méridionale du plateau d'Abomey à 117 km de Cotonou. Elle est comprise entre 6°56' et 7°08 de Latitude Nord, 1°58' et 2°24' de Longitude Est et se trouve à l’entrée du département du Zou en allant à Bohicon.
Elle est limitée :
- Au Nord par les communes de Bohicon et de Za-Kpota ;
- Au Sud par les départements de l'Atlantique (Zè, et Toffo) ;
- À l'Est par les communes de Covè, Zagnanado et Ouinhi et Bonou ;
- À l’Ouest par les communes de Agbangnizoun et de Lalo,`,
  title1: "Villages et quartiers de ville par arrondissement",
  description1: `La commune de Zogbodomey compte 11 arrondissements et 80 villages (RGPH 4, 2013) repartis
comme suit :`,
  title2: "Climat, relief et hydrographie",
  description2: `Le climat est de type subéquatorial avec des précipitations variantes au cours de l'année. Il se caractérise par quatre saisons dont deux saisons pluvieuses allant de mi-mars à juillet et de septembre à octobre. Ensuite deux saisons sèches s’étendant de novembre à février et de juillet à Août.
Les précipitations sont affectées par le phénomène de changement climatique au cours de ces dernières années, ce qui occasionne des déficits pluviométriques couplées avec une répartition inégale des pluies sur tout le territoire communal.

Le relief de la commune est caractérisé par une plaine et un plateau avec des pentes de moins de 5% (SDAC de Zogbodomey, 2011) avec plusieurs versants. On y retrouve de vastes vallées des fleuves Zou et Ouémé, des zones de plateau d'altitude faible et une zone de dépression de la Lama.
Le réseau hydrographique est composé de plusieurs cours d'eau dont les plus importants sont : Zou, Ouémé, Couffo, Hounto, Koto, Samion, Hlan, Da et Dô.`,
  title3: "Sols, végétation et faune",
  description3: `La moitié du territoire de la commune de Zogbodomey est recouverte de sols ferralitiques dépouillés de leur fertilité naturelle. Les sols hydromorphes recouvrent environ le tiers de la commune. Les vertisols et les sols ferrugineux recouvrent à eux seuls environ 10% du territoire et sont principalement situés dans la partie sud de la commune.

- Principalement caractérisé par des mosaïques de cultures et jachères ;
- Existence de marécages et de galeries forestières ;
- Forêts denses, associées à la Forêt de Koto et les plantations de teck au sud de la commune ;
- Des zones de mosaïques de cultures et jachères sous palmiers observées dans la moitié sud de la commune.

On rencontre des espèces animales en voie de disparition et des oiseaux d’une grande valeur ornithologique. On peut citer notamment le singe à ventre rouge, les aulacodes, les antilopes, les biches, les pangolins et les caïmans.`,
  title4: "Démographie, répartition par arrondissement et structure",
  description4: `- Population de la commune de Zogbodomey est estimée à 123 259 habitants dont 60 532 hommes et 62 727 femmes selon la projection faite à partir du dernier recensement de 2013, le RGPH4 ;
- Population inégalement répartie sur les différents arrondissements ;
- Massi et d'Akissa sont les plus peuplés et concentrent respectivement 13,87 % et 11,72 % de la population de la commune (RGPH 2, 2002) :
- Les moins peuplés sont : Cana II (5,6 %), Canal I (6,4 %), Koussoukpa (6,65 %) et Kpokissa (6,9 %) ;
- Population de la commune est jeune (plus de 90% est âgé de moins de 50 ans) ;`,
  title5: "Principaux groupes socio-culturels et migrations",
  description5: `- Dominance Fon (91,7 %). Les autres groupes ethniques rencontrés sont : Yoruba et apparentés (5,4 %), Adja (1,7 %), Bariba et apparentés (0,3 %), Dendi et apparentés (0,3), Yoa et Lokpa et apparentés (0,1), Peulh ou Peul (0,1), Gua ou Otamari et apparentés (0,2), Ethnies étrangères (0,1) et autres (0,0 %).
- Au plan religieux : religions traditionnelles (22,0 %), catholiques (20,9 %), protestants ; méthodistes et autres (10,1%), chrétiens célestes (15,3%), musulmans (3,9 %), autres chrétiens (13,9), autres traditionnelles (2,9) autres religions (4,3) et aucune religion (7,0).
- On observe des migrations internes et externes à travers les phénomènes de l'exode rural et du trafic d'enfants. Les activités commerciales et champêtres constituent aussi des causes d'immigration et d'émigration observées dans cette commune. C'est le cas de la présence des populations Holli (en quête de terres fertiles) et des Yoruba (pour le commerce). Plusieurs jeunes de la commune se dirigent vers le Nigéria et vers les grandes villes (Cotonou, Parakou, Bohicon) du Bénin à la recherche d'une situation meilleure.`,
};
</script>

<template>
  <Banner :title="commune_page.title" />
  <Content 
  :picture="commune_page.picture" 
  :title="commune_page.title_content" 
  :description="commune_page.description" />

  <BiographieComune 
  :title1="commune_page.title1" 
  :description1="commune_page.description1" 
  :title2="commune_page.title2"
  :description2="commune_page.description2"
  :title3="commune_page.title3" 
  :description3="commune_page.description3" 
  :title4="commune_page.title4"
  :description4="commune_page.description5"
  :title5="commune_page.title5"
  :description5="commune_page.description5"
  />
  <Social />
</template>
