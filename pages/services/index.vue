<template>
  <Banner :title="service_page.title" />
  <div class="p-8 flex justify-between w-full space-y-1 dark:text-gray-100">
    <label for="Search" class="hidden">Search</label>
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          type="button"
          liste1="search"
          class="p-1 focus:outline-none focus:ring"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 512 512"
            class="w-4 h-4 dark:text-black"
          >
            <path
              d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
            ></path>
          </svg>
        </button>
      </span>
      <input
        type="search"
        price="Search"
        placeholder="Rechercher un service"
        class="w-96 py-2 pl-10 text-sm border border-black dark:bg-white tex-black"
      />
    </div>
    <div>
      <button
        class="self-center px-6 py-3 font-semibold rounded-lg dark:bg-green-700 text-white"
      >
        Suivre ma demande
      </button>
    </div>
  </div>
  <div class="grid grid-cols-3 px-3 gap-4">
    <ServicesService
      v-for="service in services"
      :key="service.id"
      :content="service.content"
      :price="service.price"
      :description="service.description"
      :liste1="service.liste1"
      :liste2="service.liste2"
      :liste3="service.liste3"
      :liste4="service.liste4"
      :liste5="service.liste5"
      :liste6="service.liste6"
      :link1="service.link1"
      :link2="service.link2"
    />
  </div>
  <Social />
</template>
<script setup>
const service_page = {
  title: "Services",
};
const services = [
  {
    id: 1,
    content: "Le Maire de la commune de Zogbodomey",
    price: "350 F CFA",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
    liste1: "n neque diam donec m cras consectetur bibendum",
    liste2: "adipiscing. Metus vel tristique morbi aenean laor.",
    liste3: "Lorem ipsum dolor sit amet consectetur. ",
    liste4: "Lorem ipsum dolor sit amet consectetur. ",
    liste5: "Lorem ipsum dolor sit amet consectetur. ",
    liste6: "Lorem ipsum dolor sit amet consectetur. ",
    link1: "Lire Plus",
    link2: "Faire une demande",
  },
  {
    id: 1,
    content: "Le Maire de la commune de Zogbodomey",
    price: "350 F CFA",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
    liste1: "n neque diam donec m cras consectetur bibendum",
    liste2: "adipiscing. Metus vel tristique morbi aenean laor.",
    liste3: "Lorem ipsum dolor sit amet consectetur. ",
    liste4: "Lorem ipsum dolor sit amet consectetur. ",
    liste5: "Lorem ipsum dolor sit amet consectetur. ",
    liste6: "Lorem ipsum dolor sit amet consectetur. ",
    link1: "Lire Plus",
    link2: "Faire une demande",
  },
  {
    id: 1,
    content: "Le Maire de la commune de Zogbodomey",
    price: "350 F CFA",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
    liste1: "n neque diam donec m cras consectetur bibendum",
    liste2: "adipiscing. Metus vel tristique morbi aenean laor.",
    liste3: "Lorem ipsum dolor sit amet consectetur. ",
    liste4: "Lorem ipsum dolor sit amet consectetur. ",
    liste5: "Lorem ipsum dolor sit amet consectetur. ",
    liste6: "Lorem ipsum dolor sit amet consectetur. ",
    link1: "Lire Plus",
    link2: "Faire une demande",
  },
  {
    id: 1,
    content: "Le Maire de la commune de Zogbodomey",
    price: "350 F CFA",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
    liste1: "n neque diam donec m cras consectetur bibendum",
    liste2: "adipiscing. Metus vel tristique morbi aenean laor.",
    liste3: "Lorem ipsum dolor sit amet consectetur. ",
    liste4: "Lorem ipsum dolor sit amet consectetur. ",
    liste5: "Lorem ipsum dolor sit amet consectetur. ",
    liste6: "Lorem ipsum dolor sit amet consectetur. ",
    link1: "Lire Plus",
    link2: "Faire une demande",
  },
  {
    id: 1,
    content: "Le Maire de la commune de Zogbodomey",
    price: "350 F CFA",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
    liste1: "n neque diam donec m cras consectetur bibendum",
    liste2: "adipiscing. Metus vel tristique morbi aenean laor.",
    liste3: "Lorem ipsum dolor sit amet consectetur. ",
    liste4: "Lorem ipsum dolor sit amet consectetur. ",
    liste5: "Lorem ipsum dolor sit amet consectetur. ",
    liste6: "Lorem ipsum dolor sit amet consectetur. ",
    link1: "Lire Plus",
    link2: "Faire une demande",
  },
  {
    id: 1,
    content: "Le Maire de la commune de Zogbodomey",
    price: "350 F CFA",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
    liste1: "n neque diam donec m cras consectetur bibendum",
    liste2: "adipiscing. Metus vel tristique morbi aenean laor.",
    liste3: "Lorem ipsum dolor sit amet consectetur. ",
    liste4: "Lorem ipsum dolor sit amet consectetur. ",
    liste5: "Lorem ipsum dolor sit amet consectetur. ",
    liste6: "Lorem ipsum dolor sit amet consectetur. ",
    link1: "Lire Plus",
    link2: "Faire une demande",
  },
];
</script>
