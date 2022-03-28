<template>
    <div class="listNews">
    <h1>News Breaking</h1>
        <div class="row">
            <div class="box-news" v-for="(news,index) in listNews" :key="index" @click="deskripsiPage(`${index}`)">
          
                <h4 class="header">{{ news.author }}  </h4>

                <div class="news-img">
                    <img :src="`${news.urlToImage}`" alt="">
                </div>

                <div class="news-text">
                    <h4>
                        {{ news.title }}

                    </h4>
                    <p></p>
                </div>
                <p class="date">
                    {{ news.publishedAt }}
                </p>
             </div> 
        </div>
       
    </div>
</template>

<script>
export default {
    name: 'landingPage',
    computed: {
        listNews(){
            return this.$store.state.news.listNews
        }
    },
    methods: {
        fetchNews(){
            this.$store.dispatch('news/fetchList')      
        },
        deskripsiPage(id){
            this.$router.push(id)
        },
    },
    mounted(){
        this.fetchNews();
    }
}
</script>

<style scope>
    *{
        padding:0;
        margin:0;
    }
    .listNews{
        box-sizing: border-box;
        width:100%;
        padding:10px;
        padding-left: 10%;
        padding-right: 10%;
    }
    .listNews > h1{
        text-align: center;
        margin: 10px;
        padding: 10px;
    }
    .row {
        box-sizing: border-box;
        width:100%;
        display:flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .box-news{
        box-sizing: border-box;
        padding: 10px;
        width:40%;
        box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
        border-radius:5px;
        display:flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin-bottom:20px;
    }
    .news-img{
        box-sizing: border-box;
        width:30%;
        padding: 20px;
    }
    .news-img > img{
        width:100%;
        height:100px;
        object-fit: cover;
    }
    .news-text{
        width:50%;
        padding:20px;
        display: block;
    }
    .header{
        width:  100%;
        padding-bottom: 20px;
        text-align: center;
    }
    .date{
        width: 100%;
        text-align: center;
    }
    @media only screen and (max-width: 600px) {
        .box-news {
            width: 100%;
        }
        .news-img{
            box-sizing: border-box;
            width:30%;
            padding: 20px;
        }
        .news-text{
             width:50%;
             padding:20px;
        }
    }
</style>