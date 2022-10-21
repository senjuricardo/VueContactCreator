<template>
    <div >   
            <button @click="goToCreate" type="button" class="btn btn-info">Adicionar</button>
    </div>
    <div v-for="(item) in getContacts" class="flex mt-4 items-center justify-around">
        <h5>{{item.name}}</h5>
        <button @click="goToDetail(item)" type="button" class="btn btn-info">Ver</button>
    </div> 
    <h5 class="mt-2" v-if="!getContacts.length ">Contacts not found!</h5>
    
</template>

<script>
import { ContactStore } from '../../store/ContactStore'
import { mapActions, mapState } from 'pinia'
export default {
    setup() {
        // initialize the store
        const ContactStoreGet = ContactStore()
        return { ContactStoreGet }
    },
    data() {
        return {
            position: '',
            filter: ''
        }
    },
    computed: {
        ...mapState(ContactStore, ['getContacts']),
    },
    
    mounted(){
        this.createListLocalStore()
    },
    methods: {
        ...mapActions(ContactStore, ['updateStatus','createListLocalStore']),
        goToCreate() {
            this.$router.push({ name: 'Create' })
        },
        goToDetail(item) {
            this.$router.push({ name: "Detail", params: { id: item.id } });
        },
    }
}
</script>