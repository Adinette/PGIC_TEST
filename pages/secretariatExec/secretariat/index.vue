<template>
    <Banner :title="secretariat_page.title" />
    <Content :picture="secretariat_page.picture" :name="secretariat_page.name" :role="secretariat_page.role" :title="secretariat_page.title_content"
        :description="secretariat_page.description" />
    <Biographie :title_biographie="secretariat_page.title_biographie" :description="secretariat_page.description_biographie" />
    <Social />
    <Subscribe />
</template>
    
<script setup>
const secretariat_page = {
    title: "Le Secrétaire Exécutif",
    picture: "/images/maire/secretariat.png",
    name: "Honoré VIGNIGBE",
    role: "Secrétaire Exécutif ",
    title_content: "Mots du Secrétaire Exécutif",
    title_biographie: "Attributions du Secrétaire Exécutif",
    description: `Chères populations de la commune de Zogbodomey,
C'est votre civisme, votre sens de la communauté et votre dévouement qui font de Zogbodomey un endroit si spécial.
En tant que Secrétaire Exécutif, ma priorité est de faire de l’administration communale de Zogbodomey une administration au service de chaque citoyen.
Je tiens à rappeler que le développement de notre très chère commune dépend de notre capacité à mobilser les ressources.
Le civisme fiscal est donc un devoir citoyen qui permet de garantir que les services communaux fonctionnent efficacement et bénéficient à l'ensemble de la population.
Notre administration s'engage à rendre des comptes sur l'utilisation des fonds publics et à les investir de manière responsable tout en promouvant la transparence, l'efficacité et l'équité dans la prestation des services.

`,
    description_biographie: `Amet urna lorem fames ac erat donec malesuada elementum. Sit amet tortor dignissim blandit tincidunt.
                        Tellus tempus cursus metus amet tortor vitae et pharetra. Vel nibh et lectus euismod etiam malesuada.
                        Dignissim in nibh purus iaculis elementum sed vitae.
                        Tristique sapien mattis non a neque enim. Nec vestibulum fermentum at massa elementum. Tincidunt ipsum
                        tristique amet mattis duis quis. Interdum magna at condimentum adipiscing est porttitor aliquet. Aliquet
                        in venenatis eget commodo cursus id a libero. Scelerisque molestie nullam urna mus accumsan malesuada.
                        Non consectetur tincidunt in ipsum placerat nibh
                        Amet urna lorem fames ac erat donec malesuada elementum. Sit amet tortor dignissim blandit tincidunt.
                        Tellus tempus cursus metus amet tortor vitae et pharetra. Vel nibh et lectus euismod etiam malesuada.
                        Dignissim in nibh purus iaculis elementum sed vitae.
                        Tristique sapien mattis non a neque enim. Nec vestibulum fermentum at massa elementum. Tincidunt ipsum
                        tristique amet mattis duis quis. Interdum magna at condimentum adipiscing est porttitor aliquet. Aliquet
                        in venenatis eget commodo cursus id a libero. Scelerisque molestie nullam urna mus accumsan malesuada.
                        Non consectetur tincidunt in ipsum placerat nibh
                        Tristique sapien mattis non a neque enim. Nec vestibulum fermentum at massa elementum. Tincidunt ipsum
                        tristique amet mattis duis quis. Interdum magna at condimentum adipiscing est porttitor aliquet. Aliquet
                        in venenatis eget commodo cursus id a libero. Scelerisque molestie nullam urna mus accumsan malesuada.
                        Non consectetur tincidunt in ipsum placerat nibh`,
};
</script>