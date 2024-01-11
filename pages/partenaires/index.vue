<script setup>
const partenaire_page = {
  title: "Les partenaires",
};
const partenaires = [
  {
    id: 1,
    picture: "/images/maire/patenaire1.png",
    title_content: "Le Gouvernement du Bénin",
    description: "Le Gouvernement du Bénin est le premier partenaire des communes à travers diverses dotations notamment les Fonds d'appui au développement des communes (FADeC).Chaque année, ces fonds sont transférés à chaque commune du Bénin y compris Zogbodomey."
  },
  {
    id: 1,
    picture: "/images/maire/partenaire2.png",
    title_content: "La ville belge Libramont-Chevigny ",
    description: "Libramont-Chevigny (ou la forme écourtée Libramont, en wallon Libraumont) est une commune francophone de Belgique située en Région wallonne dans la province de Luxembourg.Elle est un partenaire stratégique de la commune de Zogbodomey."
  },
  {
    id: 1,
    picture: "/images/maire/partenaire3.png",
    title_content: "ONG Plan Bénin International",
    description: "Libramont-Chevigny (ou la forme écourtée Libramont, en wallon Libraumont) est une commune francophone de Belgique située en Région wallonne dans la province de Luxembourg.Elle est un partenaire stratégique de la commune de Zogbodomey."
  },
  {
    id: 1,
    picture: "/images/maire/partenaire4.png",
    title_content: "Social Watch/ Unicef",
    description: "Libramont-Chevigny (ou la forme écourtée Libramont, en wallon Libraumont) est une commune francophone de Belgique située en Région wallonne dans la province de Luxembourg.Elle est un partenaire stratégique de la commune de Zogbodomey."
  }, 
];
</script>

<template>
  <Banner :title="partenaire_page.title" />
  <ContentPartenaire v-for="partenaire in partenaires" :key="partenaire.id" :picture="partenaire.picture" :title="partenaire.title_content"
    :description="partenaire.description" />
  <Social />
</template>
