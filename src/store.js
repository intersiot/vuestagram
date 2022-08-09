import axios from 'axios';
import { createStore } from 'vuex'
import post from './assets/post'

// 버튼을 누르면 state => 'park'로 바꿔보자.
// 1. store.js에 state 수정방법 정의
// 2. 수정하고 싶으면 store.js에 부탁

const store = createStore({
  state(){
    return { // 데이터 보관하고 싶으면 여기에 하셈 -> 데이터말고 state라고 할거임
      게시물: post,
      likes: 30,
      liked: false,
      more: {}, // 서버에서 더보기 게시물 가져와서 여기에 저장해보자
      더보기: 0,
    }
  },
  mutations: { // state 수정방법 정의하는 곳임, state 변경은 무조건 mutations가 함.
    setMore(state, data) { // 두번째 파라미터는 setMore를 쓸 때마다 데이터를 넣을 수 있다.
      state.more = data
    },
    UpLike(state) {
      if (state.liked == false) {
        state.likes++;
        state.liked = true;
      } else {
        state.likes--;
        state.liked = false;
      }
    },
  },
  actions: { // ajax하는 곳 또는 오래걸리는 작업들
    // ajax 요청하는 법
    // 예시1. 더보기 게시물 ajax 요청하려면?
    getData(context) { // commit을 쓸때는 파라미터로 context를 추가해줘야 함. 이때 context는 store임.
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`).then((a) => {
        console.log(a.data);
        context.commit('setMore', a.data) // setMore함수를 동작시켜주세요. 이때 commit함
      })
    },
  },
})

export default store

