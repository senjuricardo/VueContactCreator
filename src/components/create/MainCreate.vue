<template>
    <div class="border border-white p-5">
        <form @submit.prevent="sendContact" @reset="clearForm">
        <div class="form-group p-2">
            <input class="form-control" type="text" id="name" ref="name" name="name"
                placeholder="name" v-model="createContact.name">
            <div v-if="formContact.nameError" class="errors">name is required!</div>
        </div>

        <div class="form-group p-2">
            <input class="form-control" type="number" id="telemovel" ref="telemovel" name="telemovel"
                placeholder="telemovel" v-model="createContact.telemovel">
        </div>
        <div class="form-group p-2">
            <input class="form-control" type="email" id="email" ref="email" name="email"
                placeholder="email" v-model="createContact.email">
        </div>
        <div class="form-group p-2">
            <input class="form-control" type="text" id="morada" ref="morada" name="morada"
                placeholder="morada" v-model="createContact.morada">
        </div>

        <div class="flex gap-2 justify-end">
            <input class="btn btn-primary" type="submit" value="Send">
            <input class="btn btn-danger" type="reset" value="Clean">
        </div> 
</form>
{{createContact}}
    </div>
</template>

<script>
import { ContactStore } from '../../store/ContactStore'
import Contact from '../../models/Contact'
import isEmptyValue from '../../validators/isEmptyValue'
export default {
    setup() {
        const ContacttoreGet = ContactStore()
        return { ContacttoreGet }
    },
    data() {
        return {
            editToolID: -1,
            isUpdate: false,
            createContact: this.ContacttoreGet.getContactEdit ? this.ContacttoreGet.getContactEdit : new Contact(),
            formContact: {
                nameError: false,
            }
        }
    },
    watch: {
        'createContact.name': function () {
            if (isEmptyValue.exec(this.createContact.name))
                this.formContact.nameError = true
            else
                this.formContact.nameError = false
        },
    },
    computed: {
        // getContacts() {
        //     return this.ContactStore.getContacts
        // },
    },
    methods: {
        sendContact(e) {
            if(isEmptyValue.exec(this.createContact.name)){
                this.formContact.nameError = true
                return
            }
            // Object.entries(this.createContact).forEach(contact => {
            //     const [key, value] = contact
            //     if (isEmptyValue.exec(value) && key != 'id')
            //         this.formContact[`${key}Error`] = true
            // });
            // if (Object.values(this.formContact).some(value => value == true))
            //     return
            if (this.createContact.id) {
                this.ContacttoreGet.update(this.createContact)
                this.ContacttoreGet.cleanTodoForm()
                console.log('updatdted')
                this.resertForm()
                this.$router.push({ name: 'Main' })
            }
            else {
                this.ContacttoreGet.add(this.createContact)
                console.log('added')
                this.resertForm()
                this.$router.push({ name: 'Main' })
             }
        },
        resertForm() {
            this.createContact = new Contact();
        },
        clearForm(){
            this.createContact.name = '',
            this.createContact.email='',
            this.createContact.telemovel='',
            this.createContact.morada=''
        }
    }
}
</script>

<style>

</style>