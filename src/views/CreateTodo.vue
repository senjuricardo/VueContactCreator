<template>
    <div class="border border-white p-5">
        <HeaderListagem></HeaderListagem>
        <MainCreate></MainCreate>
    </div>
</template>

<script>
import HeaderListagem from '../components/listagem/HeaderListagem.vue';

import MainCreate from '../components/create/MainCreate.vue';
export default {
    setup() {
        return {};
    },
    components: { HeaderListagem, MainCreate }
}
</script>

<style>

</style>