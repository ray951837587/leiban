<template>
	<div id="d1">
		
		<div class="header">
			<a style="color: lavender;margin-left: 15px;" @click="net('')">崔觉秋</a>
			<a style="color: lavender;margin-left: 15px;" @click="net('Music')">音乐</a>
			<a style="color: lavender;margin-left: 15px;" @click="net('Movie')">电影</a>
			<a style="color: lavender;margin-left: 15px;" @click="net('Reader')">读书</a>
			<!-- <a style="color: lavender;margin-left: 15px;" href="#">美食</a>
			<a style="color: lavender;margin-left: 15px;" href="#">日志</a> -->
			<a style="color: lavender;margin-left: 79%;" @click="who()">无名者</a>
			<a style="color: lavender;margin-left: 15px;" href="http://localhost:8092/">bye拜！</a>
		</div>
		<div class="left">
			<router-view></router-view>
		</div>
		
		<div class="foot">
			<div class="myaudio">
				<div class="myaudio-center">
					<audio id="aud" ref="aud">
						<source src="../assets/audio/曲目2.mp3" type="audio/mp3"></source>
						<source src="../assets/audio/曲目1.mp3" type="audio/mp3"></source>
						浏览器不支持此格式
					</audio>
					<div class="aud-btn">
						<img :src="imgUrl" id="play" @click="play()" ref="play" />
					</div>
					<div class="aud-show">
						<div id="Progress-time">00:00</div> 
						<div id="Progress">
								<span id="jin"></span><span id="yuan" ></span> 
						</div> 
						<div id="Progress-end">00:00</div> 
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		data() {
			return {
				i:0,
				imgUrl:require("@/assets/JPG/play.png")
			};
		},
		methods: {
			who(){
				this.$Message.info("谁又会知道，你真的是谁")
			},
	      	net(obj) {
      			this.$router.push("/Index/"+obj)
	      	},
	      	login() {
	      		this.$router.push("/")
	      	},
			formatSeconds(value) {
				var theTime = parseInt(value);// 秒
				var theTime1 = 0;// 分
				var theTime2 = 0;// 小时
				if (theTime > 60) {
						theTime1 = parseInt(theTime / 60);
						theTime = parseInt(theTime % 60);
						if (theTime1 > 60) {
								theTime2 = parseInt(theTime1 / 60);
								theTime1 = parseInt(theTime1 % 60);
						}
				}
				var result = "" + theTime;
				result  =   (result.length==1)?'0'+result:result;
				if (theTime1 > 0) {
						theTime1  =   (theTime1.length==1)?'0'+theTime1:theTime1;
						
						result = "" + theTime1 + ":" + result;
				}
				if (theTime2 > 0) {
						theTime2  =   (theTime2.length==1)?'0'+theTime2:theTime2;
						result = "" + theTime2 + ":" + result;
				}
				result =   (result.length==2)?'00:'+result:result;
				return result;
			},
			aud_play(q=0) {
				var audio = this.$refs.aud;
				var music;
				var that = this;
				var audioW = $('.myaudio-center').width();
				audio.currentTime = q;
				audio.play();
				music = setInterval(function () {
					var curtime = audio.currentTime.toFixed(2);//播放进度
					var durtime = audio.duration.toFixed(2);//播放时间
					var str = "00:00";
				
					var time = that.formatSeconds(curtime);
				
					var time1 = str.substring(0, str.length - that.formatSeconds(durtime).length) + that.formatSeconds(durtime);
		
					$('#Progress-time').html(time);
					$('#Progress-end').html(time1);
					var $width = curtime / durtime * (audioW - 181);
					$('#jin').css({width: $width})
					$('#yuan').css({left: $width})
				}, 100);
			},
			aud_pause() {
				var music;
				document.getElementById("aud").pause();
				clearInterval(music);
			},
			play(){
				this.i++;
				if (this.i % 2 != 0) {
						// $("#play").attr('src', '../assets/JPG/pause.png');
						// this.$refs.play.setAttribute("src","../assets/JPG/pause.png")
						this.imgUrl = require("@/assets/JPG/pause.png");
						this.aud_play();
				} else {
						// $("#play").attr('src', '../assets/JPG/play.png');
						this.imgUrl = require("@/assets/JPG/play.png");
						this.aud_pause()
				}
			}
		},
		mounted() {
			var that = this;
			//底部显示区域总宽度
			var footerW = $('.myaudio').width();
			//中央显示区域的宽度
			var audioW = $('.myaudio-center').width();
			//alert(footerW);
			//alert(audioW);
			$('.myaudio-center').css({'left':(footerW-audioW)/2})
			$('.aud-show').css({'width':audioW-70})
			$('#Progress').css({'width':audioW-170})
			var i=0;
			var music;
			var audio = document.getElementById("aud");
			var cont = $("#yuan");
			var contW = $("#yuan").width();
			var startX, sX, moveX, disX;
			var winW = $('#Progress').width();
			$("#yuan").on({//绑定事件
					touchstart: function (e) {
						startX = e.originalEvent.targetTouches[0].pageX;    //获取点击点的X坐标 
						sX = $("#yuan").offset().left-110;//相对于当前窗口X轴的偏移量
						leftX = startX - sX;//鼠标所能移动的最左端是当前鼠标距div左边距的位置
						rightX = winW - contW + leftX;//鼠标所能移动的最右端是当前窗口距离减去鼠标距div最右端位置
					},
					touchmove: function (e) {
							//aud_pause();
							e.preventDefault();
							moveX = e.originalEvent.targetTouches[0].pageX;//移动过程中X轴的坐标
						
							if(moveX<leftX){moveX=leftX;}                               
							if(moveX>rightX){moveX=rightX;}
							$("#yuan").css({
									"left":moveX+sX-startX,
							});
							$('#jin').width($("#yuan").width()+moveX+sX-startX);
						var w = audio.duration.toFixed(2)*($('#jin').width()/winW)
							that.imgUrl = require("@/assets/JPG/pause.png");
							that.aud_play(w)
					},
					mousedown: function (ev) {
							that.aud_pause()
							var patch = parseInt($("#yuan").css("height")) / 2;
							var left1 = parseInt($("#yuan").parents('.myaudio-center').css("left"));
							
							
							$("#yuan").mousemove(function (ev) {
									var oEvent = ev || event;
								// console.log(oEvent);
									var oX = oEvent.clientX;
									var l = oX - patch-left1-115;//115为$("#yuan")的起始位置到$('.myaudio-center')左边的距离
									var w = $(window).width() - $("#yuan").width();
									if (l < 0) {
											l = 0
									}
									if (l > w) {
											l = w
									}
									$("#yuan").css({left: l})
									$('#jin').width($("#yuan").width()+l);
									var w = audio.duration.toFixed(2)*($('#jin').width()/winW)
									that.imgUrl = require("@/assets/JPG/pause.png");
									that.aud_play(w)
							});
							$("#yuan").mouseup(function () {
									$("#yuan").unbind('mousemove');
							});
					}
			});
		}
	}
</script>

<style scoped>
	
	.header{
		background: #333333;
		line-height: 30px;
		width:100%;
		height: 4vh;
		position:fixed;
		top:0;
		left:0;
		z-index: 100;
	}
	
	.left{
	}
	
	.foot{
		width:100%;
		height:60px;
		float: left;
	}
	.myaudio{
		width:100%;height:60px;background-color: gold;position: fixed;bottom:0;
	}
	.myaudio>.myaudio-center{
		max-width:500px;height:100%;width:100%;position: absolute;top:0;
	}
	.myaudio>.myaudio-center>.aud-btn{
		height:50px;width:50px;position: absolute;top:5px;left:10px
	}
	.myaudio>.myaudio-center>.aud-btn>img{
		height:100%;width:100%;
	}
	.myaudio>.myaudio-center>.aud-show{
		height:100%;position: absolute;left:65px;
	}
	.myaudio>.myaudio-center>.aud-show>#Progress-time,.myaudio>.myaudio-center>.aud-show>#Progress-end{
		width:40px; height:100%;font-size: 13px;line-height: 60px;text-align: center;
	}
	.myaudio>.myaudio-center>.aud-show>#Progress-time{
		position: absolute;left:0;
	}
	.myaudio>.myaudio-center>.aud-show>#Progress{
		position: absolute;left:50px;top:28px;height:6px;background: #8cd287
	}
	.myaudio>.myaudio-center>.aud-show>#Progress-end{
		position: absolute;right:0;
	}
	.myaudio>.myaudio-center>.aud-show>#Progress>#jin{
		width:6px;height:6px;background-color: blue;position: absolute;left:0px;
	}
	.myaudio>.myaudio-center>.aud-show>#Progress>#yuan{
		width:9px;height:9px;background-color: #fff;border: 1px solid #92d79b;border-radius: 6px;position: absolute;left:-3px;top:-2px;
	}
</style>