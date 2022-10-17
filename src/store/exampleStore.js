import { v4 as uuidv4 } from 'uuid';
import { defineStore } from 'pinia';

export const exampleStore = defineStore('exampleStore', {
    state: () => {
        return {
            users: [],
            userEdit:[]
        }
    },
    getters: {
        getUsers: (state) => state.users,
        getUserEdit: (state) => state.userEdit
    },
    actions: {
        add(user) {
            try {
                user.id = uuidv4();
                this.users.push(user);
                
            } catch (error) {
                throw error
            }
        },
        update(user) {
            try {
                this.users[this.users.findIndex(userFind => userFind.id == user.id)] = user
                this.userEdit = user
                console.log(user)
            } catch (error) {
                throw error
            }
        },
        cleanUserForm(){
            this.userEdit = []
        }
    },
})