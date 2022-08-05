<template>
  <div :class="필터" class="filter-item" :style="`background-image: url(${이미지}) `"></div> 
  <!-- <div :class="필터 + ` filter-item`" :style="`background-image: url(${이미지}) `"></div>  -->
  <!-- <div :class="`${필터} filter-item`" :style="`background-image: url(${이미지}) `"></div>  -->
</template>

<script>
export default {
  name: 'FilterBoxComponent', // 이름 아무렇게나 작명 가능
  props: {
    이미지: String,
    필터: String,
  }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>