<template>
  <div class="movies-list">
    <header class="header">
      <h2 class="title">Movies:</h2>
      <movies-search></movies-search>
    </header>

    <template v-if="isMoviesLoaded">    
      <div 
        class="movies-wrapper"
        v-if="movies.length">
        <movies-item
          v-for="(movie, index) in movies"
          :index="index"
          :key="movie.imdbID"
          :movie="movie"
          :selectable="true"
        ></movies-item>
      </div>

      <p v-else>
        No Movies
      </p>
    </template>

    <div v-else class="loader">Loading...</div>

    <paginate
      :page-count="pages"
      :click-handler="onPageChange"
      :prev-text="'Prev'"
      :next-text="'Next'"
      container-class="pagination"
      page-class="pagination-btn btn">
    </paginate>


    <hr>
    <header class="header">
      <h2 class="title">My Favourite Movies:</h2>
    </header>

    <div class="movies-wrapper">
      <movies-item
        v-for="movie in favouriteMovies"
        :key="movie.imdbID"
        :movie="movie"
      ></movies-item>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Paginate from 'vuejs-paginate'

import MoviesItem from '@/components/MoviesItem.vue';
import MoviesSearch from '@/components/MoviesSearch.vue';

export default {
  name: 'MovieList',
  components: {
    MoviesItem,
    MoviesSearch,
    Paginate
  },

  mounted() {
    this.getMovies()
  },

  computed: {
    ...mapState([
      'movies',
      'isMoviesLoaded',
      'search',
      'pages',
      'currentPage',
      'favouriteMovies'
    ])
  },
  methods: {
    ...mapActions(['getMovies', 'setPage']),

    onPageChange(page) {
      this.setPage(page)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    padding 10px 15px
    
    .title
      display inline-block
      margin-right 20px

  .movies-wrapper
    display flex
    width 100%
    flex-direction row
    flex-wrap wrap

  .pagination
    display inline-block
    margin-top 20px
    margin-bottom: 20px;

    padding-left 0
    
    list-style none
    border 1px solid #ccc
    border-radius: 5px
    font-size 0

    >>> li
      display inline-block
      font-size 1rem
      
      &.active
        background aquamarine 

      &.disabled
        opacity .7
        background #ccc
        

      &:last-of-type 
        a
          border-right: none

      a
        display block
        padding 10px 15px
        border-right 1px solid #ccc
        outline none
    
</style>