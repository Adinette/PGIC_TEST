
<template>
    <div class=" dark:text-black">
        <div class="px-14 py-6">
            <span>60 événements</span>
            <span class="text-green-700 ml-12">Afficher uniquement les événements à venir</span>
        </div>
        <div class=" p-6 grid grid-cols-12 mx-auto ">
            <div class="flex flex-col col-span-12 px-6 lg:col-span-8 pt-3 pb-2 bg-teal-50">
                <div class="space-y-6">
                    <span class="text-xl mb-4 md:tracki ">2ème Audience publique de réddition de compte
                        pour
                        l’année 2023
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur. Bibendum ut integer rhoncus
                        consequat aliquet netus. Morbi leo amet massa sed neque iaculis imp
                        erdiet.</p>
                    <div class="mt-4 w-full md:flex-row md:items-center dark:text-gray-400">

                        <div class="flex justify-between items-center md:space-x-2">
                            <div class="flex items-center">
                                <img src="https://source.unsplash.com/75x75/?portrait" alt=""
                                    class="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700">
                                <p class="text-sm text-black ml-3">Jeudi 15 Novembre 2023, 09H00</p>
                            </div>
                            <span class="text-green-700 ml-12">Dans 20 Jours</span>
                        </div>
                        <div class="flex items-center mt-6">
                            <img src="https://source.unsplash.com/75x75/?portrait" alt=""
                                class="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700">
                            <p class="text-sm text-black ml-3">Bureau d’arrondissement de CANA 1</p>
                        </div>
                    </div>
                    <div class="text-end dark:text-gray-100 mt-8">
                        <a class="bg-amber-500 text-white text-xl font-bold px-4 py-2">Ajouter</a>
                        <a class="bg-green-700 ml-4 text-white text-xl font-bold px-4 py-2">Partager</a>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 px text-end">
                <div class="w-full space-y-1 dark:text-gray-100">
                    <label for="Search" class="hidden">Search</label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="button" title="search" class="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" class="w-4 h-4 dark:text-gray-100">
                                    <path
                                        d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z">
                                    </path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..."
                            class="w-72 py-3 pl-3 text-sm focus:outline-none  dark:text-black bg-white border border-black">
                    </div>
                </div>
                <div class="text-end w dark:text-gray-100 mt-8">
                    <a class="bg-amber-500 text-white text-xl font-bold px-7 py-2">Proposer un événement</a>
                </div>
                <div class="text-end dark:text-gray-100 mt-8">
                    <a class="bg-green-700 mt-6 text-white text-xl font-bold px-16 py-2">Prendre un RDV</a>
                </div>
            </div>

        </div>
    </div>
</template>

