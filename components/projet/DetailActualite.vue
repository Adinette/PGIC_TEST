
<template>
    <div class=" dark:text-black">
        <div class=" p-6 grid grid-cols-12 mx-auto ">
            <div class="flex flex-col col-span-12 pr-8 lg:col-span-9 py-11 dark:divide-gray-700">
                <div><img src="/images/home/actualite2.png" alt=""></div>
                <div class="my-3 space-x-3">
                    <span class="text-black font-semibold pr-3 border-r-2 border-r-slate-800">30 Octobre 2023 à 12:33</span>
                    <span class="text-amber-500 font-semibold">EDUCATION</span>
                </div>
                <div class=" ">
                    <p class="my-4 leading-8 text-lg text-black">Lorem ipsum dolor sit amet consectetur. Quisque suspendisse nulla amet in  adipiscing. Odio ut at diam lacus feugiat. Nam quam posuere enim nisl. Mat  massa odio erat ac varius fermentum at vitae. Mattis pretium nibh id scelerif  Volutpat tristique posuere eget a curabitur elit. Sapien neque diam donec m  cras consectetur bibendum adipiscing. Metus vel tristique morbi aenean laor.Lorem ipsum dolor sit amet consectetur. Quisque suspendisse nulla amet in  adipiscing. Odio ut at diam lacus feugiat. Nam quam posuere enim nisl. Mat  massa odio erat ac varius fermentum at vitae. Mattis pretium nibh id scelerif  Volutpat tristique posuere eget a curabitur elit. Sapien neque diam donec m  cras consectetur bibendum adipiscing. Metus vel tristique morbi aenean laor. Lorem ipsum dolor sit amet consectetur. Quisque suspendisse nulla amet in  adipiscing. Odio ut at diam lacus feugiat. Nam quam posuere enim nisl. Mat  massa odio erat ac varius fermentum at vitae. Mattis pretium nibh id scelerif  Volutpat tristique posuere eget.</p>
                </div>
                <div><img src="/images/home/actualite3.png" alt=""></div>

            </div>
            <div class="flex flex-col mt-11 rounded-sm lg:col-span-3">
                <ProjetDetail :title="detail_page.title" :picture1="detail_page.picture1" :description="detail_page.description" />
            </div>

        </div>
    </div>
   
</template>
  
<script setup>
const detail_page = {
    title:"Articles similaires",
    picture1: "/images/home/projet1.png",
    description: "Tournée statutaire du Préfet du Zou : étape de Zogbodomey, une réussite."
}
</script>
  
