<template>
  <!-- slot 插槽 -->
  <button
    @click="handleClick"
    class="el-button"
    :disabled="loading"
    :type="nativeType"
    :autofocus="autofocus"
    :class="[
        type?'el-button--'+type:'',
        buttonSize?'el-button--'+ buttonSize:'',
        {
            'is-round': round,
            'is-circle': circle,
            'is-loading': loading,
            'is-disabled': buttonDisabled,
            'is-plain': plain
        }
    ]"
  >
  <i class="el-icon-loading" v-if="loading"></i>
  <i :class="icon" v-if="icon"></i>
    <!-- {{type}} - {{tit}} -->
    <!-- 动态类名绑定 -->
    <!-- <slot v-if="!icon"></slot> -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
// props 类型校验 解构
// vue 怎么做？

export default {
  name: 'ElButton',
  data() {
    return {
      tit: "hello",
      // loading: true
    };
  },
  computed: {
    buttonDisabled() {
      return this.disabled
    },
    // 按钮大小 因为和几个属性有动态关系 所以 用 computed 属性
    buttonSize() {
      return this.size
    }
  },
  props: {
    size: {
      type: String,
      default:''
    },
    nativeType : {
      type: String,
      default: 'button'
    },
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
    circle:Boolean,
    autofocus:Boolean,
    icon: {
      type: String,
      default: ''
    },
    loading: Boolean
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