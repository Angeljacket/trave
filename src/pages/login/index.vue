<template>
    <div>
      <login-header></login-header>
      <login-tab></login-tab>
    </div>
</template>

<script>
import LoginHeader from './components/header'
import LoginTab from './components/tab'
export default {
  name: 'index',
  components: {
    LoginHeader,
    LoginTab
  }
}
</script>

<style scoped>

</style>
