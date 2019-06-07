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


    <hr>

    {{ favouriteMovies }}

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import MoviesItem from '@/components/MoviesItem.vue';
import MoviesSearch from '@/components/MoviesSearch.vue';

export default {
  name: 'MovieList',
  components: {
    MoviesItem,
    MoviesSearch
  },

  mounted() {
    this.getMovies()
  },

  computed: {
    ...mapState([
      'movies',
      'isMoviesLoaded',
      'search',
      'favouriteMovies'
    ])
  },
  methods: {
    ...mapActions(['getMovies'])
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

</style>