<template>
    <div v-if="showTask" class="border border-white d-flex flex-column p-5">

        <div class="d-flex flex-row justify-content-end align-items-end mt-4 gap-4">
            <div> <button @click="goToMain" class="border border-white bg-info rounded">Back</button></div>
            <div> <button @click="editData(showTask)" class="border border-white bg-info rounded">Edit</button></div>
            <div><button @click="deleteData" class="border border-white bg-danger rounded">Delete</button></div>
        </div>
        <div class="d-flex my-3 p-4">
            <div class="d-flex flex-column align-items-start">
                <p>{{showTask.description}}</p>
                <p>{{showTask.state}}</p>
                <p>{{showTask.date}}</p>
            </div>

        </div>
    </div>
</template>

<script>

import { mapActions, mapState } from 'pinia';
import { todoStore } from '../../store/todoStore';
export default {
    setup() {
        // initialize the store
        const todoStoreget = todoStore()
        return { todoStoreget }
    },
    data() {
        return {
            showTask: null
        };
    },
    mounted() {

        try {
            this.createListLocalStore();
            this.showTask = todoStore().getData(this.$route.params.id)
        } catch (error) {
            console.error(error)

            this.$router.push({ name: "Main" });
        }
    },
    methods: {
        ...mapActions(todoStore, ['createListLocalStore']),
        deleteData() {
            if (this.showTask.state == "Uncompleted") {
                this.todoStoreget.delete(this.showTask.id)
                this.$router.push({ name: "Main" });
            }
            else {
                alert('this todo must be uncompleted!')
                this.$router.push({ name: "Main" });
            }
        },
        editData(item) {
            this.todoStoreget.update(item)
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