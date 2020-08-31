<template>
    <div>
        <h2>{{msg}}-{{ $route.params.username }}-{{$route.params.id}}</h2>
    </div>
</template>

<script>
export default {
  name: 'hi1',
  data () {
      return {
          msg: 'I am Hi1 Page'
      }
  }
}
</script>

<style scoped lang="stylus">

</style>
