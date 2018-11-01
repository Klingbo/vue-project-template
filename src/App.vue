<template>
  <div>
    <h1>这是大标题</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods:{
    testAjax() {
      this.$axios.get('请求地址').then(data => {
        console.log(data)
      })
    }
  },
  created() {
    // this.testAjax()
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color:red;
}
</style>


