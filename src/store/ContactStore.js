import { v4 as uuidv4 } from 'uuid';
import { defineStore } from 'pinia';
import Contact from '../models/Contact'

export const ContactStore = defineStore('ContactStore', {
    state: () => {
        return {
            contacts: [],
            contactEdit: null,
        }
    },
    getters: {
        getContacts: (state) => state.contacts,
        getContactEdit: (state) => state.contactEdit,
        getTodoEdit: (state) => state.todoEdit
    },
    actions: {
        add(contact) {
            try {
                contact.id = uuidv4();
                this.contacts.push(contact);
                localStorage.setItem('contactArray', JSON.stringify(this.contacts))
            } catch (error) {
                throw error
            }
        },
        update(contact) {
            try {
                this.contacts[this.findIndex(contact.id)] = contact
                this.contactEdit = contact
                localStorage.setItem('contactArray', JSON.stringify(this.contacts))
            } catch (error) {
                throw error
            }
        },
        delete(id) {
            try {
                this.contacts.splice(this.findIndex(id), 1)
                localStorage.setItem('contactArray', JSON.stringify(this.contacts))
            } catch (error) {
                throw error
            }
        },
        findIndex(id) {
            try {
                return this.contacts.findIndex(contactFind => contactFind.id == id)
            } catch (error) {
                throw error
            }
        },
        // updateStatus(id){
        //     try {
        //       const getSameTodo=  this.todos.find(todo => todo.id == id)
        //       getSameTodo.state = getSameTodo.state == "Completed" ? "Uncompleted" : "Completed" 
        //       localStorage.setItem('taskArray', JSON.stringify(this.todos))
        //     } catch (error) {
                
        //     }
        // },
        getData(id) {
            try {
                const contactFound = this.contacts.find(contact => contact.id == id)
                if (contactFound == null)
                    throw new Error('contact not found!')
                return todoFound
            } catch (error) {
                throw error
            }
        },
        cleanTodoForm(){
            this.contactEdit = null
        },
        // createListLocalStore(){
        //     const storeObject = JSON.parse(localStorage.getItem('contactArray'))
        //     this.contacts = storeObject.map(item => new Contact(item.id,item.name,item.telemovel,item.email, item.morada)) 
        // }
    },
})