<template>
	<div>
		<div class="near">
			<span style="font-size: large;color: #333333;font-weight: 800;">
				最近在读
			</span>
			<Button style="margin-left: 600px;" shape="circle" icon="md-arrow-round-back" size="small"></Button>
			<Button shape="circle" icon="md-arrow-round-forward" size="small"></Button>
			<hr size="1" /><br />
			<div class="book">
				<a @click="intro()">
					<img src="../../assets/Reader/1988.jpg" width="135px" height="198px" />
					<br />
					<span style="word-wrap: break-word;">1988:我想和这个世界谈谈</span>
				</a>
			</div>
			<div class="book">
				<a @click="intro()">
					<br />
					<img src="../../assets/Reader/一个已婚男人的自述.jpg" width="135px" height="198px" />
					<br />
					<span style="word-wrap: break-word;">一个已婚男人的自述</span>
				</a>
			</div>
			<div class="book">
				<a @click="intro()">
					<img src="../../assets/Reader/特立独行的猪.jpg" width="135px" height="198px" />
					<br />
					<span style="word-wrap: break-word;">一只特立独行的猪</span>
				</a>
			</div>
			<div class="book">
				<a @click="intro()">
					<br />
					<img src="../../assets/Reader/练习一个人.jpg" width="135px" height="198px" />
					<br />
					<span style="word-wrap: break-word;">练习一个人</span>
				</a>
			</div>
			<div class="book">
				<a @click="intro()">
					<img src="../../assets/Reader/黑铁时代.jpg" width="135px" height="198px" />
					<br />
					<span style="word-wrap: break-word;">黑铁时代</span>
				</a>
			</div>
		</div>
		
		
		<div class="constitute">
			<img src="../../assets/Reader/练习一个人.jpg"
				width="115"
				height="178"
				style="float: left;margin-left: 110px;margin-top: 10px;"/>
			<span style="color: darkgrey;margin-top: 10px;" v-text="book_name"></span>
			<p v-text="book_auther"></p>
		</div>
		
		
		<div>
			<Modal
				v-model="modal1"
				title="简介"
				@on-ok="ok()"
				@on-cancel="cancel()"
				ok-text="有趣"
				cancel-text="无趣">
				<p v-text="mean"></p>
			</Modal>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				modal1:false,
				mean:"我想这个世界上总有一个人能读懂我所有想说的话",
				book_name: "练习一个人",
				book_auther: "陶立夏"
			};
		},
		methods: {
			intro(){
				this.modal1 = true
			},
			ok () {
                this.$Message.info('其实没有');
            },
            cancel () {
                
            }
		},
		created(){
			var that = this;
			this.$http.get('/api/query')
				.then(function(data){
					that.mean = data.data.bookIntro;
					// that.book_name = data.data.booName;
					console.log(data)
				}).catch(function(error){
					console.log(error);
				})
		}
	}
</script>

<style scoped>
	.near{
		float: left;
		margin-left: 80px;
		margin-top: 50px;
		width: 730px;
	}
	
	.book{
		float: left; 
		width: 135px;
		text-align: center;
		margin-left: 10px;
		margin-top: 40px;
	}
	
	.constitute{
		float: left;
		margin-left: 70px;
		width: 300px;
		color: #333333;
	}
</style>
