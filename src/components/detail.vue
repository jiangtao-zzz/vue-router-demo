<template>
	<div>
		{{str}}
		<div>
			{{msg}}
		</div>
		<router-link to='/list#p'>列表页</router-link>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				str:"我是详情页",
				msg:''
			}
		},
		created(){
			console.log('fd')
		},
		methods:{


		}
	}
</script>

<style type="text/css">
	
</style>