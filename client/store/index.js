import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  presentTime: new Date(),
  userinfom:{userName:'yohu',
              password:'liweina'},
  allGotIt:[
  {finished:false,
    content:'howudoing',
    starred:false,
    id:0},
  ],
  yo: 1,
  editcontent:''
}
const getters = {
  doneGotIt(state)  {
   var bi =  state.yo + 2//allGotIt.length//filter(gotIt => gotIt.finished)
  return bi
  },
  doneGotItCount: (state,getters) => {
    return getters.doneGotIt
  }
}

const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  },
  CHANGEDATE(state, newTime){
    state.presentTime = newTime
  },
  UPDATE(state, userinfo){
      state.userinfom = userinfo
  },
  updateMessage (state, message) {
    var index = message.id;
    state.allGotIt[index].content = message.value
  },
  updateTF(state, message){
    var index = message.id;
    state.allGotIt[index].finished = message.check;
  },
  addNewIt(state, message){
    
    var num = message.id;
    Vue.set(state.allGotIt, num, {
      finished:false,
      starred:false,
      content:message.new,
      id:num

})

  },

  EDITCON(state, message){
      state.editcontent = message
  }

}

const actions = {
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  },

  verify({commit}) {
    Vue.$http.post('/someUrl', state.userinfom).then(response=> {

    },response => {
      //error
    });
  },

    updatesUcIt({commit}){
    state.test=1
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
