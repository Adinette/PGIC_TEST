<template>
<Banner :title="pam_page.title" />
    <Content
    :picture="pam_page.picture"
    :name="pam_page.name"
    :role="pam_page.role"
    :title="pam_page.title_content"
    :description="pam_page.description"
  />
  <Biographie
    :title_biographie="pam_page.title_biographie"
    :description="pam_page.description_biographie"
  />
    <Social />
    <Subscribe/>
</template>

<script setup>
const pam_page = {
  title: "Premier Adjoint au Maire",
  picture: "/images/maire/pam1.png",
  name: "Daniel Ludovic HOUESSE",
  role: "Premier Adjoint au Maire",
  title_content: "Biographie",
  title_biographie: "Fonctionnement",
  description: `Amet urna lorem fames ac erat donec malesuada elementum. Sit amet tortor dignissim blandit tincidunt. Tellus tempus cursus metus amet tortor vitae et pharetra. Vel nibh et lectus euismod etiam malesuada. Dignissim in nibh purus iaculis elementum sed vitae.
Tristique sapien mattis non a neque enim. Nec vestibulum fermentum at massa elementum. Tincidunt ipsum tristique amet mattis duis quis. Interdum magna at condimentum adipiscing est porttitor aliquet. Aliquet in venenatis eget commodo cursus id a libero. Scelerisque molestie nullam urna mus accumsan malesuada.
Diam ligula etiam ultrices viverra in. Malesuada cus diam elementum neque tempus. Diam eu eu accumsan nisi semper scelerisque vulputate quam. Amet adipiscing purus nibh dolor eu diam. Ornare nunc elit magna pulvinar pretium. Magna adipiscing pretium leo volutpat phasellus morbi. Viverra feugiat sed molestie non id ornare.`,
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