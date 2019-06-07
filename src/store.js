import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    pages: 0,
    currentPage: 1,
    search: null
  },

  mutations: {
    setTotalPages(state, pages) {
      state.pages = pages;
    },

    setCurrentPage(state, page) {
      state.currentPage = page;
    },

    setMovies(state, movies) {
      state.movies = movies
    }
  },

  actions: {
    getMovies({ dispatch }) {
      Vue.axios.get('movies/search')
        .then(response => {
          dispatch('setMoviesData', response.data);
        })
    },

    setMoviesData({ commit }, data) {
      commit('setTotalPages', data.total_pages);
      commit('setMovies', data.data)
    }

  }
})
