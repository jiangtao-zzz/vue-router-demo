import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/list'
import Detail from '@/components/detail'

Vue.use(Router)

 const router=new Router({
  routes: [
    {
      	path: '/',
      	name: 'HelloWorld',
      	component: HelloWorld
    },
    {
		path:'/list',
		name:'list',
		component:List,
		meta:{
			keepAlive:true,//此组件需要缓存
			isBack:false//判断是否是detail页面后退而来的
		}
    },
    {
    	path:'/detail',
    	name:'detail',
    	component:Detail,
    	meta:{
    		keepAlive:false
    	}
    },
   
  ],
  mode:'history',
  scrollBehavior(to,from,pos){
  	if(pos){
  		return pos;
  	}else{
  		if(from.meta.keepAlive){
  			from.meta.y=document.documentElement.scrollTop;
  		}
  		if(to.hash){
  			return {selector:to.hash}
  		}
  		return {x:0,y:to.meta.y||0}
  	}
  }

});


export default router