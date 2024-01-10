<script setup>
const maire_page = {
  title: "Les ONG/OSC à Zogbodomey",
  picture: "/images/maire/ong1.png",
  title_content: "ONG 1",
  description: `Le Gouvernement du Bénin est le premier partenaire des communes à travers diverses dotations notamment les Fonds d'appui au développement des communes (FADeC).
Chaque année, ces fonds sont transférés à chaque commune du Bénin y compris Zogbodomey.

`,
};
</script>

<template>
  <Banner :title="maire_page.title" />
  <div class="p-6">
    <p class="text-center mb-6">Plusieurs organisations interviennent sur le territoire de Zogbodomey. Vous pouvez rejoindre cette liste en vous inscrivant</p>
    <a href="" class="self-center px-4 py-2 font-semibold  dark:bg-amber-400 text-white">
        S’inscrire comme ONG
          </a>
</div>
  <Content 
    :picture="maire_page.picture"
    :title="maire_page.title_content"
    :description="maire_page.description"
  />
  <Social />
</template>
