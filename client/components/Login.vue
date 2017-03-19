<template>
	<div class="user-info">
		<div id="login-fail" v-if="1">
			<input v-model="userinfo.userName" id="inputZone"  placeholder="Input a name">
			<p>{{userName}}</p>
			<input v-model="userinfo.password" id="passwordZone" placeholder="Input your password">

			<button v-on:click="update">click</button>

		</div>
		<div id="login-succ" v-else=>
		</div>
	</div>
</template>
<script>
	export default{
		name:'user-info',
		data: function(){
			return {
				userinfo:{
					userName:'',
					password:'',
				}
			}
		},
		computed: {
			userName(){
				return this.$store.state.userName

			}
		},
		methods: {
			goUser: function(){
				alert("yio")
			},
			update: function(){
				this.$store.commit('UPDATE',this.userinfo)
			}
		}
	}
</script>
<style scoped>
#login-fail{
	width:100%;
	height:100%;
	position:fixed;
}



#inputZone{

position  : absolute;
top       : 50%;
left      : 50%;
transform : translate(-50%,-50%);

}
#inputZone{
	width:50%;
	height:10%;
	border-radius:10px;
	font-size: 20px;

}
</style>