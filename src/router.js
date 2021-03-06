import Vue from "vue";
import Router from "vue-router";
import Top from "./views/Top.vue";
import Ask from "./views/Ask.vue";
import LastestNews from "./views/LatestNews.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "Top",
            component: Top
        },
        {
            path: "/ask",
            component: Ask
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/About.vue")
        }
    ]
});