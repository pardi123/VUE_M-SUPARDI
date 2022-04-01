<template>
    <div id="todoList">
        <div class="card">
            <div class="card-header">
                <h4>Todo List</h4>
            </div>
            <div class="card-body">
            <div v-if="getTodos.todos.length === 0">
                <p>Data masih kosong mohon di isi <label for="test">Disini</label> </p>
            </div>
                <div class="list" v-for="(todos,index) in getTodos.todos" :key="index">
            
                   <div class="link" @click="deskripsiPage(`${index}`)">{{ index+1 }}. {{ todos.text }}</div>
                
                
         
                <div id="btn">
                <button class="btn bg-danger" @click="deleteTodo(index)">Hapus</button> 
                <button class="btn" @click="changeForm(index,todos.text)">Edit</button>
                </div>

                </div>
            </div>
            <div class="card-footer" v-if="form === true">
                <input type="text" v-model="newTodo" id="test" v-on:keyup.enter="addNewTodo"> <button class="btn" @click="addNewTodo">Tambahkan</button>
            </div>
            <div class="card-footer" v-else>
                <input type="text" v-model="textEdit" class="test" v-on:keyup.enter="editTodo(editId,getTodos.todos[editId].deskripsi)
                "> <button class="btn" @click="editTodo(editId,getTodos.todos[editId].deskripsi)">Edit</button>
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'landingPage',
    computed: {
        getTodos(){
            return this.$store.state
        }
    },
    data() {
        return {
            newTodo: '',
            form: true,
            i:0,
            editId:0,
            textEdit: '',
        }
    },
    methods: {
        addNewTodo(){
         if(this.newTodo != ''){
            this.$store.dispatch("addNewTodo",this.newTodo);
            this.newTodo = ''

                
         }
        },
        deleteTodo(id){
         
            this.$store.dispatch("deleteTodo",id);
        },
        changeForm(id,todo){
            this.text = todo
            this.editId = id
            this.form = false
        },
        editTodo(id,deksripsi)
        {
            this.change = {
                sendId: id,
                sendTodo:this.textEdit,
                deskTodos:deksripsi,

            };
            this.$store.dispatch("editTodo",this.change);
            this.textEdit = '';
            this.form = true;
        },
        deskripsiPage(id){
            this.$router.push(id)
        }
    },
}
</script>

<style>
    body{
        padding:0;
        margin: 0;font-family: Arial, Helvetica, sans-serif;
        
    }
    #todoList{
        box-sizing: border-box;
        width:100%;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 20px;
    }
    .card{
        box-sizing: border-box;
        width:60%;
        box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
        background-color:rgb(254, 255, 254);
        border-radius: 10px;

    }
    .card-header{
        box-sizing: border-box;
        padding:5px;
        padding-left: 5%;
        padding-right: 5%;
        width: 100%;
        background-color: rgb(93, 93, 240);
    }
    .card-body{
        box-sizing: border-box;
        width:100%;
        padding:10px;
        padding-left: 5%;
        padding-right: 5%;
        border-bottom: 1px solid rgb(206, 167, 167) ;
    }
    .list{
        box-sizing: border-box;
        margin-top:10px;
        margin-bottom: 10px;
        width:100%;
        display:flex;
        flex-flow: row wrap;
        justify-content:space-between; 
    }
    .card-footer{
        box-sizing: border-box;
        padding:5px;
        margin-top:5px;
        padding-bottom:10px;
        padding-left: 3%;
        padding-right: 3%;
        display:flex;
        flex-flow: row wrap;
        justify-content:space-between;
       
    }
    input{
        width:80%;
        padding:5px !important;
        border-radius: 1px;
        border: 1px solid  rgb(104, 92, 240)k;
    }
    h4{
        color:#fff !important;
        font-size: 20px;;
    }
    a{
        color: rgb(105, 0, 0) ;
        text-decoration: none !important;
    }
    #btn {
        width:20%;
        display: flex;
        flex-flow: row wrap;
        justify-content:space-between;
    }
    .text {
        width:70%;
    }
    .btn {
        padding:10px;
        border:1px solid #fff;
        border-radius: 3px;
        background-color: rgb(93, 93, 240);
        color:#ffff !important;
        cursor: pointer;


    }
    .bg-danger{
        background-color:rgb(241, 41, 41) !important;
    }
    label{
        color:blue;
        cursor: pointer;
    }
    label:hover{
        color:blueviolet;
    }

</style>