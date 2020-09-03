<template>
    <div class="el-badge">
        <slot></slot>
        <transition name="el-zoom-in-center">
            <sup
                v-show="!hidden"
                v-text="content"
                class="el-badge__content"
                >
            </sup>
        </transition>
    </div>
</template>

<script>
    // vue 内置了 transition 
    export default {
        name: 'LdBadge',
        props: {
            // 通用性更好
            value:[String, Number],
            max: Number,
            isDot: Boolean,
            hidden: Boolean,
            type: {
                type: String,
                validator(val) {
                    return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
                }
            }
        },
        computed: {
            content() {
                if (this.isDot) return

                const value = this.value
                // 框架通用性之外， 可配置性
                const max = this.max
                // console.log(typeof value, typeof max)
                if (typeof value === 'number' && typeof max === 'number') {
                    return value > max  ? `${max}+` : value
                }
                return value
            }
        }
    }
</script>

<style scoped>

</style>