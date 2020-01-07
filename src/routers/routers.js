const List = () =>
    import ( /* webpackChunkName: "lujiannb" */ '@/views/lists/index.vue')
const Xinxi = () =>
    import ( /* webpackChunkName: "lujiannb" */ '@/views/xinxi/index.vue')
const Map = () =>
    import ( /* webpackChunkName: "lujiannb" */ '@/views/map/index.vue')
const Shop = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/shop/index.vue')
const Dak = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/dak/index.vue')
const UserMsg = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/lists/usermsg.vue')
const Base = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/lists/base.vue')
const Gen = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/lists/gen.vue')
const Qian = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/lists/qian.vue')
const Pinggu = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/lists/pinggu.vue')
const Beizhu = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/lists/beizhu.vue')
const Tianjiabeizhu = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/lists/tianjiabeizhu.vue')
const Daikan = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/lists/daikan.vue')
const Search = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/lists/search.vue')
const Reload = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/lists/reload.vue')
const Reload1 = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/lists/reload1.vue')
const Sign = () =>
    import ( /* webpackChunkName: "lujiannb" */ '@/views/map/sign')
const Daily = () =>
    import ( /* webpackChunkName: "lujiannb" */ '@/views/map/daily')
const CheckSign = () =>
    import ( /* webpackChunkName: "lujiannb" */ '@/views/map/checksign')
const CheckDaily = () =>
    import ( /* webpackChunkName: "lujiannb" */ '@/views/map/checkdaily')
const ShopItem = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/shopitem/index.vue')
const ForSuccessful = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/shopitem/ForSuccessful.vue')
const Login = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/login/index.vue')
const Kaoqingrl = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/kaoqingrl/index.vue')
const Home = () =>
    import ( /* webpackChunkName: "lujiannb" */ '../views/home/home.vue')
const routers = [{
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            include: 'home'
        }
    },
    {
        path: '/list',
        component: List,
        redirect: '/list/all',
        children: [{
                path: 'all',
                name: 'all',
                meta: {
                    include: 'all'
                }
            },
            {
                path: 'new',
                name: 'new',
                meta: {
                    include: 'new'
                }
            },
            {
                path: 'running',
                name: 'running',
                meta: {
                    include: 'running'
                }
            },
            {
                path: 'qianyue',
                name: 'qianyue',
                meta: {
                    include: 'qianyue'
                }
            },
            {
                path: 'more',
                name: 'more',
                meta: {
                    include: 'more'
                }
            }
        ],
        meta: {
            include: 'List'
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            include: 'Login'
        }
    },
    {
        path: '/kaoqingrl',
        component: Kaoqingrl,
        meta: {
            include: 'kaoqingrl'
        }
    },
    {
        path: '/xinxi',
        component: Xinxi,
        name: 'Xinxi',
        meta: {
            include: 'Xinxi'
        }
    },
    {
        path: '/dak',
        component: Dak,
        meta: {
            include: 'Dak'
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            include: 'search'
        }
    },
    {
        path: '/reload',
        component: Reload,
        meta: {
            include: 'reload'
        }
    },
    {
        path: '/reload1',
        component: Reload1,
        meta: {
            include: 'reload1'
        }
    },
    {
        path: '/pinggu/:id',
        component: Pinggu,
        name: 'pinggu',
        meta: {
            include: 'pinggu'
        }
    },
    {
        path: '/tianjiabeizhu/:id',
        component: Tianjiabeizhu,
        name: 'tianjiabeizhu',
        meta: {
            include: 'tianjiabeizhu'
        }
    },
    {
        path: '/beizhu/:id',
        component: Beizhu,
        name: 'beizhu',
        meta: {
            include: 'beizhu'
        }
    },
    {
        path: '/daikan/:id',
        component: Daikan,
        name: 'daikan',
        meta: {
            include: 'daikan'
        }
    },
    {
        path: '/list/:id',
        component: UserMsg,
        redirect: '/list/:id/base',
        name: 'usermsg',
        children: [{
                path: 'base',
                component: Base,
                name: 'base',
                meta: {
                    include: 'base'
                }
            },
            {
                path: 'gen',
                component: Gen,
                name: 'gen',
                meta: {
                    include: 'gen'
                }
            },
            {
                path: 'qian',
                component: Qian,
                name: 'qian',
                meta: {
                    include: 'qian'
                }
            }
        ]
    },
    {
        path: '/map',
        component: Map,
        redirect: '/map/sign',
        meta: {
            include: 'Map'
        },
        children: [{
                path: 'sign',
                component: Sign,
                meta: {
                    include: 'Sign'
                }
            },
            {
                path: 'daily',
                component: Daily,
                meta: {
                    include: 'Daily'
                }
            },
            {
                path: 'checksign',
                component: CheckSign,
                meta: {
                    include: 'CheckSign'
                }
            },
            {
                path: 'checkdaily',
                component: CheckDaily,
                meta: {
                    include: 'CheckDaily'
                }
            }
        ]
    },
    {
        path: '/shop',
        component: Shop,
        name: 'Shop',
        meta: {
            include: 'Shop'
        }
    }, {
        path: '/shop/shopitem',
        component: ShopItem,
        name: 'ShopItem',
        meta: {
            include: 'ShopItem'
        }
    }, {
        path: '/shop/shopitem/ForSuccessful',
        component: ForSuccessful,
        name: 'ForSuccessful',
        meta: {
            include: 'ForSuccessful'
        }
    },
    {
        path: '*',
        component: Error,
        meta: {
            include: 'Error'
        }
    }
]
export default routers