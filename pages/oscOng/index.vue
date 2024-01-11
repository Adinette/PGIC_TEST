<script setup>
const osgOng_page = {
  title: "Les ONG/OSC à Zogbodomey",
};
const osgOngs = [
  {
    id: 1,
    picture: "/images/maire/ong1.png",
    title_content: "Le Gouvernement du Bénin",
    description: "Le Gouvernement du Bénin est le premier osgOng des communes à travers diverses dotations notamment les Fonds d'appui au développement des communes (FADeC).Chaque année, ces fonds sont transférés à chaque commune du Bénin y compris Zogbodomey."
  },
  {
    id: 1,
    picture: "/images/maire/ong1.png",
    title_content: "La ville belge Libramont-Chevigny ",
    description: "Libramont-Chevigny (ou la forme écourtée Libramont, en wallon Libraumont) est une commune francophone de Belgique située en Région wallonne dans la province de Luxembourg.Elle est un osgOng stratégique de la commune de Zogbodomey."
  },
  {
    id: 1,
    picture: "/images/maire/ong1.png",
    title_content: "ONG Plan Bénin International",
    description: "Libramont-Chevigny (ou la forme écourtée Libramont, en wallon Libraumont) est une commune francophone de Belgique située en Région wallonne dans la province de Luxembourg.Elle est un osgOng stratégique de la commune de Zogbodomey."
  },
  {
    id: 1,
    picture: "/images/maire/ong1.png",
    title_content: "Social Watch/ Unicef",
    description: "Libramont-Chevigny (ou la forme écourtée Libramont, en wallon Libraumont) est une commune francophone de Belgique située en Région wallonne dans la province de Luxembourg.Elle est un osgOng stratégique de la commune de Zogbodomey."
  }, 
];
</script>

<template>
  <Banner :title="osgOng_page.title" />
  <div class="p-6">
    <p class="text-center mb-6">Plusieurs organisations interviennent sur le territoire de Zogbodomey. Vous pouvez rejoindre cette liste en vous inscrivant</p>
    <a href="" class="self-center px-4 py-2 font-semibold  dark:bg-amber-400 text-white">
        S’inscrire comme ONG
          </a>
</div>
  <Content 
  v-for="osgOng in osgOngs" :key="osgOng.id" :picture="osgOng.picture" :title="osgOng.title_content"
    :description="osgOng.description"
  />
  <Social />
</template>
