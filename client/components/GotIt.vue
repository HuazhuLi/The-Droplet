<style scoped>
.gotIt{
	position:fixed;
	top:50%;
	left:15%;
	width:40%;
	height:50%;
			background-color: #252839;

}
#wrapper{
	position: absolute;
	top: 50%;
	left: 50%;
	transform:
	translate(-50%,-50%);
	background-color: #e9ece5;
	width:90%;
	height:80%;
}
#finished{
	border:1px solid black;
	width:50px
}

#header{
	height:20%;
	width:100%;
}
.body{
	position:fixed;
	top:30%;
	height:65%;
}
#newGotIt{
	position:fixed;
	left:20%;
	top:5%;
	width:60%;
	height:15%;
}
.progress{
	position:fixed;
	top:95%;
	height:5%;
	width:100%;
	background-color:black;
	display:inline;
}
#finished{
	background-color:white;
	height:100%;
	width:10%;
	float:left;

}
#unfinished{
	background-color:red;
	height:100%;
	width:10%;
	float:left;	
}

</style>
<template>
<div class="gotIt" v-if="!show">
	<div id="wrapper">
		<div class="header">
			<input id="newGotIt"
				autofocus autocomplete="off"
				placeholder="Now I got it."
				v-model="newIt"
				@keyup.enter="addNewIt">


		</div>
		<div class="body">

			<ul class="allGotIt">
		      <li v-for="gotIt in allGotIt" >
		      	<input type="checkbox" 
			      	v-model="gotIt.starred" 
			      	:id="gotIt.id"
			      	:checked="bdefault" 
			      	v-on:click="updateTFb">
			    <input type="checkbox" 
			      	v-model="gotIt.finished" 
			      	:id="gotIt.id"
			      	:checked="adefault" 
			      	v-on:click="updateTF">
			    <input v-model="gotIt.content" 
			     :id="gotIt.id"
			     :value="message"
			     @input="updateMessage"
			     v-on:click="editorCon">
	
		      </li>

			</ul>


		</div>
		<div class="progress">
			<div id="finished" >

			</div>
			<div id="unfinished">
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		name:'gotIt',
		data: function (){
			return {
				newIt:'',

			}
		},

		computed: {
			show(){
				return this.$store.state.show;
			},
			done(){
				var all = this.$store.state.allGotIt;
				var sum = 0;
				for (var i = 0; i < all.length; i++) {
					if(all[i].finished){
						sum ++
					}
				}
				return sum;

			},
			allGotIt:{
				get() {
					return this.$store.state.allGotIt
				},
			},

		},

		methods: {

			addNewIt(e){
				this.$store.commit('addNewIt', {new:this.newIt,
												id:this.allGotIt.length})
			},
			updateMessage (e) {
			    this.$store.commit('updateMessage', {value:e.target.value, 
			    										id:e.target.id})
			  },
			updateTF(e) {
				this.$store.commit('updateTF', {check:e.target.checked,
												id:e.target.id})
			},
			editorCon(e){
				this.$store.commit('EDITCON', e.target.value

												)
			},
			updateTFb(e) {
				this.$store.commit('updateTFb', {checked:e.target.checked,
												id:e.target.id})
			},
			removeGotIt(){

			},

			completeGotIt(){

			},

			editGotIt(gotIt){
				this.beforeEditCache = gotIt.value
				this.editedGotIt = gotIt
			},

			doneEdit(){

			}
		},


		
	}


</script>

