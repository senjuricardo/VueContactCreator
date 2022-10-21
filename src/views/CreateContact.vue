<template>
    <div class="border border-white p-5">
       <Header></Header>
        <MainCreate></MainCreate>
    </div>
</template>

<script>


import MainCreate from '../components/create/MainCreate.vue';
import Header from '../components/widgets/Header.vue';
export default {
    setup() {
        return {};
    },
    components: { MainCreate, Header }
}
</script>

<style>

</style>