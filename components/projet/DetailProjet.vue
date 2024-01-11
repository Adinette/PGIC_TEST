
<template>
    <div class=" dark:text-black">
        <div class=" p-6 grid grid-cols-12 mx-auto ">
            <div class="flex flex-col col-span-12 pr-4 lg:col-span-9  py-11 dark:divide-gray-700">
                <div><img :src="picture" alt=""></div>
                <div class="ml-8 p-6 my-6 bg-slate-300 text-black ">
                    <ul>
                        <li class="font-semibold text-lg">Coût global du projet :<span class="text-lg font-normal">30.458.900
                                F cfa</span> </li>
                        <li class="font-semibold text-lg">Apport de la mairie : <span class="text-lg font-normal">10.000.000
                                F cfa</span> </li>
                        <li class="font-semibold text-lg">Apport recherché :<span class="text-lg font-normal"> 20.458.900 F
                                cfa</span> </li>
                        <li class="font-semibold text-lg">Type : <span class="text-lg font-normal">Partenariat</span> </li>
                        <li class="font-semibold text-lg">Etude réalsée par : <span class="text-lg font-normal">Cabinet HBO,
                                les SDLP et ST de la mairie</span> </li>
                    </ul>
                </div>
                <div class=" ">
                    <p class="mt-6 mb-11 leading-8 text-lg text-black">{{ description }}</p>
                </div>
                <div class="flex justify-center mt-8">
                    <a href="/projets/interressé" class="px-12 py-3 bg-green-700 text-white font-bold">JE SUIS INTERESSE.E</a>
                </div>
            </div>
            <div class="flex flex-col rounded-sm lg:col-span-3 p-3 mt-11 bg-slate-300">
                <ProjetDetail :title="detail_page.title" :picture1="detail_page.picture1" :description="detail_page.description" />
            </div>

        </div>
    </div>
    
</template>
  
<script setup>
const detail_page = {
    title:"Projets similaires",
    picture1: "/images/home/projet2.png",
    description: "Tournée statutaire du Préfet du Zou : étape de Zogbodomey, une réussite."
}
const props = defineProps({
    picture: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
</script>
  
