import vue from 'vue'
import Router from 'vue-router'
import example from './components/example'
import head from './components/head'

vue.user(Router)

const router = new Router({
    mode: "history",
    routes: [
      {path: "/", name: "home", components: "example"},
      {path: "login", name: "login", components: "login"},
      {path: "head", name: "head", components: "head", children: [
        {path: "head/index", name: "index", copmonents: "index"}
      ]}
    ] 
})

router.beforeEach((to,from,next)=>{
  next()
})

export default router
