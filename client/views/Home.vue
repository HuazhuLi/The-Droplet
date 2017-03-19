<template>
  <div class="page">
  	<gotIt></gotIt>
  	<tab></tab>
  	<calendar></calendar>
  	<editor></editor>
    <login></login>
  </div>
</template>

<script>
import Tab from 'components/Tab'
import GotIt from 'components/GotIt'
import Calendar from 'components/Calendar'
import Editor from 'components/Editor'
import Login from 'components/Login'

export default {
  components: {
    Tab,
    GotIt,
    Calendar,
    Editor,
    Login,


  }
}
</script>
