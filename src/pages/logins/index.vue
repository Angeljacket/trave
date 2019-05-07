<template>
    <div>
      <logins-header></logins-header>
      <logins-tab></logins-tab>
    </div>
</template>

<script>
import LoginsHeader from './components/header'
import LoginsTab from './components/tab'
export default {
  name: 'index',
  components: {
    LoginsHeader,
    LoginsTab
  }
}
</script>

<style scoped>

</style>
