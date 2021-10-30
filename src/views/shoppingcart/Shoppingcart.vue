<template>
  <div>
    <h2>购物车</h2>
    <blog-post title="test1"></blog-post>
    <blog-post title="test2"></blog-post>
    <blog-post title="test3"></blog-post>
  </div>
</template>

<script>
import blogPost from './blogPost'

export default {
  name: "Shoppingcart",
  components:{blogPost}
}
</script>

<style scoped>

</style>
