
<template>
  <Banner :title="supervision_page.title" />
  <Conseil :picture="supervision_page.picture" :title="supervision_page.title" :name="supervision_page.name"
    :title1="supervision_page.title1" :title2="supervision_page.title2" :button1="supervision_page.button1"
    :button2="supervision_page.button2" :description="supervision_page.description" />
  <section class="py-6 dark:bg-white  dark:text-black">
    <div class=" flex flex-col items-center  justify-center p-4 mx-auto sm:p-10">
      <div class="flex flex-row flex-wrap-reverse justify-center mt-8">
        <Team v-for="team in teams" :key="team.id" :picture="team.picture" :author="team.author" :role="team.role"
          :link="team.link" />
      </div>
    </div>
  </section>
  <Social />
  <Subscribe />
</template>

<script setup>
const supervision_page = {
  picture: "/images/maire/commission1.png",
  title: "Secrétariat Exécutif",
  name: "Honoré VIGNIGBE",
  title1: "Secrétaire Exécutif",
  title2: "Secrétaire Exécutif",
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

