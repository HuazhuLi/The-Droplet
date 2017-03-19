<template>
	<div id="app" v-if="!show">
		<div id="editor">
			<div id="name">
				<input id="nameOfIt" v-model="editcontent">
			</div>
			<div id="tags">
			</div>
			<div id="toolbar" contenteditable="false">
				<span class="for-character">
					<img class="image" src="../static/bold.png" @click="bolden">
					<img class="image" src="../static/italic.png" @click="italicen">
					<img class="image" src="../static/underline.png" @click="underlineen">

					<img class="image" src="../static/strikethrough.png" @click="strikethroughen">
					<img class="image" src="../static/copy.png" @click="copyen">
					<img class="image" src="../static/cut.png" @click="cuten">
					<img class="image" src="../static/delete.png" @click="deleten">
					<img class="image" src="../static/decrease_font.png" @click="decreasen">
					<img class="image" src="../static/text-width.png" @click="widthen">					
					<img class="image" src="../static/align-justify.png">
					<img class="image" src="../static/align-left.png" @click="alignleften">
					<img class="image" src="../static/align-right.png" @click="alignrighten">
					<img class="image" src="../static/align-center.png" @click="aligncenteren">

					<img class="image" src="../static/undo.png" @click="undoen">

					<img class="image" src="../static/redo.png" @click="redoen">
				</span>

			</div>

			<section id="inputZone" contentEditable ="true" >
				
			</section>
		</div>
		<div id="notice">
		<p>Developed by HuazhuLi</p>
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
			show(){
				return this.$store.state.show;
			},			
			editcontent (){
				return this.$store.state.editcontent
			}
		},
		methods: {
			aligncenteren(){
				document.execCommand('justifyCenter', true)

			},
			alignrighten(){
				document.execCommand('justifyRight', true)

			},
			alignleften(){
				document.execCommand('justifyLeft', true)

			},
			strikethroughen(){
				document.execCommand('strikeThrough', true)

			},
			copyen(){
				document.execCommand('copy', true)

			},
			cuten(){
				document.execCommand('cut', true)

			},
			deleten(){
				document.execCommand('delete', true)

			},

			decreasen(){
				document.execCommand('decreaseFontSize', true)
			},
			widthen(){
				document.execCommand('increaseFontSize', true)
			},
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
	.for-character{
	position:relative;
	left:3%;
	top:-27px;

	}
	.image{
		width:3%;
		height:3%;
		padding-right:0.63%;
		padding-left:0.63%;
		border:0.5px solid #252839;
	}
	#notice{
		color:white;
		font-size:18px;
		position:fixed;
		top:93.5%;
		right:8%;
	}
	#inputZone{
		border:1px dotted #252839;
		height:80%;
		width:87%;
		position:relative;
		top:16.5%;
		left:5%;
	border-bottom-right-radius:20px;


	}

	#app{
		width:45%; 
		height:100%;	
		position: fixed;
		right: 0vh;
		top: 0vh;
		background-color: #252839;
		margin:0;
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
		height:4%;
		width:34.6%;
		position:fixed;
		left:57%;
		top:10%;
		border:1px solid #252839;
	border-top-right-radius:10px;
	background-color:#e9ece5;
	font-size:20px;
	}
	#name{
		height:0%;
	}
	#toolbar{
		position:fixed;
		left:55.7%;
		top:20%;
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
