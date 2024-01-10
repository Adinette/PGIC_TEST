<script setup>
//Soit tu declare et importe maire_page depuis un autre fichier comme ceci
//import maire_page from '../../data/maire_page.json'
//soit tu le declare dans la page directement et tu l'utilise comme suit 
const maire_page = {
  title: "Le Maire de la commune de Zogbodomey",
  picture: "/images/maire/maire1.png",
  name: "David Zinsou TOWEDJE",
  role: "Maire de la commune de Zogbodomey",
  title_content: "Mots du maire",
  description: `Chères populations de la commune de Zogbodomey, C'est avec une grande fierté que je m'adresse à vous en tant que maire de notre magnifique commune. Au nom de l'ensemble du conseil communal, je tiens à vous souhaiter la bienvenue sur le site officiel de la Mairie de Zogbodomey.
En tant que Maire, ma priorité est de faire de Zogbodomey un endroit où il fait bon vivre, grandir, travailler et s'épanouir. Nous sommes fiers de nos traditions tout en embrassant l'avenir avec enthousiasme. C'est pourquoi nous nous efforçons constamment de renforcer notre belle commune, en investissant dans des projets d'infrastructure, en améliorant les services municipaux et en favorisant le bien-être de nos citoyens.
Je tiens à remercier chacun d'entre vous pour votre soutien continu, votre engagement et votre sens civique. C'est grâce à la collaboration de notre communauté que nous pouvons accomplir de grandes choses.
Ensemble, construisons un avenir prometteur pour notre belle commune.
Vive la commune de Zogbodomey!`,
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

<template>
  <Banner :title="maire_page.title" />
  <Content
    :picture="maire_page.picture"
    :name="maire_page.name"
    :role="maire_page.role"
    :title="maire_page.title_content"
    :description="maire_page.description"
  />
  <Biographie
    :title="maire_page.title"
    :description="maire_page.description_biographie"
  />
  <Social />
</template>
