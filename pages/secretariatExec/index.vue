

<template>
    <Banner title="Secrétariat Exécutif" />
    <Conseil name="Honoré VIGNIGBE" title1="Secrétaire Exécutif" button1="Biographie" button2="Ecrire au maire" />
    <section class="py-6 dark:bg-white  dark:text-black">
        <div class="container flex flex-col items-center  justify-center p-4 mx-auto sm:p-10">
            <div class="flex flex-row flex-wrap-reverse justify-center mt-8">
                <Team v-for="team in teams" :key="team.id" :imageSrc="team.imageSrc" :author="team.author" :role="team.role"
                    :link="team.link" />
                
            </div>

        </div>
        <!-- <div class="grid w-full justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> -->
        <!-- <TeamThirds v-for="teamThird in teamsThird" :key="teamThird.id" :imageSrc="teamThird.imageSrc"
                    :author="teamThird.author" :role="teamThird.role" :link="teamThird.link" />
                </div> -->
    </section>
    <Social/>
</template>
<script>
import Team from "../../components/team/Team.vue"
// import TeamThirds from "../../components/teamThird/TeamThirds.vue";
export default {
    components: {
        Team,
        // TeamThirds
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
                    author: "Justin SAVASSI",
                    role: "Deuxième Adjoint au maire",
                    link: "Voir la fiche",
                },
            ],

            // teamsThird: [
            // {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Daniel Ludovic HOUESSE",
            //         role: "Premier Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Daniel Ludovic HOUESSE",
            //         role: "Premier Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Daniel Ludovic HOUESSE",
            //         role: "Premier Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Daniel Ludovic HOUESSE",
            //         role: "Premier Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Daniel Ludovic HOUESSE",
            //         role: "Premier Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            //     {
            //         imageSrc: "/assets/images/maire/team1.png",
            //         author: "Justin SAVASSI",
            //         role: "Deuxième Adjoint au maire",
            //         link: "Voir la fiche",
            //     },
            // ],
        };
    },
}
</script>