<script setup>
const maire_page = {
  title: "Les SDE à Zogbodomey",
  picture: "/images/maire/sde1.png",
  title_content: "SDE 1",
  description: `Le Gouvernement du Bénin est le premier partenaire des communes à travers diverses dotations notamment les Fonds d'appui au développement des communes (FADeC).
Chaque année, ces fonds sont transférés à chaque commune du Bénin y compris Zogbodomey.

`,
};
</script>

<template>
  <Banner :title="maire_page.title" />
  <div class="py-6 pl-14 ">
    <p class=" mb-6">Plusieurs services déconcentrés de l’Etat interviennet  à Zogbodomey. Voici leur liste :</p>
    
</div>
  <Content 
    :picture="maire_page.picture"
    :title="maire_page.title_content"
    :description="maire_page.description"
  />
  <Social />
</template>
