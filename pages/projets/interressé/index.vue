<script setup>
const maire_page = {
    title: "Contactez-nous",
    title_content: "Investir dans un projet",
    description: "Merci de l’intérêt que vous portez à la commune de Zogbodomey.Veuillez remplir ce formulaire ou écrire à l’adresse email: zogbodomey@mairie.bj Nous mettons tout en œuvre pour vous répondre le plus rapidement possible.   Tél: 40 121 121  Horaire d'ouverture:  Lundi - Vendredi: 8H - 17H30"
};
</script>

<template>
    <Banner :title="maire_page.title" />
    <ProjetContact :description="maire_page.description" :title_content="maire_page.title_content" />

    <Social />
</template>
