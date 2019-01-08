<template>
	<div>
		<a href="#p" title="">go to p</a>
		{{str}}
		<div>
			{{msg}}
		</div>
		<router-link to='/detail'>详情页</router-link>
		<router-link to='/'>主页</router-link>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<p id='p'>fdfdfdfdfdfd</p>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				str:'我是列表页',
				msg:''
			}
		},
		created(){
			this.firstEnter=true;
		},
		activated(){
			if(!this.$route.meta.isBack||this.firstEnter){
				this.getData();
			}
			this.firstEnter=false;
			this.$route.meta.isBack=false;
		},
		beforeRouteEnter(to,from,next){
			if(from.name=='detail'){
				to.meta.isBack=true;
			}
			next();
		},
		methods:{
			getData(){
				console.log('执行了一次数据请求')
				this.msg='ajax获取的数据'//模拟后台请求
			}
		}
	}	
</script>
