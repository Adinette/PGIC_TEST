<template>
    <Banner :title="agenda_page.title" />
    <Evennements/>
    <Social />
    <Subscribe />
</template>
    
<script setup>
const agenda_page = {
    title: "Agenda et événements",
};
</script>