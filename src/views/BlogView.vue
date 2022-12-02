<template>
  <div class="blog">
    <OurBlog />
    <BlogSubscribe />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import WorkShops from '@/components/EventsComponents/WorkShops.vue'
import OurBlog from '@/components/BlogComponents/OurBlog.vue'
import BlogSubscribe from '@/components/BlogComponents/BlogSubscribe.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { Navbar, WorkShops, OurBlog, BlogSubscribe, Footer },
  name: 'Blog',
}
</script>

<style>

</style>