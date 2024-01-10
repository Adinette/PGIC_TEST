
<template>
    <Banner :title="commissions_page.title" />
    <Content
        :picture="commissions_page.picture"
        :name="commissions_page.name"
        :role="commissions_page.role"
        :title="commissions_page.title_content"
        :description="commissions_page.description"
      />
    <section>
        <div class="mx-40 my-6">
            <div class=" px-4 py-8 mx-auto md:px-10 lg:px-32 bg-teal-50 dark:text-gray-900">
                <h2 class="text-4xl font-bold text-center mb-10 leadi xl:max-w-3xl  dark:text-green-700">Fonctionnement
                </h2>
                <p>dznznzdznznz dznznzdznznz dznznzdznznzdznznzdznznzdznznzdznznz fddd
                    dznznzdznznz dznznzdznznz dznznzdznznzdznznzdznznzdznznzdznznz fddd
                    dznznzdznznz dznznzdznznz dznznzdznznzdznznzdznznzdznznzdznznz fddd
                    dznznzdznznz dznznzdznznz dznznzdznznzdznznzdznznzdznznzdznznz fddd
                    dznznzdznznz dznznzdznznz dznznzdznznzdznznzdznznzdznznzdznznz fddd
                    dznznzdznznz dznznzdznznz dznznzdznznzdznznzdznznzdznznzdznznz fddd
                    vdznznzdznznz dznznzdznznz fddd
                    dznznzdznznz dznznzdznznz dznznzdznznzdznznzdznznzdznznzdznznz fddd
                    dznznzdznznz dznznzdznznz dznznzdznznzdznznzdznznzdznznzdznznz fddd
                    dznznzdznznz dznznzdznznz dznznzdznznzdznznzdznznzdznznzdznznz fddd
                    dznznzdznznz dznznzdznznz dznznzdznznzdznznzdznznzdznznzdznznz fddd
                </p>
                <Table/>
            </div>

        </div>
    </section>
    <Social />
</template>
<script setup>
const commissions_page = {
      title: "CA KOUSSOUKPA",
      picture: "/images/maire/commission1.png",
      name: "Yvon AGOSSA",
      role: "CA KOUSSOUKPA",
      title_content: "Biographie",
      description: `Amet urna lorem fames ac erat donec malesuada elementum. Sit amet tortor dignissim blandit tincidunt. Tellus tempus cursus metus amet tortor vitae et pharetra. Vel nibh et lectus euismod etiam malesuada. Dignissim in nibh purus iaculis elementum sed vitae.
    Tristique sapien mattis non a neque enim. Nec vestibulum fermentum at massa elementum. Tincidunt ipsum tristique amet mattis duis quis. Interdum magna at condimentum adipiscing est porttitor aliquet. Aliquet in venenatis eget commodo cursus id a libero. Scelerisque molestie nullam urna mus accumsan malesuada.
    Diam ligula etiam ultrices viverra in. Malesuada cus diam elementum neque tempus. Diam eu eu accumsan nisi semper scelerisque vulputate quam. Amet adipiscing purus nibh dolor eu diam. Ornare nunc elit magna pulvinar pretium. Magna adipiscing pretium leo volutpat phasellus morbi. Viverra feugiat sed molestie non id ornare.`,
}
</script>