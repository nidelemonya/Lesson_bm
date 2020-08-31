<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> | 
      <router-link to="/about">About</router-link> |
      <router-link to="/params/231/zhouzihan very good">params</router-link> |
      <router-link to="/hi">Hi页面</router-link> |
      <router-link :to="{name:'hi1', params:{username: 'Lemon', id: '8888'}}">Hi页面1</router-link> |
      <router-link to="/hi/hi2">Hi页面2</router-link> |
      <router-link to="/gohome">gohome</router-link> |
      <router-link to="/goParams/615/JS happy">goParams</router-link> |
      <router-link to="/hi1">Hi1</router-link> |
      <router-link to="/lemon">lemon</router-link> |
      <router-link to="/home1">home1</router-link> |
      <router-link to="/dhauihgdiau">我是瞎写的</router-link> |
    </div>
    <p>{{ $route.name }}</p>
    <transition name="fade" mode="out-in">
          <router-view/>
    </transition>
    <router-view name="left" style="float:left;width:50%;height:300px;background-color:#ccc"></router-view>
    <router-view name="right" style="float:right;width:50%;height:300px;background-color:#cac"></router-view>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
.fade-enter
  opacity 0
.fade-enter-active
  transition opacity .5s
.fade-leave
  opacity 1
.fade-leave-active
  opacity 0
  transition opacity .5s
</style>
