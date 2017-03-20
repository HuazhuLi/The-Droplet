<template>
	<div id="tab" v-if="!show">
		<div id="nav">
			<div id="user">

				<img id="user-image" class="image" src="../static/user.png">
				<p id=username>userName</p>
			</div>
			<div id="droplet" class="link">
    <router-link to="/">Droplet</router-link>

    				<img id="droplet-image" class="image" src="../static/droplet.png">


			</div>
			<div id="tree" class="link">
    <router-link to="/tree">Tree</router-link>
			<img id="tree-image" class="image" src="../static/tree.png">

			</div>
			<div id="network" class="link">
    <router-link to="/tree">Network</router-link>

			<img id="network-image" class="image" src="../static/network.png">

			</div>
			<div id="blocker">
			</div>
			<div id="setting">
			<img id="setting-image" class="image" src="../static/setting.png">

			</div>

		</div>
	</div>
</template>

<script>
	export default{
		name:'tab',
		computed:{
			show(){
				return this.$store.state.show;
			},			
		}
	}
</script>

<style scoped>
#user-image{
	height:80px;
	width:80px;
	position:relative;
	top:20px;
}
#tab{
	position:fixed;
	height: 100%;
	width: 15%;
	background-color:#252839;


}
#nav{
		background-color: #e9ece5;
	border-top-left-radius:20px;
	border-bottom-left-radius:20px;
position:fixed;
left:5%;
top:5%;
		height:90%;

		width:10%;


}
.image{
	width:20px;
	height:20px;

}
#tree-image{
	float:
}
#username{

}
#user{
	
	height:25%;
	text-align:center;
}
#droplet{
	height:5%;

}
#tree{
	height:5%;
}
#network{
	height:5%;

}
#blocker{
	height:40%;
}
#setting{

	top:80%;
}
.link{
	text-align:center;
	background-color:white;
}

#setting-image{
	position:relative;
	left:40px;
	top:50px;
	width:30px;
	height:30px;
}
</style>

#login-fail{
	background-image: url('../assets/github.jpeg');
	background-position: center
}