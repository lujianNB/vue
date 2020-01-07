<template>
    <div class="shopitem">
        <ShopItem_top :state="jingjia" @onreq='onrequest'/>
        <ShopItem_down :item="request"/>
        <button @click="onshow">竞价</button>
        <van-picker
            class="integral"
            v-if="f"
            show-toolbar
            title="选择积分"
            :columns="columns"
            @cancel="onCancel"
            @confirm="onConfirm"
        />
        <van-dialog
            v-model="show"
            title="标题"
            show-cancel-button
        >
        </van-dialog>
    </div>
</template>
<script>
import ShopItem_top from './ShopItem_top'
import ShopItem_down from './ShopItem_down'
import request from '../../utils/request'
export default{
    data(){
        return {
            columns: ['100', '150', '200', '250', '300'],
            f:false,
            show: false,
            integral:0,
            flag:false,
            wid:this.$route.query.wid,
            itemUid:this.$route.query.itemUid,
            itemId:this.$route.query.itemId,
            request:{},
            jingjia:'',
            result:{}
        }
    },
    methods: {
        onConfirm(value) {
            this.$dialog.confirm({
                message: `确认要花${value}积分吗？`
            }).then(() => {
             // on confirm，竞价时竞拍，30秒后跳转，竟速时竞拍，立即跳转，流拍，立即跳转，关闭积分列表，记录竞拍积分
            this.integral=value
            this.f=false
            this.jingjia='已竞价'
            request({
                url:`http://121.36.58.166:9091/getBidding?wid=${this.wid}&id=${this.itemId}&score=${this.integral}`,
                method:'get',
                }).then(res=>{
                    this.result=res.data
                }).catch(err=>console.log(err))
            
            }).catch(() => {
            // on cancel
            });
        },
        onCancel() {
            this.$toast('您取消了');
            this.f=false
        },
        onshow(){
            this.f=true
        },
        onrequest(value){ //如果是30秒之前竞价，30秒后跳转结果，如果是30-90秒竞价，马上跳转结果，如果90-93，就流拍
            if(value=='1'){
                this.$router.push({ name: 'ForSuccessful', params: this.result })
            }else if(value=='2'){
                this.$router.push({ name: 'ForSuccessful', params: this.result })
            }else if(value=='3'){
                console.log(this.result.data)
                this.$router.push({ name: 'ForSuccessful', params: this.result })
            }
        },
    },
    components:{
        ShopItem_top,
        ShopItem_down
    },
    async mounted(){
        await request({
                url:`http://121.36.58.166:9091/getUser?id=${this.$route.query.itemUid}`,
                method:'get',
                }).then(res=>{
                    this.request=res.data.data
                }).catch(err=>console.log(err))
    }
}
</script>
<style lang='stylus' scoped>
    .shopitem
        height 100%
        overflow hidden
        background-color #f8f8f8
        padding .2rem .1rem 0rem .1rem
        button 
            position absolute
            bottom 0
            left 0
            width 100%
            height .48rem
            background-color #108ee9
            color #fff
            border 0
        .integral
            position absolute
            left 0
            bottom 0
            width 100%
</style>