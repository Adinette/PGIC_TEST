<script setup>
const maire_page = {
  title: "Les partenaires",
  picture: "/images/maire/patenaire1.png",
  title_content: "Le Gouvernement du Bénin",
  description: `Le Gouvernement du Bénin est le premier partenaire des communes à travers diverses dotations notamment les Fonds d'appui au développement des communes (FADeC).
Chaque année, ces fonds sont transférés à chaque commune du Bénin y compris Zogbodomey.
`,
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
