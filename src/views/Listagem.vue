<template>
    <div class=" border border-white p-5 h-fit">
        <HeaderListagem></HeaderListagem> 
        <MainListagem></MainListagem>
    </div>
       
</template>

<script>
import HeaderListagem from '../components/listagem/HeaderListagem.vue';
import MainListagem from '../components/listagem/MainListagem.vue';
export default {
    setup() {
        return {};
    },
    components: { HeaderListagem, MainListagem }
}
</script>

<style lang="scss" scoped>

</style>