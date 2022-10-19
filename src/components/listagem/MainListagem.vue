<template>
    <div class="flex justify-around">
        <p> {{getCompletedTodo.length}}/ {{getLengthTodo}}</p>
        <p></p>
        <div class="flex gap-2">
            <button @click="changeShow('All')" type="button" class="btn btn-info">Show All</button>
            <button @click="changeShow('Uncompleted')" type="button" class="btn btn-info">Uncompleted</button>
            <button @click="changeShow('Completed')" type="button" class="btn btn-info">Completed</button>
            <button @click="goToCreate" type="button" class="btn btn-info">Criar</button>
        </div>
    </div>
    <div v-for="(item) in filter" class="flex mt-4 items-center justify-around">
        <input @click="updateStatus(item.id)" :checked="item.state == 'Completed'" class="form-check-input"
            type="checkbox" name="flexRadioDefault" id="{{item.id}}">
        <h5>{{item.description}}</h5>
        <button @click="goToDetail(item)" type="button" class="btn btn-info">Details</button>
    </div>
    {{showTodos}}
</template>

<script>
import { todoStore } from '../../store/todoStore'
import { mapActions, mapState } from 'pinia'
export default {
    setup() {
        // initialize the store
        const todoStoreGet = todoStore()
        return { todoStoreGet }
    },
    data() {
        return {
            position: '',
            filter: ''
        }
    },
    computed: {
        ...mapState(todoStore, ['getTodos', 'getLengthTodo', 'getCompletedTodo']),
        changeValue() {

            return
        }
    },
    mounted(){
        this.changeShow('All')
    },
    methods: {
        ...mapActions(todoStore, ['updateStatus']),
        changeShow(changeValue) {
            if (changeValue == "All")
             return   this.filter= this.getTodos
            if (changeValue == "Completed")
            return   this.filter= this.getCompletedTodo
        },
        goToCreate() {
            this.$router.push({ name: 'Create' })
        },
        goToDetail(item) {
            this.$router.push({ name: "Detail", params: { id: item.id } });
        },
        getComplete(todos) {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>