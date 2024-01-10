
<template>
    <Banner :title="communal_page.title" />
    <Conseil :picture="communal_page.picture" :title="communal_page.title" :name="communal_page.name" 
    :title1="communal_page.title1" :title2="communal_page.title2"
        :button1="communal_page.button1" :button2="communal_page.button2"
        :description="communal_page.description" />
    <section class="py-6 dark:bg-white  dark:text-black">
        <div class=" flex flex-col items-center  justify-center p-4 mx-auto sm:p-10">
            <div class="flex flex-row flex-wrap-reverse justify-center mt-8">
                <Team v-for="team in teams" :key="team.id" :picture="team.picture" :author="team.author" :role="team.role"
                    :link="team.link" />
            </div>
        </div>
        <div class="grid w-full justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <TeamThirds v-for="teamThirds in teamsThird" :key="teamThirds.id" :picture="teamThirds.picture"
                :author="teamThirds.author" :role="teamThirds.role" :link="teamThirds.link" />
        </div>
    </section>
    <Social />
    <Subscribe />
</template>
  
<script setup>
const communal_page = {
    picture: "/images/maire/maire2.png",
    title: "Membres du Conseil Communal",
    name: "David Zinsou TOWEDJE",
    title1: "Maire de la commune de Zogbodomey",
    title2:"Président du Conseil Communal",
    button1: "Biographie",
    button2: "Ecrire au maire",
}

const teams = [
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
];
const teamsThird = [
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },

    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
    {
        id: 1,
        author: "Daniel Ludovic HOUESSE",
        picture: "/images/maire/team1.png",
        role: "Premier Adjoint au maire",
        link: "Voir la fiche",
    },
];
</script>
