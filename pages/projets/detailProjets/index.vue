<script setup>
const detail_page = {
    title:"Projet de construction d’un marché de fruits à Zogbodomey Centre",
        description: `Lorem ipsum dolor sit amet consectetur. Quisque suspendisse nulla amet in  adipiscing. Odio ut at diam lacus feugiat. Nam quam posuere enim nisl. Mat  massa odio erat ac varius fermentum at vitae. Mattis pretium nibh id scelerif  Volutpat tristique posuere eget a curabitur elit. Sapien neque diam donec m  cras consectetur bibendum adipiscing. Metus vel tristique morbi aenean laor.Lorem ipsum dolor sit amet consectetur. Quisque suspendisse nulla amet in  adipiscing. Odio ut at diam lacus feugiat. Nam quam posuere enim nisl. Mat  massa odio erat ac varius fermentum at vitae. Mattis pretium nibh id scelerif  Volutpat tristique posuere eget a curabitur elit. Sapien neque diam donec m  cras consectetur bibendum adipiscing. Metus vel tristique morbi aenean laor. Lorem ipsum dolor sit amet consectetur. Quisque suspendisse nulla amet in  adipiscing. Odio ut at diam lacus feugiat. Nam quam posuere enim nisl. Mat  massa odio erat ac varius fermentum at vitae. Mattis pretium nibh id scelerif  Volutpat tristique posuere eget.`,
      picture: "/images/home/projet1.png",
};
</script>

<template>
    <Banner :title="detail_page.title" />
    <ProjetDetailProjet
    :picture="detail_page.picture" 
    :description="detail_page.description"
    />
    
    <Social />
</template>
