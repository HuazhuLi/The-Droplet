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
}
#finished{
	border:1px solid black;
	width:50px
}
.img{
	width:50px;
	height:50px;
}
</style>
<template>
<div class="gotIt">
	<div id="wrapper">
		<div class="header">
			<input id="newGotIt"
				autofocus autocomplete="off"
				placeholder="Now I got it."
				v-model="newIt"
				@keyup.enter="addNewIt">
				{{done}}

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
			<div id="finished">
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

