<template>
	<div>
		<div class="header">
			<a @click="go('')" class="header-text" href="#">
				书不尽言
			</a>
			<div style="border: 1px;">
				<input style="border:0;width:500px;float:left;height: 29px;margin-top: 46px;margin-left: 30px;border-radius: 0px;" />
				<!-- <select s>
					<option>书名</option>
					<option>作者</option>
					<option>内容</option>
				</select> -->
				<el-button type="primary" icon="el-icon-search" size="mini"></el-button>
			</div>
		</div>
		<div class="header-line">
			<hr color="99FFCC" size="1"/>
			<a @click="go('book')" style="margin-left: 80px;color: #006666;font-size: large;" >书山有路</a>
			<a @click="go('learn')" style="margin-left: 80px;color: #006666;font-size: large;" >学海无涯</a>
			<a @click="go('think')" style="margin-left: 80px;color: #006666;font-size: large;" >慎言</a>
			<a @click="go('word')" style="margin-left: 80px;color: #006666;font-size: large;" >思辨</a>
			<a @click="go('me')" style="margin-left: 80px;color: #006666;font-size: large;" >无所求</a>
		</div>
		<router-view/>
		
		
		<div>
			<Modal
				v-model="modal1"
				title="一个小问题"
				@on-ok="check()"
				@on-cancel="cancel()"
				ok-text="确定"
				cancel-text="取消">
				<p style="color: #006666;font:'楷体';font-size: large;" v-text="mean"></p>
				<input class="input" v-model="answer"/>
			</Modal>
		</div>
	</div>
</template>

<script>
	export default {
      	data() {
        	return {
				modal1:false,
				mean:"We just lost some of them,But they lost all of us——出自何处",
				answer:""
        	}
      	},
      	methods: {
      		go(obj){
				if(obj === 'me'){
					this.answer = "";
					this.modal1 = true;
				}else{
					this.$router.push("/Index/Reader/"+obj);
				}
      		},
			check(){
				var obj = this.answer;
				if(obj === "守望尘世" || obj.toLowerCase() === "The Leftovers".toLowerCase()){
					this.$router.push("/me");
				}else{
					this.$Message.info("有缘再见")
				}
			}
      	},
      	mounted() {
		}
    }
</script>

<style scoped>
	.header{
		line-height: 120px;
		background: #CCFFCC;
	}
	
	.header-line{
		line-height: 50px;
		background: #CCFFCC;
	}
	
	.header-text{
		color: #006666;
		font:"楷体";
		font-size: x-large;
		float: left;
		margin-left: 100px;
	}
	
	.search{
		height: 20px;
	}
	
	.input{
		border: 1px solid #004085;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		width: 60%;
		height: 25px;
		outline:none;
		text-align: center;
		margin-left: 90px;
	}
</style>