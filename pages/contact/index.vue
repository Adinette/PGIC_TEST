
<script setup>
const maire_page = {
    title: "Contactez-nous",
    title_content: "Nous  contacter",
    description: "Merci de nous contacter en écrivant à cette adresse email : zogbodomey@mairie.bj Nous mettons tout en œuvre pour vous répondre le plus rapidement possible.  Tél: 40 121 121  Horaire d'ouverture:  Lundi - Vendredi: 8H - 17H30"
};
</script>

<template>
    <Banner :title="maire_page.title" />
    <ProjetContact :description="maire_page.description" :title_content="maire_page.title_content" />

    <Subscribe />
</template>
