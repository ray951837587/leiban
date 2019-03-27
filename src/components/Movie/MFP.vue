<template>
	<div>
		<div class="left">
			<div class="tabs">
				<Tabs value="name1">
			        <TabPane label="热门电影" name="name1">
			        	<a style="float: left;" @click="page()">
			        		<img src="../../assets/Movie/hopeORdespair.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">我不是药神</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;" href="#">
			        		<img src="../../assets/Movie/net.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">网络迷踪</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;" href="#">
			        		<img src="../../assets/Movie/MI6.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">碟中谍6</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;" href="#">
			        		<img src="../../assets/Movie/LittleBear.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">克里斯托弗·罗宾</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;" href="#">
			        		<img src="../../assets/Movie/superman.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">超人总动员2</font>
			        	</a>
			        	<a style="float: left;margin-top: 10px;" href="#">
			        		<img src="../../assets/Movie/childrenOfRiver.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">江湖儿女</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;margin-top: 10px;" href="#">
			        		<img src="../../assets/Movie/avenger.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">复仇者联盟3</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;margin-top: 10px;" href="#">
			        		<img src="../../assets/Movie/happiness.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">幸福的拉扎罗</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;margin-top: 10px;" href="#">
			        		<img src="../../assets/Movie/wonder.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">奇迹男孩</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;margin-top: 10px;" href="#">
			        		<img src="../../assets/Movie/silent.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">沉默的教室</font>
			        	</a>
			        </TabPane>
			    </Tabs>
			</div>
			
			<div class="tabs">
				<Tabs value="name1">
			        <TabPane label="热门电视剧" name="name1">
			        	<a style="float: left;" href="#">
			        		<img src="../../assets/Movie/woman'sPower.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">如懿传</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;" href="#">
			        		<img src="../../assets/Movie/AHS.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">美国恐怖故事8:天启</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;" href="#">
			        		<img src="../../assets/Movie/PH.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">纸牌屋第六季</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;" href="#">
			        		<img src="../../assets/Movie/ghost.jpeg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">鬼入侵</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;" href="#">
			        		<img src="../../assets/Movie/dependent.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">正阳门下小女人</font>
			        	</a>
			        	<a style="float: left;margin-top: 10px;" href="#">
			        		<img src="../../assets/Movie/thisIsUs(1).jpeg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">我们这一天第三季</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;margin-top: 10px;" href="#">
			        		<img src="../../assets/Movie/crazy.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">疯子</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;margin-top: 10px;" href="#">
			        		<img src="../../assets/Movie/TSCG.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">天盛长歌</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;margin-top: 10px;" href="#">
			        		<img src="../../assets/Movie/HTGAWM.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">逍遥法外第五季</font>
			        	</a>
			        	<a style="float: left;margin-left: 14.57px;margin-top: 10px;z-index: -1;" href="#">
			        		<img src="../../assets/Movie/BYZX.jpg" width="135px" height="198px" />
			        		<br />
			        		<font size="2">白夜追凶</font>
			        	</a>
			        </TabPane>
			    </Tabs>
			</div>
	  	</div>
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	    <div class="right">
	    	<div class="favorite">
	    		<h2 style="color: #333333">最爱电影排行</h2>
	    		<hr size="1"/>
		    	<table>
		    		<tr>
		    			<td class="order">1</td>
		    			<td class="title"><a>霸王别姬</a></td>
		    		</tr>
		    		<tr>
		    			<td class="order">2</td>
		    			<td class="title"><a>海边的曼彻斯特</a></td>
		    		</tr>
		    		<tr>
		    			<td class="order">3</td>
		    			<td class="title"><a>美丽人生</a></td>
		    		</tr>
		    		<tr>
		    			<td class="order">4</td>
		    			<td class="title"><a>牯岭街少年杀人事件</a></td>
		    		</tr>
		    		<tr>
		    			<td class="order">5</td>
		    			<td class="title"><a>爱在黎明破晓前</a></td>
		    		</tr>
		    		<tr>
		    			<td class="order">6</td>
		    			<td class="title"><a>飞越疯人院</a></td>
		    		</tr>
		    		<tr>
		    			<td class="order">7</td>
		    			<td class="title"><a>天使爱美丽</a></td>
		    		</tr>
		    		<tr>
		    			<td class="order">8</td>
		    			<td class="title"><a>梦之安魂曲</a></td>
		    		</tr>
		    		<tr>
		    			<td class="order">9</td>
		    			<td class="title"><a>单身男子</a></td>
		    		</tr>
		    		<tr>
		    			<td class="order"></td>
		    			<td class="title"><a>更多》</a></td>
		    		</tr>
		    	</table>
	    	</div>
	    </div>
	</div>
</template>

<script>
	export default {
      	data() {
        	return {
        	}
      	},
      	methods: {
      		page(){
      			this.$router.push("/Index/Movie/Page");
      		}
      	},
      	mounted() {
		}
    }
</script>

<style scoped>
	.order{
		font: "黑体";
		color: #333333;
		font-size: small;
		padding: 8px;
	}
	
	.title{
		font: "楷体";
		margin-left: 10px;
		font-size: small;
	}
	
	.favorite{
		margin-top: 37px;
	}
	
	.left{
		width: 800px;
		float: left;
		text-align: center;
		
	}
	
	.right{
		width: 500px;
		float: right;
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
  	
  	.tabs{
  		margin-left: 50px;
  		margin-top: 30px;
  	}
</style>