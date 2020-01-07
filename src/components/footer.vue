<template>
    <footer>
       <div><img src="http://121.36.58.166:8888/group1/M00/00/00/wKgAS14O88qAUitPAAGaqSJx-UY097.PNG" alt=""></div>
       <p><span></span>欢迎回来，<span class="user">{{username}}</span>。</p>
       <ul>
           <li v-for="(item,index) of lists" :key="index">
               <router-link :to="item.path">
                   <img :src="item.img" alt="">
                   <span>{{item.text}}</span>
                </router-link>
           </li>
        </ul>
    </footer>
</template>
<script>
export default{
    data(){
        return {
            username:'',
            lists:[
                {id:0,img:'http://121.36.58.166:8888/group1/M00/00/00/wKgAS14HQLKAEfmpAAAIAUWJ2Fo970.PNG',text:'客户列表',path:'/list'},
                {id:1,img:'http://121.36.58.166:8888/group1/M00/00/00/wKgAS14HQTeAX2zVAAAJMuEUdG4539.PNG',text:'客户信息录入',path:'/xinxi'},
                {id:2,img:'http://121.36.58.166:8888/group1/M00/00/00/wKgAS14HQWqAMfrkAAALtVgqQ3Q155.PNG',text:'地图找房',path:'/map'},
                {id:3,img:'http://121.36.58.166:8888/group1/M00/00/00/wKgAS14HQZaARntnAAAKoexnXj4635.PNG',text:'订单竞价系统',path:'/shop'}
            ]
        }
    },
    mounted(){
        this.username=localStorage.getItem('Login')
    }
}
</script>
<style lang='stylus' scoped>
@import "../assets/stylesheets/border.styl";
footer 
    height 6.17rem
    div
        width 100%
        height 1.6rem
        img 
            width 100%
            height 100%
    p
        height 0.5rem
        font-size .14rem
        color #333
        display flex
        justify-content flex-start
        align-items center
        margin-left .15rem
        border 0 0 1px 0,#999
        span:nth-of-type(1)
            height .15rem
            width 0
            border-color #108ee9
            border-width 2px
            border-style solid
        span:nth-of-type(2)
            font-size .16rem
            color #333
    ul
        width 100%
        display flex
        flex-wrap wrap
        align-content flex-start
        li
            height 1.05rem
            width 33.3%
            a
                width 100%
                height 100%
                display flex
                flex-direction column
                justify-content space-around
                align-items center
                img 
                    width .54rem
                    height .54rem
                span
                    color #333333
                    font-size .14rem
</style>