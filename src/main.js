import Vue from 'vue'
import App from './App.vue'


import './utils/rem'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css' //element-ui的css
Vue.use(ElementUI)



import router from './routers'


import { Select } from 'element-ui'

import { DropdownMenu, DropdownItem, Uploader, NavBar, Toast, Dialog, Step, Steps, Icon, List, Picker } from 'vant'
Vue.use(DropdownMenu).use(DropdownItem).use(Uploader).use(NavBar).use(Toast).use(Dialog).use(Icon).use(Step).use(Steps).use(List).use(Picker)

Vue.config.productionTip = false






new Vue({
    render: h => h(App),
    router,
    Select
}).$mount('#app')