import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    pages: 0,
    currentPage: 1,
    search: null,
    isMoviesLoaded: false,

    favouriteMovies: {

    }
  },

  mutations: {
    setTotalPages(state, pages) {
      state.pages = pages
    },

    setCurrentPage(state, page) {
      state.currentPage = page
    },

    setSearch(state, search) {
      state.search = search
    },

    setIsMoviesLoaded(state, isLoaded) {
      state.isMoviesLoaded = isLoaded
    },

    setMovies(state, movies) {
      state.movies = movies.map(movie => ({
        ...movie,
        isSelected: !!state.favouriteMovies[movie.imdbID]
      }))
    },


    addFavouriteMovie(state, { movie, index }) {
      Vue.set(state.movies[index], 'isSelected', true)
      Vue.set(state.favouriteMovies, movie.imdbID, movie)
    },

    removeFavouriteMovie(state, { movie, index }) {
      Vue.set(state.movies[index], 'isSelected', false)
      Vue.delete(state.favouriteMovies, movie.imdbID)
    },
  },

  actions: {
    getMovies({ state, commit, dispatch }) {
      commit('setIsMoviesLoaded', false)
      Vue.axios.get('movies/search', {
        params: {
          Title: state.search,
          page: state.currentPage
        }
      })
        .then(response => {
          dispatch('setMoviesData', response.data)
        })
    },

    fetchMovies({ commit, dispatch }) {
      commit('setCurrentPage', 1)
      dispatch('getMovies')
    },

    setMoviesData({ commit }, data) {
      commit('setTotalPages', data.total_pages)
      commit('setMovies', data.data)
      commit('setIsMoviesLoaded', true)
    },

    setSearch({ commit }, event) {
      commit('setSearch', event.target.value)
      commit('setCurrentPage', 1)
    },

    setPage({ commit, dispatch }, page) {
      commit('setCurrentPage', page)
      dispatch('getMovies')
    },

    toggleFavouriteMovie({ state, commit }, { movie, index }) {
      const isSelected = !!state.favouriteMovies[movie.imdbID]
      const method = isSelected ? 'removeFavouriteMovie' : 'addFavouriteMovie'

      commit(method, { movie, index });
    },
  }
})
