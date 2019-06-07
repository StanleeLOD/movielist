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
          v-for="movie in movies"
          :key="movie.imdbID"
          :movie="movie"
        ></movies-item>
      </div>

      <p v-else>
        No Movies
      </p>
    </template>

    <div v-else class="loader">Loading...</div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import MoviesItem from './MoviesItem.vue';
import MoviesSearch from './MoviesSearch.vue';

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
    ...mapState(['movies', 'isMoviesLoaded', 'search'])
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