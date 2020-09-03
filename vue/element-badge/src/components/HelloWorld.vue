<template>
  <div class="hello">
    <ld-badge :value=12 class="item" :max=9 :hidden="isHidden">
      <el-button size="small">评论</el-button>
    </ld-badge>
    <!-- <el-badge :value="200" :max="99" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge is-dot class="item">数据查询</el-badge> -->
  </div>
</template>

<script>
import LdBadge from '@/components/ldBadge.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isHidden: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isHidden = true
    },3000)
  },
  components: {
    "ld-badge":LdBadge
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
