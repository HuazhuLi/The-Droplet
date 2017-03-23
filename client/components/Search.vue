<template>
<div id="search">
<div id="wrapper">
<form method="get" id="searchform" action="">
	<fieldset class="searchCom">
		<input type="text" class="box" name="s" id="searchInput" placeholder="Search the title of article">
		<img id="searchimg" src="../static/search.png">
	</fieldset>
</form>
</div>
</div>
</template>
<style scoped>
#search{
	position:fixed;
	left:15%;
	top:50%;
	width:40%;

}
#searchform{
}
.searchCom{

	height:2%;
	 border: 0; 
}
#wrapper{
	width:90%;
	height:100%;
	position:relative;
	left:5%;

}
#searchimg{
	width:18px;
	height:18px;
}
#searchInput{
	width:85%;
	position:relative;
	left:-3%;
	top:-4%;
}
</style>