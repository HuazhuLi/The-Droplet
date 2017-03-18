<template>
	<div id="app">
		<div id="editor">
			<div id="name">
				<h1>The Editor</h1>
				<input id="nameOfIt" v-model="editcontent">
			</div>
			<div id="tags">
			</div>
			<div id="toolbar" contenteditable="false">
				<span class="for-character">


					<button class="btn" id="btn-ruled" @click="rulen">Rule</button>
				</span>
				<span class="for-font">
					<span class="font-size">
						<button>font-size</button>
						<div class="select-font-size">
							<span @click="">hello</span>
							<span></span>
							<span></span>
						</div>
					</span>
					<span class="font-size">
						<button>font-size</button>
						<div class="select-font-size">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</span>
					<span class="font-size">
						<button>font-size</button>
						<div class="select-font-size">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</span>
				</span>
				<span class="for-position">
				
				</span>
				<span class="for-editing">
					<button id="btn-undo" @click="undoen">Undo</button>
					<button id="btn-redo" @click="redoen">Redo</button>			
				</span>
			</div>
			<section id="inputZone" contentEditable ="true" >
				
			</section>
			<button id="editCompleted" v-on:click="doneEditing" v-el="contentzxc">Done</button>
		</div>
		<div id="notice">
		<p>Developed by Huazhu</p>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'editor',
		data: {
			yoyo: 12
		},
		computed: {
			editcontent (){
				return this.$store.state.editcontent
			}
		},
		methods: {
			doneEditing (){
				alert(vm.$$.contentzxc.childNodes.length)
			},
			bolden: function (event) {
				document.execCommand('bold', true)
			},
			italicen: function (event) {
				document.execCommand('italic', true)
			},
			redoen: function (event) {
				document.execCommand('redo', true)
			},
			undoen: function (event) {
				document.execCommand('undo', true)
			},
			underlineen: function (event) {
				document.execCommand('underline', true)
			},

		}

	}
</script>
<style scoped>
	#notice{
		color:white;
		position:fixed;
		top:95%;
		right:10%;
	}
	#inputZone{
		border:1px solid black;
		height:75%;
		width:95%;
		margin-left: auto; margin-right: auto;

	border-bottom-right-radius:20px;

	}

	#app{
		width:45%; 
		height:100%;	
		position: fixed;
		right: 0vh;
		top: 0vh;
		background-color: #252839;
	}
	#editor{
		border:1px solid black; 
		width:40%; 
		height:90%;	
		position: fixed;
		right: 5%;
		top: 5%;
		background-color: #e9ece5;
	border-top-right-radius:20px;
	border-bottom-right-radius:20px;
	}
	#nameOfIt{
		height:5%;
		width:75%;
 		margin-left: auto; 
 		margin-right: auto;

	}
	.select-font-size{

	}
	.font-size{
		position:relative;
		display:inline-block
	}
	.select-font-size{
		display:none;
		position:absolute;
		z-index:1;
	}
	.font-size:hover .select-font-size{
		display: block;
	}
	.btn {
width:5px;
height:5px
	}
</style>
