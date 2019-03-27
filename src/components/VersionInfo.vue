<template>
	<div class="Index">
		<div class="header" ref="header" @click="a()">
			<transition name="header">
				<div class="dialog1" style="top: 16%;left: 46%;" v-show="show_dialog1">
					<p style="position:relative;top: 40%;overflow: hidden;">
						你好，这里是赵磊
					</p>
				</div>
			</transition>
			<transition name="header">
				<div class="dialog2" style="bottom: -48%;left: 46%;" v-show="show_dialog2">
					<p style="position:relative;top: 40%;">英文名叫ray</p>
				</div>
			</transition>
			<transition name="header">
				<div class="dialog3" style="left: 32%;top: 2%;" v-show="show_dialog3">
					<p style="position:relative;top: 40%;">这名字是不是很省事儿</p>
				</div>
			</transition>
			<transition name="header">
				<div class="dialog4" style="right: -60%;top: -17%;" v-show="show_dialog4">
					<p style="position:relative;top: 40%;">点击查看更多</p>
				</div>
			</transition>
		</div>
		<br />
		<!-- <button @click="show_dialog = !show_dialog" style="position: fixed;left: 0;top: 60%;">显示</button> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show_header:true,
				show_dialog1:false,
				show_dialog2:false,
				show_dialog3:false,
				show_dialog4:false,
				img:require("@/assets/GIF/female.gif"),
				img1:require("@/assets/GIF/desk.gif"),
				count:0
			};
		},
		methods: {
			a() {
				this.count++;
				if(this.count === 0){
					this.$refs.header.style.backgroundImage = "url("+this.img1+")";
				}else
				if(this.count === 1){
					this.show_dialog1 = !this.show_dialog1;
				}else
				if(this.count === 2){
					this.show_dialog2 = !this.show_dialog2
				}else
				if(this.count === 3){
					this.show_dialog3 = !this.show_dialog3
				}else
				if(this.count === 4){
					this.show_dialog4 = !this.show_dialog4
				}if(this.count === 5){
					this.show_dialog1 = !this.show_dialog1;
					this.show_dialog2 = !this.show_dialog2;
					this.show_dialog3 = !this.show_dialog3;
					this.show_dialog4 = !this.show_dialog4;
					this.$refs.header.style.backgroundImage = "url("+this.img+")";
					this.count = -1;
				}
			}
		},
		mounted() {
		},
		created(){
// 			this.$http.post('http://jsonplaceholder.typicode.com/users',{})
// 					.then(function(response){
// 						var arr = '';
// 						arr = response.data;
// 						console.log(response)
// 					})
		}
	}
</script>

<style scoped>
	.header .dialog1,.dialog2,.dialog3,.dialog4{
		font-family: "楷体";
		color: #000000;
		background: gainsboro;
		width: 120px;
		height: 120px;
		border-radius: 50% 50%;
		text-align: center;
		font-size: larger;
		position: relative;
	}
	
	.header{
		height: 600px;
		background: #FFF url(../assets/GIF/desk.gif) no-repeat 50% 50%;
		width: 100%;
		/* border-bottom: 1px solid #000; */
		opacity: 1;
		margin-left:0;
		cursor: pointer;
	}
	
	.header-enter{
		opacity: 0;
	}
	
	.header-enter-active,.header-leave-active{
		transition: opacity 1s;
	}
	
	.header-leave-to{
		opacity: 0;
	}
	
	.suanju{
		
	}
	
	.Index{
		margin: auto;
		/* height: 1000px; */
		/* display: flex;
		flex-wrap: nowrap; */
	}
</style>