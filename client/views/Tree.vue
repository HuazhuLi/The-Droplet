<template>
  <div class="page">

  	<tab></tab>
  	<tree></tree>
  </div>
</template>

<script>
import Tab from 'components/Tab'
import Tree from 'components/Tree'

export default {
  components: {
    Tab,
    Tree,


  }
}
</script>

<style scoped>
.page{height:100%;
width:100%;}
</style>