class Contact{
    // constructor(){
    //     this.id = null
    //     this.description = ''
    //     this.state = null
    //     this.date = new Date().toLocaleString()
    // }
    constructor(id=null, name='', telemovel='', email='', morada='' ){
        this.id = id
        this.name = name
        this.telemovel = telemovel
        this.email = email
        this.morada = morada
    }
}

export default Contact