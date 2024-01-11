<script setup>
const sde_page = {
  title: "Les SDE à Zogbodomey",
};
const sde = [
  {
    id: 1,
    picture: "/images/maire/sde1.png",
    title_content: "Le Gouvernement du Bénin",
    description: "Le Gouvernement du Bénin est le premier sde des communes à travers diverses dotations notamment les Fonds d'appui au développement des communes (FADeC).Chaque année, ces fonds sont transférés à chaque commune du Bénin y compris Zogbodomey."
  },
  {
    id: 1,
    picture: "/images/maire/sde2.png",
    title_content: "La ville belge Libramont-Chevigny ",
    description: "Libramont-Chevigny (ou la forme écourtée Libramont, en wallon Libraumont) est une commune francophone de Belgique située en Région wallonne dans la province de Luxembourg.Elle est un sde stratégique de la commune de Zogbodomey."
  },
  {
    id: 1,
    picture: "/images/maire/sde2.png",
    title_content: "ONG Plan Bénin International",
    description: "Libramont-Chevigny (ou la forme écourtée Libramont, en wallon Libraumont) est une commune francophone de Belgique située en Région wallonne dans la province de Luxembourg.Elle est un sde stratégique de la commune de Zogbodomey."
  },
  {
    id: 1,
    picture: "/images/maire/sde2.png",
    title_content: "Social Watch/ Unicef",
    description: "Libramont-Chevigny (ou la forme écourtée Libramont, en wallon Libraumont) est une commune francophone de Belgique située en Région wallonne dans la province de Luxembourg.Elle est un sde stratégique de la commune de Zogbodomey."
  }, 
];
</script>

<template>
  <Banner :title="sde_page_page.title" />
  <div class="py-6 pl-14 ">
    <p class=" mb-6">Plusieurs services déconcentrés de l’Etat interviennet  à Zogbodomey. Voici leur liste :</p>
    
</div>
<Content 
  v-for="sde in sdes" :key="sde.id" :picture="sde.picture" :title="sde.title_content"
    :description="sde.description"
  />
  <Social />
</template>
