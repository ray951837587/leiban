<template>
	<div>
		<div class="left">
			<el-col :span="12">
			    <el-menu
			      default-active="2"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose"
			      background-color="#545c64"
			      text-color="#fff"
			      active-text-color="#ffd04b">
			      	<el-submenu index="1">
				        <template slot="title">
				          	<!--<i class="el-icon-location"></i>-->
				          	<span>山西省</span>
				        </template>
				        <el-submenu index="1-1">
				          	<template slot="title">太原</template>
				          	<el-menu-item index="1-1-1">迎泽区</el-menu-item>
				        </el-submenu>
				        <el-submenu index="1-2">
				          	<template slot="title">大同</template>
				          	<el-menu-item index="1-2-1">whatever区</el-menu-item>
				        </el-submenu>
			      	</el-submenu>
			      	<el-submenu index="2">
				        <template slot="title">
				          	<!--<i class="el-icon-location"></i>-->
				          	<span>广东省</span>
				        </template>
				        <el-submenu index="1-1">
				          	<template slot="title">深圳</template>
				          	<el-menu-item index="1-1-1">南山区</el-menu-item>
				        </el-submenu>
				        <el-submenu index="1-2">
				          	<template slot="title">广州</template>
				          	<el-menu-item index="1-2-1">天河区</el-menu-item>
				        </el-submenu>
			      	</el-submenu>
			    </el-menu>
		  	</el-col>
		</div>
	</div>
</template>

<script>
	export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
	.left{
		float: left;
		background: ghostwhite;
		height: 200px;
		width: 100px;
		display: table;
		position: fixed;
		top: 50px;
		left: 0px;
	}
	
	.el-menu-vertical-demo{
		width: 110px;
		display: table;
		height: 674px;
	}
</style>