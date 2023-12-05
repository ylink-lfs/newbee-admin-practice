<template>
  <!--路径匹配到的组件，将会展示在这里-->
  <router-view></router-view>
</template>

<script>
const ENV = import.meta.env
export default {
  name: 'Index',
  setup() {
    console.log('ENV', ENV)
  }
}
</script>