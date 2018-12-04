const routers = [
    {
        path: '/index',
        name:'index',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/search',
        name:'search',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/content_search.vue'], resolve)
    },
    {
        path: '/echart',
        name:'echart',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/echart_result.vue'], resolve)
    },
    {
        path: '/',
        name:'login',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },
    {
        path: '/date',
        name:'date',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/only_search.vue'], resolve)
    },
    {
        path: '/search_mobile',
        name:'search_mobile',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/content_search_for_mobile.vue'], resolve)
    },
    {
        path: '/sort',
        name:'sort',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/pai_ming.vue'], resolve)
    }
];
export default routers;