<template>
	<div>
		<div class="header">
			<a style="color: lavender;margin-left: 15px;" href="#">所有日志</a>
			<a style="color: lavender;margin-left: 15px;" href="http://localhost:8080/#/SearchLog">查找</a>
			<a style="color: lavender;margin-left: 15px;" href="#">预留</a>
			<a style="color: lavender;margin-left: 15px;" href="#">预留</a>
		</div>
		
		<div>
			<router-view></router-view>
		</div>
	
	</div>
</template>

<script>
</script>

<style scoped>
	.header{
		background: cornflowerblue;
		line-height: 50px;
		position: fixed;
		top: 0px;
		width: 100%;
		z-index: 100;
	}
	
</style>