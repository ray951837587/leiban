<template>
	<div>
		<div class="header">
			<a class="header-text" href="#">
				光影丛生
			</a>
			<div style="border: 1px;">
				<input style="border:0;width:500px;float:left;height: 29px;margin-top: 46px;margin-left: 30px;border-radius: 0px;" />
				<el-button type="primary" icon="el-icon-search" size="mini"></el-button>
			</div>
		</div>
		<div class="header-line">
			<hr color="aliceblue" size="1"/>
			<a style="margin-left: 80px;color: cornflowerblue;font-size: large;" >电影</a>
			<a style="margin-left: 80px;color: cornflowerblue;font-size: large;" >电视剧</a>
			<a style="margin-left: 80px;color: cornflowerblue;font-size: large;" >分类</a>
			<a style="margin-left: 80px;color: cornflowerblue;font-size: large;" >影评</a>
			<a style="margin-left: 80px;color: cornflowerblue;font-size: large;" >榜单</a>
		</div>
		<router-view/>
	</div>
</template>

<script>
	export default {
      	data() {
        	return {
        	}
      	},
      	methods: {
      		f1(){
      		}
      	},
      	mounted() {
		}
    }
</script>

<style scoped>
	.header{
		line-height: 120px;
		background: whitesmoke;
	}
	
	.header-line{
		line-height: 50px;
		background: whitesmoke;
	}
	
	.header-text{
		color: cornflowerblue;
		font:"楷体";
		font-size: x-large;
		float: left;
		margin-left: 100px;
	}
	
	.search{
		height: 20px;
	}
</style>