import { createStore } from 'vuex'
// import post from './assets/post.js'

// 버튼을 누르면 state => 'park'로 바꿔보자.
// 1. store.js에 state 수정방법 정의
// 2. 수정하고 싶으면 store.js에 부탁

const store = createStore({
  state(){
    return { // 데이터 보관하고 싶으면 여기에 하셈 -> 데이터말고 state라고 할거임
      name: 'kim',
      age: 20,
      likes: 30,
      liked: false,
    }
  },
  mutations: { // state 수정방법 정의하는 곳임
    UpLike(state) {
      if (state.liked == false) {
        state.likes++;
        state.liked = true;
      } else {
        state.likes--;
        state.liked = false;
      }
    },
    // 나이먹기(state) {
    //   state.age++
    // },
    // 나이십씩먹기(state, data) {
    //   state.age += data
    // }
    // 이름변경(state) { // state 파라미터를 추가 -> 위에 있는 state 오브젝트를 뜻함
    //   state.name = 'park'
    // },
  }
})

export default store

