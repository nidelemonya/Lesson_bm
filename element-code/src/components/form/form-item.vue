<template >
    <div class="el-form-item" :class="[{
      'el-form-item--feedback': elForm && elForm.statusIcon,
      'is-error': validateState === 'error',
      'is-validating': validateState === 'validating',
      'is-success': validateState === 'success',
      'is-required': isRequired || required,
      'is-no-asterisk': elForm && elForm.hideRequiredAsterisk
    },
    sizeClass ? 'el-form-item--' + sizeClass : ''
  ]">

    </div>
</template>

<script>
    export default {
        name: 'ElFormItem',
        data() {
            return {

            }
        },
        inject: ['elForm'],
        props: {

        },
        computed: {
            
        },
        created() {

        }
    }
</script>