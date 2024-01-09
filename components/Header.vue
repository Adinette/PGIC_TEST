<template>
	<header class="p-4  dark:text-black">
		<div class="container flex justify-between h-16 mx-auto">
			<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"
					class="w-8 h-8 dark:text-violet-400">
					<path
						d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z">
					</path>
					<path
						d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z">
					</path>
				</svg>
			</a>
			<ul class="items-stretch hidden space-x-3 lg:flex">
				<li class="flex has-dropdown">
					<a rel="noopener noreferrer" href="#"
						class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent">Mairie</a>
					<ul
						class="dropdown hidden absolute bg-white border rounded-md shadow-md mt-12 ml-10 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60">
						<button class="p-2 text-gray-500 text-end hover:text-gray-700"><svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-x-lg" viewBox="0 0 16 16">
								<path
									d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
							</svg></button>
						<li>
							<a class="block px-4 py-2  hover:text-green-700 active:text-green-700" href="/maire">La Mairie</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Le Conseil de Supervision</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Le Conseil Communal</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Secrétariat Exécutif</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Agenda et évenements</a>
						</li>
					</ul>
				</li>
				<li class="flex">
					<a rel="noopener noreferrer" href="#"
						class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent">Services</a>
				</li>
				<li class="flex has-dropdown">
					<a rel="noopener noreferrer" href="#"
						class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent">Zogbodomey</a>
					<ul
						class="dropdown hidden absolute bg-white border rounded-md shadow-md mt-12 ml-10 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60">
						<button class="p-2 text-gray-500 text-end hover:text-gray-700"><svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-x-lg" viewBox="0 0 16 16">
								<path
									d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
							</svg></button>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">La commune</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Vivre à Zogbodomey</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Les partenaires</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Les OSC/ONG</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Les SDE</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Produits du terroir</a>
						</li>
					</ul>
				</li>
				<li class="flex">
					<a rel="noopener noreferrer" href="#"
						class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent">Projets</a>
				</li>
				<li class="flex has-dropdown">
					<a rel="noopener noreferrer" href="#"
						class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent">Publications</a>
					<ul
						class="dropdown hidden absolute bg-white border rounded-md shadow-md mt-12 ml-10 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60">
						<button class="p-2 text-gray-500 text-end hover:text-gray-700"><svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-x-lg" viewBox="0 0 16 16">
								<path
									d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
							</svg></button>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Actualités</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Documenthèque</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Marchés Publics</a>
						</li>
						<li>
							<a class="block px-4 py-2 hover:text-green-700 active:text-green-700" href="#">Recrutement</a>
						</li>
					</ul>
				</li>
				<li class="flex">
					<a rel="noopener noreferrer" href="#"
						class="flex items-center px-4 -mb-1 hover:text-green-700 active:text-green-700 border-b-2 dark:border-transparent">Nous joindre</a>
				</li>
			</ul>
			<div class="items-center flex-shrink-0 hidden lg:flex">
				<button class="self-center px-6 py-3 font-semibold rounded-lg dark:bg-amber-400 dark:text-gray-900">Suivre
					ma demande</button>
			</div>
			<button class="p-4 lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
					class="w-6 h-6 dark:text-gray-100">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
					</path>
				</svg>
			</button>
		</div>
	</header>
</template>

<script>
export default {
  mounted() {
    const dropdownLinks = this.$el.querySelectorAll('.has-dropdown a');

    dropdownLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const dropdown = link.nextElementSibling;
        dropdown.classList.toggle('hidden');
      });
    });

    const closeButtons = this.$el.querySelectorAll('.dropdown button');

    closeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const dropdown = button.closest('.dropdown');
        dropdown.classList.add('hidden');
      });
    });
  }
};


</script>
