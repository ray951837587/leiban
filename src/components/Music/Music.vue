<template>
	<div>
		<div class="header">
			<a class="header-text" href="#">
				乐在远方
			</a>
			<div style="border: 1px;">
				<input style="border:0;width:500px;float:left;height: 29px;margin-top: 46px;margin-left: 30px;border-radius: 0px;" />
				<el-button type="primary" icon="el-icon-search" size="mini"></el-button>
			</div>
		</div>
		<div class="header-line">
			<hr color="antiquewhite" size="1"/>
			<a style="margin-left: 80px;color: coral;font-size: large;" >音乐人</a>
			<a style="margin-left: 80px;color: coral;font-size: large;" >音乐分类</a>
			<a style="margin-left: 80px;color: coral;font-size: large;" >歌单</a>
			<a style="margin-left: 80px;color: coral;font-size: large;" >乐评</a>
			<a style="margin-left: 80px;color: coral;font-size: large;" >专题</a>
		</div>
		<div class="left">
			<div class="light">
				<el-carousel height="250px">
				    <el-carousel-item>
				    	<img src="../../assets/JPG/douban1.jpg" width="100%" height="100%">
				    </el-carousel-item>
				    <el-carousel-item>
				    	<img src="../../assets/JPG/douban2.jpg" width="100%" height="100%">
				    </el-carousel-item>
				    <el-carousel-item>
				    	<img src="../../assets/JPG/douban3.jpg" width="100%" height="100%">
				    </el-carousel-item>
				    <el-carousel-item>
				    	<img src="../../assets/JPG/douban4.jpg" width="100%" height="100%">
				    </el-carousel-item>
				    <el-carousel-item>
				    	<img src="../../assets/JPG/douban5.jpg" width="100%" height="100%">
				    </el-carousel-item>
				    <el-carousel-item>
				    	<img src="../../assets/JPG/douban6.jpg" width="100%" height="100%">
				    </el-carousel-item>
				    <el-carousel-item>
				    	<img src="../../assets/JPG/douban7.jpg" width="100%" height="100%">
				    </el-carousel-item>
			  	</el-carousel>
			</div>
	  	</div>
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	    <div class="right">
	    	<!--<font color="#333333" size="7" >音乐专栏</font>
	    	 <el-card class="box-card">
			  	<font>
			  		杨一，客家人，1969年10月13日出生于粤北小镇。<br>
			  		幼年时期生长于传统客家文化的熏陶下，父亲杨伯煌曾是通信兵，退伍后在当地邮局工作，使得杨一从小就能接触到大山之外的讯息。<br>
			  		少年时期的杨一，热爱无线电，从收音机中的“敌台广播”听到了来自世界的声音。<br>
			  		70年代初，杨一收到亲友从香港带回许冠杰的黑胶唱片，从此沉浸在吉他与民谣的世界中。<br>
			  		90年代初，杨一在广州结识一位美国音乐人，并由此接触到了鲍勃迪伦的音乐，开始了长达十年一边唱歌一边吹口琴弹吉他的卖唱生涯。 <br>
					1999年独自制作出版个人专辑《内部参考二〇〇〇》。 <br>
					2001年8月赴德国参加法兰克福河岸音乐节，并在科隆演出，被当地媒体报道为中国的鲍勃迪伦，同时期游历欧洲各国，了解多元化的音乐。 <br>
					2003年2月，参加香港艺术节，并于同年独自制作出版个人专辑《内部参考二〇〇四》。 <br>
					2004年6月，参加新加坡艺术节，8月参加德国海德堡世界汉学大会。 <br>
					2005年3月，参加上海第一届民谣音乐节。 <br>
					2006年8月，旅居德国。 <br>
					2007年7月，从德国回国，师从钱绍武先生至2012年。学习中国传统吟诵与书法，并整理出客家吟诵《归去来兮辞》，《送元二使安西》。 <br>
					2009年9月，参加中华吟诵周，表演客家吟诵《归去来兮辞》，并加入中华吟诵学会担任理事。 <br>
					2012年移居大理至今，开展幼儿传统吟诵的教育实践，整理并创作谱曲大量古诗词吟诵作品，《将进酒》，《飞来双白鹄》，《临江仙》，《饮酒》，《望月怀远》，《秋登兰山寄张五》，《庐山谣》，《琴操》，《宣州谢脁楼饯别校书叔云》，《波若波罗密多心经》，《大学》，《关雎》，《蒹葭》，《燕燕》，《竹里馆》，《短歌行》，《长相思》，《悯农》，《忆江南》，《忆秦娥》,《江南》等。<br>
			  	</font>
			</el-card>-->
	    </div>
		
		<Modal
			v-model="modal1"
			title="简介"
			@on-ok="ok()"
			@on-cancel="cancel()"
			ok-text="相信"
			cancel-text="相信">
			<p v-text="mean"></p>
		</Modal>
	</div>
</template>

<script>
	export default {
      	data() {
        	return {
				modal1:false,
				mean:"很抱歉，这部分还没能做完，但这确实是我最爱的一个版块"
        	}
      	},
      	methods: {
      		f1(){
//    			this.$refs.music.load();
      		},
			ok () {
				this.$Message.info('其实没有');
			},
			cancel () {
				
			}
      	},
      	mounted() {
			this.modal1 = true
		}
    }
</script>

<style scoped>
	.header{
		line-height: 120px;
		background: beige;
	}
	
	.header-line{
		line-height: 50px;
		background: beige;
	}
	
	.header-text{
		color: coral;
		font:"楷体";
		font-size: x-large;
		float: left;
		margin-left: 100px;
	}
	
	.left{
		width: 800px;
		float: left;
	}
	
	.light{
		width: 709px;
		margin-left: 50px;
		margin-top: 50px;
	}
	
	.right{
		width: 500px;
		float: right;
		text-align: center;
	}
	
	.search{
		height: 20px;
	}
	
	#light{
		margin-left: 100px;
	}
	
	.box-card {
		text-align: left;
    	width: 100％;
    	height: 350px;
    	margin-left: 0px;
  	}
</style>