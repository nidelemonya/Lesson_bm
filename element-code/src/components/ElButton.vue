<template>
  <!-- slot 插槽 -->
  <button
    @click="handleClick"
    class="el-button"
    :class="[
        type?'el-button--'+type:'',
        {
            'is-round': round,
            'is-circle': circle
        }
    ]"
  >
    <!-- {{type}} - {{tit}} -->
    <!-- 动态类名绑定 -->
    <slot></slot>
  </button>
</template>

<script>
// props 类型校验 解构
// vue 怎么做？

export default {
  data() {
    return {
      tit: "hello",
    };
  },
  props: {
    type: { // 传入的props的名字
      type: String, // 类型名
      default: "default",
    },
    round: Boolean, // 简略写法
    // round 传了 就为 true 不传为 false
    // round : {
    //     type:Boolean,
    //     default: false
    // }
    circle:Boolean
  },
  created() {
    // 生命周期 挂载阶段
    console.log(this.type, this.tit, this.round);
  },
  methods: {
      handleClick(event) {
        this.$emit('click', event)
      }
  }
};
</script>

<style lang="scss" scoped>
</style>

vab