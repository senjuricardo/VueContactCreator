<template>
    <div v-if="showContact" class="border border-white d-flex flex-column p-5">
        <div class="d-flex flex-row justify-content-end align-items-end mt-4 gap-4">
            <div> <button @click="goToMain" class="border border-white bg-Secondary rounded">Retroceder</button></div>
            <div> <button @click="editData(showContact)" class="border border-white bg-info rounded">Editar</button></div>
            <div><button @click="deleteData" class="border border-white bg-danger rounded">Eliminar</button></div>
        </div>
        <div class="d-flex my-3 p-4">
            <div class="d-flex flex-column align-items-start">
                <p>{{showContact.name}}</p>
                <p>{{showContact.telemovel}}</p>
                <p>{{showContact.email}}</p>
                <p>{{showContact.morada}}</p>
            </div>

        </div>
    </div>
</template>

<script>

import { mapActions, mapState } from 'pinia';
import { ContactStore } from '../../store/ContactStore';
export default {
    setup() {
        // initialize the store
        const contactStoreget = ContactStore()
        return { contactStoreget }
    },
    data() {
        return {
            showContact: null
        };
    },
    mounted() {
        try {
            this.createListLocalStore();
            this.showContact = ContactStore().getData(this.$route.params.id)
        } catch (error) {
            console.error(error)
            this.$router.push({ name: "Main" });
        }
    },
    methods: {
        ...mapActions(ContactStore, ['createListLocalStore']),
        deleteData() {
                this.contactStoreget.delete(this.showContact.id)
                this.$router.push({ name: "Main" }); 
        },
        editData(item) {
            this.contactStoreget.update(item)
            this.$router.push({ name: "Create" });
        },
        goToMain() {
            this.$router.push({ name: "Main" });
        }
    },

}
</script>

<style >

</style>