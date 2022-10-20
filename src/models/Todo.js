class Todo{
    // constructor(){
    //     this.id = null
    //     this.description = ''
    //     this.state = null
    //     this.date = new Date().toLocaleString()
    // }
    constructor(id=null, description='', state=null){
        this.id = id
        this.description = description
        this.state = state
        this.date = new Date().toLocaleString()
    }
}

export default Todo