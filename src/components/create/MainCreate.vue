<template>
    <div class="border border-white p-5">
        <form @submit.prevent="sendTodo" @reset="resertForm">
        <div class="form-group p-2">
            <input class="form-control" type="text" id="description" ref="description" name="description"
                placeholder="description" v-model="createTodo.description">
            <div v-if="formTodo.descriptionError" class="errors">description is required!</div>
        </div>
        <div class="flex gap-3">
            <p>Completed?</p>
            <input name="Completed" type="radio" id="one" value="Completed" v-model="createTodo.state" />
            <input  name="Uncompleted" type="radio" id="two" value="Uncompleted" v-model="createTodo.state" />
            <div v-if="formTodo.stateError" class="errors">state is required!</div>
        </div>
        <div class="flex gap-2 justify-end">
            <input class="btn btn-primary" type="submit" value="Send">
            <input class="btn btn-danger" type="reset" value="Clean">
        </div>
</form>
    </div>
</template>

<script>
import { todoStore } from '../../store/todoStore'
import Todo from '../../models/Todo'
import isEmptyValue from '../../validators/isEmptyValue'
export default {
    setup() {
        // initialize the store
        const TodoStoreGet = todoStore()
        return { TodoStoreGet }
    },
    data() {
        return {
            editToolID: -1,
            isUpdate: false,
            createTodo: this.TodoStoreGet.getTodoEdit? this.TodoStoreGet.getTodoEdit : new Todo(),
            // this.todoStore.getUserEdit? this.userStoreTeste.getUserEdit :
            formTodo: {
                descriptionError: false,
                stateError: false,
            }
        }
    },
    watch: {
        'createTodo.description': function () {
            if (isEmptyValue.exec(this.createTodo.description))
                this.formTodo.descriptionError = true
            else
                this.formTodo.descriptionError = false
        },
        'createTodo.state': function () {
            if (isEmptyValue.exec(this.createTodo.state))
                this.formTodo.stateError = true
            else
                this.formTodo.stateError = false
        }
    },
    computed: {
        getTodos() {
            return this.todoStore.getTodos
        },
        // changeTitleButoon(){
        //     return this.createUser.id ? 'Update' :'Send'
        // }
    },
    methods: {
        sendTodo(e) {
            Object.entries(this.createTodo).forEach(todo => {
                const [key, value] = todo
                if (isEmptyValue.exec(value) && key != 'id')
                    this.formTodo[`${key}Error`] = true
            });
            if (Object.values(this.formTodo).some(value => value == true))
                return

            if (this.createTodo.id) {
                this.TodoStoreGet.update(this.createTodo)
                console.log('updatdted')
                this.resertForm()
                this.$router.push({ name: 'Main' })
            }
            else {
                this.TodoStoreGet.add(this.createTodo)
                console.log('added')
                this.resertForm()
                this.$router.push({ name: 'Main' })
            }
        },
        resertForm() {
            this.createTodo = new Todo();
            //  this.TodoStoreGet.cleanTodoForm
            //     this.formUser.firstNameError= false;
            //     this.formUser.lastNameError= false;
            //     this.formUser.ageError= false;
            //     this.formUser.genderError= false
            // this.formUser = {}

        },
    }
}
</script>

<style>
input[name="Uncompleted"] {
    accent-color: red;
}
input[name="completed"] {
    accent-color: blue;
}
</style>