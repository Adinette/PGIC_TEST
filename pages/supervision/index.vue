
<template>
  <Banner title="Membres du conseil de supervision" />
  <Conseil name="David Zinsou TOWEDJE" title1="Maire de la commune de Zogbodomey"
    title2="Président du Conseil de Supervision" button1="Biographie" button2="Ecrire au maire" />
  <section class="py-6 dark:bg-white  dark:text-black">
    <div class=" flex flex-col items-center  justify-center p-4 mx-auto sm:p-10">
      <div class="flex flex-row flex-wrap-reverse justify-center mt-8">
        <Team v-for="team in teams" :key="team.id" :imageSrc="team.imageSrc" :author="team.author" :role="team.role"
          :link="team.link" />
      </div>
    </div>
  </section>
  <Social />
</template>
<script>
import Team from "../../components/team/Team.vue"
export default {
  components: {
    Team,
  },
  setup() {
    return {

      teams: [
        {
          imageSrc: "/assets/images/maire/team1.png",
          author: "Daniel Ludovic HOUESSE",
          role: "Premier Adjoint au maire",
          link: "Voir la fiche",
        },
        {
          imageSrc: "/assets/images/maire/team1.png",
          author: "Justin SAVASSI",
          role: "Deuxième Adjoint au maire",
          link: "Voir la fiche",
        },
        {
          imageSrc: "/assets/images/maire/team1.png",
          author: "Angelo TONOUKOUIN",
          role: "Conseiller/Pdt CASE",
          link: "Voir la fiche",
        },

        {
          imageSrc: "/assets/images/maire/team1.png",
          author: "LOKOSSI Edouard",
          role: "Conseiller/Pdt CADE",
          link: "Voir la fiche",
        },
        {
          imageSrc: "/assets/images/maire/team1.png",
          author: "GOUDJEGANDE Martial",
          role: "Conseiller/Pdt CCD",
          link: "Voir la fiche",
        },
        {
          imageSrc:"/assets/images/maire/team1.png",
          author: "DAGAÏCHA Fidèle",
          role: "Conseiller",
          link: "Voir la fiche",
        },

      ],
    };
  },
}
</script>