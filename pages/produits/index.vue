<script setup>
const produit_page = {
    title:"Produits du terroir",};
    const produits = [
  {
    id: 1,
    picture: "/images/maire/produit1.png",
    title:"Maîs local et amélioré",
    description: "Le maïs (local et amélioré) constitue la principale céréale produite dans la commune"
  },
  {
    id: 1,
    picture: "/images/maire/produit1.png",
    title: "Riz ",
    description: "Le maïs (local et amélioré) constitue la principale céréale produite dans la commune"
  },
  {
    id: 1,
    picture: "/images/maire/produit1.png",
    title: "Sorgho",
    description: "Le maïs (local et amélioré) constitue la principale céréale produite dans la commune"
  },
  {
    id: 1,
    picture: "/images/maire/produit1.png",
    title: "Niébé",
    description: "Le maïs (local et amélioré) constitue la principale céréale produite dans la commune"
  }, 
  {
    id: 1,
    picture: "/images/maire/produit1.png",
    title: "Haricot",
    description: "Le maïs (local et amélioré) constitue la principale céréale produite dans la commune"
  },
  {
    id: 1,
    picture: "/images/maire/produit1.png",
    title: "Arachide",
    description: "Le maïs (local et amélioré) constitue la principale céréale produite dans la commune"
  }, 
];
</script>

<template>
    <Banner :title="produit_page.title" />
    <div class="pt-8 px-8 flex justify-between w-full space-y-1 dark:text-gray-100">
        <label for="Search" class="hidden">Search</label>
        <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="button" liste1="search" class="p-1 focus:outline-none focus:ring">
                    <svg fill="currentColor" viewBox="0 0 512 512" class="w-4 h-4 dark:text-black">
                        <path
                            d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z">
                        </path>
                    </svg>
                </button>
            </span>
            <input type="search" price="Search" placeholder="Rechercher un service"
                class="w-96 py-2 pl-10 text-sm border border-black dark:bg-white tex-black ">
        </div>
        <div>
            <button class="self-center px-6 py-3 font-semibold rounded-lg dark:bg-green-700 text-white">
                Suivre ma demande
            </button>
        </div>
    </div>
    <div class=" p-6 mx-auto grid justify-center grid-cols-2 space-x-6 lg:grid-cols-3">
        <ProjetProduits v-for="produit in produits" :key="produit.id"
        :picture="produit.picture" 
        :title="produit.title" 
        :description="produit.description" />
    </div>
    <Social />
</template>
