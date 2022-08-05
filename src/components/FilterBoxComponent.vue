<template>
  <div :class="필터" class="filter-item" :style="`background-image: url(${이미지}) `">
    <!-- 
      slot으로 부모 -> 자식 데이터 전송 가능 
      1. 자식은 구멍 뚫기
      2. 부모 컴포넌트에서 <컴포넌트> 태그 사이에 데이터 넣기
      slot은 HTML 태그 안에 데이터바인딩할 때만 slot을 사용한다.
      -->
    <slot></slot> <!-- 1. 구멍 뚫기 -->
  </div> 
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
