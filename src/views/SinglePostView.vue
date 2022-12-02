<template>
  <div class="singlepost">
    <Post />
    <BlogSubscribe />
    <SinglePostBlog />
    <Footer />
  </div>
</template>

<script>
import Post from '@/components/SinglePostComponents/Post.vue'
import BlogSubscribe from '@/components/BlogComponents/BlogSubscribe.vue'
import SinglePostBlog from '@/components/SinglePostComponents/SinglePostBlog.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { Post, BlogSubscribe, SinglePostBlog, Footer},
  name: 'SinglePostView',
}
</script>

<style>

</style>