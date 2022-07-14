<template>
  <div>
    <Post :게시물="게시물" />
    <!--
      반복문 쓰는 방법.
      나는 그냥 Post에서 했는데 여기서 해도됨 
      <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i" /> 
      <Post :게시물="a" v-for="(a, i) in 게시물" :key="i" />
    -->
    <!-- <Post/>
    <Post/> -->
  </div>
</template>

<script>
import Post from './PostComponent.vue'

export default {
  name: 'ContainerComponent',
  props: {
    게시물: Array,
  },
  components: {
    Post,
  }
}
</script>

<style>

</style>