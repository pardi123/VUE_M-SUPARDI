<template>
    <div class="columns">
        <div class="img">
            <img :src="`${news[idNews].urlToImage}`" alt="">
        
        </div>
        <div class="text">
            <h1>
                {{ news[idNews].title }}
            </h1>
        </div>
        <div class="deskripsi">
            <p>&nbsp;&nbsp;&nbsp;&nbsp; judul</p> 
            <br>
            <p>
                {{ news[idNews].content }}
            </p>
            <br>
            <p>lanjutkan baca <a  @click="toLinkNews" href="javascript:void(0)" >Disini</a> </p><br>
            <button class="btn" @click="toLandingPage">Kembali</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newsDeskripsi',
    computed: {
        news(){
            
        return this.$store.state.news.listNews

        },
        idNews(){
            return this.$route.params.id
        }
    },
    methods: {
         fetchNews(){
            this.$store.dispatch('news/fetchList')      
        },
        toLandingPage(){
            this.$router.push('/')
        },
        toLinkNews(){
            window.location = this.news[this.idNews].url
        }
        
    },
    mounted() {
        this. fetchNews()
    },
}
</script>

<style scope>
    *{
        padding:0;
        margin:0;
    }
    .columns{
        box-sizing: border-box;
        width:100%;
        display:flex;
        flex-flow: column;
        justify-content:flex-start;
    }
    .img{
        box-sizing: border-box;
        width:100%;
    
    }
    .img > img{
        width:100%;
        height:700px;
        object-fit: cover;
    }
    .text{
        box-sizing: border-box;
        width:100%;
        text-align: center;
        padding-left:10%;
        padding-right:10%;
    }
    .text >h1{
        padding:10px;
        margin: 10px;
    }
    .deskripsi{
        box-sizing: border-box;
        width:  100%;
        display: block;
        padding: 10px;
    }
    .text> p{
        padding:10px;
        padding-bottom:30px !important;
    }
    .btn{
        padding:5px;
    }
</style>