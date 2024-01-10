
<template>
    <div class=" dark:text-black">
        <div class=" p-6 grid grid-cols-12 mx-auto ">
            <div class="flex flex-col rounded-sm lg:col-span-3">
                <div
                    class="attribution-block px-6 pb-8  dark:bg-violet-400 dark:text-gray-900">
                    <div class="flex  text-center sm:space-x-4 py-8 border-b border-b-black text-white">
                        <div class="space-y-2">
                            <p class="leadi font-semibold text-base">Service des Affaires Administratives et Financières</p>
                        </div>
                    </div>
                    <div class="flex text-center sm:space-x-4 py-8 border-b border-b-black text-white">
                        <div class="space-y-2">
                            <p class="leadi font-semibold text-base">Service du Développement Local et de la Planification
                            </p>
                        </div>
                    </div>
                    <div class="flex text-center sm:space-x-4 py-8 border-b border-b-black text-white">
                        <div class="space-y-2">
                            <p class="leadi font-semibold text-base">Service des Systèmes d’Information</p>
                        </div>
                    </div>
                    <div class="flex text-center sm:space-x-4 py-8 border-b border-b-black text-white">
                        <div class="space-y-2">
                            <p class="leadi font-semibold text-center text-base">Services Techniques</p>
                        </div>
                    </div>
                    <div class="flex text-center sm:space-x-4 py-8 text-white">
                        <div class="space-y-2">
                            <p class="leadi font-semibold text-base">Service des Affaires Domaniales et Environnementales
                            </p>
                        </div>
                    </div>
                </div>
                <button class="bg-black py-2 px-1 mt-6 text-white">Ecrire au Secrétariat Exécutif</button>
            </div>
            <div class="flex flex-col col-span-12 pl-8 pr-32 lg:col-span-9 py-11 dark:divide-gray-700">
                <div class="pt-6 pb-4 ">
                    <h5 class="text-3xl text-center font-bold leadi text-green-700">{{ title_biographie }}
                    </h5>
                    <p class="mt-6 mb-11 leading-8 text-xl text-black">{{ description_biographie }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({
    title_biographie: {
    type: String,
    required: true,
    },
    description_biographie: {
    type: String,
    required: true,
    },
  });
</script>
  
