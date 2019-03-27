<template>
	<div>
		<el-container>
			<el-header>
				<img src="../assets/GIF/alone.gif" style="width: 100%;height: 1050%;" />
			</el-header>
			<el-main>
				<font size="6" color="skyblue" >似是无趣的一天</font>
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" size="mini">
					<!-- <el-form-item label="姓" prop="username">
						<el-input v-model="ruleForm2.username" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="名" prop="password">
						<el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
					</el-form-item> -->
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm2')">活着</el-button>
					</el-form-item>
					<br /><br /><br />
					<el-form-item>
						<el-button @click="resetForm()">死去</el-button>
					</el-form-item>
				</el-form>
			</el-main>
			<el-footer style="margin-top: 13%;">
				<font color="#333333" size="4">何必在乎这些</font>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			var username = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('忘记了姓氏么'));
				} else {
					callback();
				}
			};
			var password = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('记不起名么'));
				} else {
					callback();
				}
			};
			return {
				ruleForm2: {
					username: '',
					password: '',
				},

				rules2: {
					username: [{
						validator: username,
						trigger: 'blur'
					}],
					password: [{
						validator: password,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$http.post('/login',{
					
				}).then(function(response){
					
				}).catch(function(error){
					
				})
				this.$router.push("/Index")
			},
			resetForm() {
				this.$Message.info('这是你做过最简单的事情');
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	body>.el-container {
		margin-bottom: 60px;
	}
	
	.demo-ruleForm {
		width: 300px;
		margin-left: 35%;
		margin-top: 13%;
		height: 100%;
	}
	
	.el-header,
	.el-footer {
		color: #333;
		text-align: center;
	}
	
	.el-main {
		background-color: rgba(0, 0, 0, 0);
		color: #333;
		text-align: center;
		margin-top: -3%;
	}
</style>