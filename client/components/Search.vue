<template>
<div id="search">
<div id="wrapper">
<form method="get" id="searchform" action="">
	<fieldset class="searchCom">
		<input type="text" class="box" name="s" id="searchInput" placeholder="Search it">
		<button id="btn" title="searchbtn">Search</button>
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
	height:10%;
}
#wrapper{
	width:90%;
	height:100%;
	position:relative;
	left:5%;

}
</style>