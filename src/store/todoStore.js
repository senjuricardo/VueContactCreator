import { v4 as uuidv4 } from 'uuid';
import { defineStore } from 'pinia';
import Todo from '../models/Todo'

export const todoStore = defineStore('todoStore', {
    state: () => {
        return {
            todos: [],
            todoEdit: null,
        }
    },
    getters: {
        getTodos: (state) => state.todos,
        getUserEdit: (state) => state.userEdit,
        getLengthTodo: (state) => state.todos.length,
        getCompletedTodo: (state) => state.todos.filter(todo => todo.state == "Completed"),
        getUncompletedTodo: (state) => state.todos.filter(todo => todo.state == "Uncompleted"),
        getTodoEdit: (state) => state.todoEdit
    },
    actions: {
        add(todo) {
            try {
                todo.id = uuidv4();
                this.todos.push(todo);
                localStorage.setItem('taskArray', JSON.stringify(this.todos))
            } catch (error) {
                throw error
            }
        },
        update(todo) {
            try {
                this.todos[this.findIndex(todo.id)] = todo
                this.todoEdit = todo
                localStorage.setItem('taskArray', JSON.stringify(this.todos))
            } catch (error) {
                throw error
            }
        },
        delete(id) {
            try {
                this.todos.splice(this.findIndex(id), 1)
                localStorage.setItem('taskArray', JSON.stringify(this.todos))
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
              localStorage.setItem('taskArray', JSON.stringify(this.todos))
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
            this.todoEdit = null
        },
        createListLocalStore(){
            const storeObject = JSON.parse(localStorage.getItem('taskArray'))
            this.todos = storeObject.map(item => new Todo(item.id,item.description,item.state)) 
        }
    },
})