<template>
 <div>
  <Header @click.native="post"></Header>
  <div class="info">
      <div class="crew">  
        <div class="crew_name">
          录入人员：
        </div>
        <input type="text" placeholder="某某某" style="border: 0" v-model="wname">
      </div>
        <div class="source">
        <div class="source_name">分派方式</div>
            <van-dropdown-menu id="defaul" >
              <van-dropdown-item v-model="dispatchWay" :options="DispatchWay" />
            </van-dropdown-menu>
    
      </div> 
      <div class="block">
      <span class="demonstration">日期</span>
      <el-date-picker
        v-model="entryDate"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
      </div>
      <div class="area">
        <div class="area_name">地区</div>
            <van-dropdown-menu id="defaul" >
              <van-dropdown-item v-model="region" :options="Region" />
            </van-dropdown-menu>
      </div>
      <div class="source">
        <div class="source_name">客户来源</div>
            <van-dropdown-menu id="defaul" >
              <van-dropdown-item v-model="customerSource" :options="CustomerSource" />
            </van-dropdown-menu>
    
      </div>
      <div class="crew">  
        <div class="crew_name">
          联系人：
        </div>
        <input type="text" placeholder="请填写联系人" style="border: 0" v-model="userName">
      </div> 
      <div class="sex">
        <div class="sex_name">性别</div>
            <van-dropdown-menu id="defaul" >
              <van-dropdown-item v-model="userSex" :options="UserSex" />
            </van-dropdown-menu>
    
      </div>
      <div class="crew">  
        <div class="crew_name">
          联系电话：
        </div>
        <input type="text" placeholder="请填写联系电话" style="border: 0" v-model="userPhone">
      </div> 
      <div class="crew">  
        <div class="crew_name">
          预算{人民币/月}：
        </div>
        <input type="text" placeholder="请填写预算" style="border: 0" v-model="budget">
      </div> 
      
      <div class="crew">  
        <div class="crew_name">
          客户行业：
        </div>
        <input type="text" placeholder="请填写客户行业" style="border: 0" v-model="customerIndustry">
      </div> 
      <div class="crew">  
        <div class="crew_name">
          需求办公人数/面积
        </div>
        <input type="text" placeholder="5人/100平方米" style="border: 0" v-model="demandNumber">
      </div> 
         <div class="crew">  
        <div class="crew_name">
          租聘需求
        </div>
        <input type="text" placeholder="请填写需求" style="border: 0" v-model="demandRental">
      </div> 
      <div class="block">
      <span class="demonstration">起租日：</span>
      <el-date-picker
        v-model="rentalDate"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
      </div>
      <div class="crew">  
        <div class="crew_name">
          租期(月)：
        </div>
        <input type="text" placeholder="请填写租期" style="border: 0" v-model="lease">
      </div> 
      <div class="district">
        <div class="district_name">区域</div>
            <van-dropdown-menu id="defaul" >
              <van-dropdown-item v-model="rentalArea" :options="RentalArea" />
            </van-dropdown-menu>
    
      </div>
    <ul >
      <li class="more_info"  v-if = "Flag" @click="hide"> 更多用户信息></li>
      <li  v-if = "aFlag" class="nones">
        
      <div class="crew">  
        <div class="crew_name">
          职位：
        </div>
        <input type="text" placeholder="请填写职位" style="border: 0" v-model="position">
      </div> 
      <div class="crew">  
        <div class="crew_name">
          邮箱地址：
        </div>
        <input type="text" placeholder="请填写邮箱地址" style="border: 0" v-model="userEmail">
      </div> 
      <div class="crew">  
        <div class="crew_name">
          公司名称：
        </div>
        <input type="text" placeholder="请填写公司名称" style="border: 0" v-model="userCompany">
      </div> 
      
      <div class="area">
        <div class="area_name">租赁用途：</div>
            <van-dropdown-menu id="defaul" >
              <van-dropdown-item v-model="rentalUse" :options="RentalUse" />
            </van-dropdown-menu>
      </div>
      <div class="area">
        <div class="area_name">预约类型：</div>
            <van-dropdown-menu id="defaul" >
              <van-dropdown-item v-model="appointmentType" :options="AppointmentType" />
            </van-dropdown-menu>
      </div>
      <div class="area">
        <div class="area_name">家庭状况：</div>
            <van-dropdown-menu id="defaul" >
              <van-dropdown-item v-model="userFamily" :options="UserFamily" />
            </van-dropdown-menu>
      </div>
      <div class="crew">  
        <div class="crew_name">
          兴趣爱好：
        </div>
        <input type="text" placeholder="请填写兴趣爱好" style="border: 0" v-model="userHobby">
      </div> 
      
      <p  @click="block" class="more_info" >折叠用户信息 ></p>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import Header from './header'
import axios from 'axios'
export default {
data() {
    return {
      show: false,
    
      wid:'',
      wname:'',
      entryDate: '',
      rentalDate:'',
      region:'',
      customerSource: '',
      userSex: '',
      userFamily:'',
      rentalArea:'',
      appointmentType:'',
      customerIndustry:'',
      userName:'',
      userPhone:'',
      budget:'',
      rentalUse:'',
      demandNumber:'',
      lease:"",
      position:'',
      userEmail:'',
      userCompany:'',
      userHobby:'',
      demandRental:'',
      dispatchWay:'',
     

      Flag: true ,
      aFlag: false,
      Block_Flag:true,
      Region:[
       {
         text:'北京',value:'北京'
       },
       {
         text:'上海',value:'上海'
       },
       {
         text:'杭州',value:'杭州'
       }
      ],
        DispatchWay: [
        { text: '分派他人', value: '0' },
        { text: '分派自己', value: '1' },
        
      ],
        CustomerSource: [
        { text: '朋友介绍', value: '朋友介绍' },
        { text: '网上消息', value: '网上消息' },
        { text: '看到广告', value: '看到广告' },
      ],
       UserSex:[
        {text:'男',value:'男'},
        {text:'女',value:'女'},
        {text:'保密',value:'保密'},
      ], 
      RentalUse:[
        {text:'商铺',value:'商铺'},
        {text:'办公',value:'办公'},
        
      ],
      RentalArea:[
        {text:'1号区域',value:'1号区域'},
        {text:'2号区域',value:'2号区域'},
        {text:'3号区域',value:'3号区域'},
      ],
        UserFamily:[
        {text:'已婚',value:'已婚'},
        {text:'未婚',value:'未婚'},
        {text:'保密',value:'保密'},
      ],
        AppointmentType:[
        {text:'已预约',value:'已预约'},
        {text:'未预约',value:'未预约'},
        
      ],
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          } 
      },
      }
    },
    methods:{
     hide(){
       this.Flag = false
       this.aFlag = true 
      
     },
     block(){
       this.aFlag = false
       this.Flag = true
     },
     post(){
        let data = {
        "wname":this.wname,
        "dispatchWay":this.dispatchWay,
        "entryDate":this.entryDate,
       "region":this.region,
        "customerSource":this.customerSource,
        "userName": this.userName,
        "userSex":this.userSex,
        "userPhone":this.userPhone,
        "budget":this.budget,
        "customerIndustry":this.customerIndustry,
        "demandNumber":this.demandNumber,
        "demandRental":this.demandRental,
        "rentalDate":this.rentalDate,
        "lease":this.lease,
        "rentalArea":this.rentalArea,
        "position":this.position,
        'userEmail':this.userEmail,
        'userCompany':this.userCompany,
        'rentalUse':this.rentalUse,
        "appointmentType":this.appointmentType,
        "userFamily":this.userFamily,
        "userHobby":this.userHobby,
        } 
        
        axios({
          url:'http://121.36.58.166:9091/insertUserInfo',
          method:'POST',
           data,
        }).then(()=>{
          alert('提交成功')
          })  
         .catch(() => {
           alert('请填写完整信息')
           }) 
     },
    },
    components:{
          Header
     },
     mounted(){
        this.wname=localStorage.getItem('Login')
        this.wid=localStorage.getItem('wid')
     }
    }
</script>
<style lang='stylus' scoped>
  @import '~assets/stylesheets/border.styl';
   
 
  .info 
     height 6.17rem
     position absolute
     top .5rem
     left 0
     right 0
     bottom 0
     overflow auto
  .crew
    display flex
    justify-content space-between
    border 0 0 1px 0, #ccc
    
    .crew_name
      display inline-block
      line-height .5rem
      padding-left 0.1rem 
    input 
       text-align right
       padding-right .1rem
    
      
  .district,.attn,.allot,.source,.sex,.area
    height .5rem 
    display flex
    justify-content space-between
    border 0 0 1px 0, #ccc 
    .district_name,.attn_name,.allot_name,.source_name,.sex_name,.area_name
     padding-left .1rem
     height .5rem
     width 50% 
     line-height .5rem
     
  #defaul
      box-sizing border-box
      display inline-block 
      background none
      border 0
      margin-right .1rem
  #defaul[data-v-40a693b2]
      display flex
      justify-content center
      
  #defaul[data-v-40a693b2]>>>.van-dropdown-menu__title
      color #696969
  #defaul[data-v-40a693b2]>>>.van-cell
      padding .1rem .1rem
  .block
    display flex
    justify-content space-between
    border 0 0 1px 0, #ccc
    .demonstration
       padding-left 0.1rem
       line-height .5rem
    .el-date-editor[data-v-40a693b2]
      padding-right .05rem 
      .el-date-editor[data-v-40a693b2] /deep/ .el-input__inner
        border 0
     
  .more_info[data-v-40a693b2]
     display inline-block
     width 100%
     color blue
     text-align center
     margin .2rem  0
     font-size .14rem
     cursor pointer
</style>