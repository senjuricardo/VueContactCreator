<template>
    <div class=" border border-white p-5 h-fit">
        <Header></Header>
        <MainListagem></MainListagem>
    </div>
       
</template>

<script>

import MainListagem from '../components/listagem/MainListagem.vue';
import Header from '../components/widgets/Header.vue';
export default {
    setup() {
        return {};
    },
    components: { MainListagem, Header }
}
</script>

<style lang="scss" scoped>

</style>