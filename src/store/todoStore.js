import { v4 as uuidv4 } from 'uuid';
import { defineStore } from 'pinia';

export const todoStore = defineStore('todoStore', {
    state: () => {
        return {
            todos: [],
            todoEdit: [],
        }
    },
    getters: {
        getTodos: (state) => state.todos,
        getUserEdit: (state) => state.userEdit,
        getLengthTodo: (state) => state.todos.length,
        getCompletedTodo: (state) => state.todos.filter(todo => todo.state == "Completed"),
        getTodoEdit: (state) => state.todoEdit
    },
    actions: {
        add(todo) {
            try {
                todo.id = uuidv4();
                this.todos.push(todo);


            } catch (error) {
                throw error
            }
        },
        update(todo) {
            try {
                this.todos[this.findIndex(todo.id)] = todo
                this.todoEdit = todo
            } catch (error) {
                throw error
            }
        },
        delete(id) {
            try {
                this.todos.splice(this.findIndex(id), 1)
            } catch (error) {
                throw error
            }
        },
        findIndex(id) {
            try {
                return this.todos.findIndex(todoFind => todoFind.id == id)
            } catch (error) {
                throw error
            }
        },
        updateStatus(id){
            try {
              const getSameTodo=  this.todos.find(todo => todo.id == id)
              getSameTodo.state = getSameTodo.state == "Completed" ? "Uncompleted" : "Completed" 
            } catch (error) {
                
            }
        },
        getData(id) {
            try {
                const todoFound = this.todos.find(todo => todo.id == id)
                if (todoFound == null)
                    throw new Error('Todo not found!')
                return todoFound
            } catch (error) {
                throw error
            }
        },
        cleanTodoForm(){
            this.todoEdit = []
        }
    },
})