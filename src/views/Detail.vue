<template>
    <div class="border border-white p-5">
        <Header></Header>
        <DetailMain></DetailMain>
    </div>
</template>

<script>
import DetailMain from '../components/detail/DetailMain.vue';
import Header from '../components/widgets/Header.vue';
export default {
    setup() {
        return {};
    },
    components: { DetailMain, Header }
}
</script>

<style>

</style>