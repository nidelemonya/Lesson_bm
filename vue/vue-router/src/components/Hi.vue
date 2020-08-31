<template>
    <div>
        <h2>{{msg}}</h2>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
      return {
          msg: 'I am Hi Page'
      }
  }
}
</script>

<style scoped lang="stylus">

</style>
