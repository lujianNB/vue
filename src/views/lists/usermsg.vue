<template>
    <div class="usermsg">
        <ul>
            <li v-for="(item,index) of msg" :key="index">
                <router-link :to="{name:item.name}" active-class="active">{{item.content}}</router-link >
            </li>
        </ul>
        <keep-alive :include="$route.meta.include">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
export default{
    data(){
        return {
            msg:[
                {
                    content:'基本信息',
                    name:'base'
                },
                {
                    content:'跟单记录',
                    name:'gen'
                },
                {
                    content:'签约信息',
                    name:'qian'
                }
            ]
        }
    }
}
</script>
<style lang='stylus' scoped>
.usermsg
    flex 1
    display flex
    flex-direction column
    background-color #f5f5f9
    ul 
        width 100%
        background-color #fff
        display flex
        height .43rem
        li 
            flex 1
            height 100%
            a 
                display block
                width 100%
                height 100%
                text-align center
                line-height .43rem
                color #555
                font-size .14rem
                &.active
                    color #108ee9
                    border-bottom 2px solid #108ee9
</style>