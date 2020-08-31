<template>
    <div>
        <h2>{{msg}}</h2>
        <p>newsId: {{$route.params.newsId}}</p>
        <p>newsTitle: {{$route.params.newsTitle}}</p>
    </div>
</template>

<script>
export default {
  name: 'hi2',
  data () {
      return {
          msg: 'params page'
      }
  }
}
</script>

<style scoped lang="stylus">

</style>
