<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--当前路由地址所对应的组件 <router-view/>  -->
    <keep-alive exclude="Detail,Xetail"> <!--让他这个组件不自动缓存,然后其他页面都会缓存，这样子每次进入页面mounted钩子就会执行-->
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
