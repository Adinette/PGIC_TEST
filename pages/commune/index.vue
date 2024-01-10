<script setup>
const maire_page = {
  title: "La commune",
  picture: "/images/maire/commune1.png",
  title_content: "Situation géographique",
  description: `La commune de Zogbodomey est située dans la partie méridionale du plateau d'Abomey à 117 km de Cotonou. Elle est comprise entre 6°56' et 7°08 de Latitude Nord, 1°58' et 2°24' de Longitude Est et se trouve à l’entrée du département du Zou en allant à Bohicon.
Elle est limitée :
- Au Nord par les communes de Bohicon et de Za-Kpota ;
- Au Sud par les départements de l'Atlantique (Zè, et Toffo) ;
- À l'Est par les communes de Covè, Zagnanado et Ouinhi et Bonou ;
- À l’Ouest par les communes de Agbangnizoun et de Lalo,`,
};
</script>

<template>
  <Banner :title="maire_page.title" />
  <Content
    :picture="maire_page.picture"
    :title="maire_page.title_content"
    :description="maire_page.description"
  />
  <!-- <Biographie
    :title="maire_page.title"
    :description="maire_page.description_biographie"
  /> -->
  <Social />
</template>
