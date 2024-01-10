<template>
  <header class="p-4 dark:text-black">
    <div class="flex justify-between h-16 mx-auto">
      <NuxtLink
        to="/"
        aria-label="Back to homepage"
        class="flex items-center p-2"
      >
        <img src="~/assets/images/home/logo.png" class="h-12" alt="" />
      </NuxtLink>
      <ul class="items-stretch hidden space-x-3 text-lg lg:flex">
        <li class="flex has-dropdown">
          <NuxtLink
            rel="noopener noreferrer"
            class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent"
            >Mairie</NuxtLink
          >
          <ul
            class="dropdown hidden absolute bg-white border rounded-md shadow-md mt-12 ml-10 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60"
          >
            <button class="p-2 text-gray-500 text-end hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
                />
              </svg>
            </button>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/maire"
                >La Mairie</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/supervision"
                >Le Conseil de Supervision</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/comunal"
                >Le Conseil Communal</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/secretariatExec"
                >Secrétariat Exécutif</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/agenda"
                >Agenda et évenements</NuxtLink
              >
            </li>
          </ul>
        </li>
        <li class="flex">
          <NuxtLink
            rel="noopener noreferrer"
            to="/services"
            class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent"
            >Services</NuxtLink
          >
        </li>
        <li class="flex has-dropdown">
          <NuxtLink
            rel="noopener noreferrer"
            to="#"
            class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent"
            >Zogbodomey</NuxtLink
          >
          <ul
            class="dropdown hidden absolute bg-white border rounded-md shadow-md mt-12 ml-10 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60"
          >
            <button class="p-2 text-gray-500 text-end hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
                />
              </svg>
            </button>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/commune"
                >La commune</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/vivre"
                >Vivre à Zogbodomey</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/partenaires"
                >Les partenaires</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/oscOng"
                >Les OSC/ONG</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/sde"
                >Les SDE</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/produits"
                >Produits du terroir</NuxtLink
              >
            </li>
          </ul>
        </li>
        <li class="flex">
          <NuxtLink
            rel="noopener noreferrer"
            to="/projets"
            class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent"
            >Projets</NuxtLink
          >
        </li>
        <li class="flex has-dropdown">
          <NuxtLink
            rel="noopener noreferrer"
            to="#"
            class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent"
            >Publications</NuxtLink
          >
          <ul
            class="dropdown hidden absolute bg-white border rounded-md shadow-md mt-12 ml-10 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60"
          >
            <button class="p-2 text-gray-500 text-end hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
                />
              </svg>
            </button>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/actualités"
                >Actualités</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="/documenthèque"
                >Documenthèque</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="#"
                >Marchés Publics</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block px-4 py-2 hover:text-green-700 active:text-green-700"
                to="#"
                >Recrutement</NuxtLink
              >
            </li>
          </ul>
        </li>
        <li class="flex">
          <NuxtLink
            rel="noopener noreferrer"
            to="/contact"
            class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent"
            >Nous joindre</NuxtLink
          >
        </li>
      </ul>
      <div class="items-center flex-shrink-0 hidden lg:flex">
        <button
          class="self-center px-6 py-3 font-semibold rounded-lg dark:bg-amber-400 text-white"
        >
          Suivre ma demande
        </button>
      </div>
      <button class="p-4 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 dark:text-gray-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    const dropdownLinks = this.$el.querySelectorAll(".has-dropdown a");

    dropdownLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const dropdown = link.nextElementSibling;
        dropdown.classList.toggle("hidden");
      });
    });

    const closeButtons = this.$el.querySelectorAll(".dropdown button");

    closeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const dropdown = button.closest(".dropdown");
        dropdown.classList.add("hidden");
      });
    });
  },
};
</script>
