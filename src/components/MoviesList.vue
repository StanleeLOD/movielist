<template>
  <div class="movie-list">
    <h2>Movies:</h2>
    
    <movies-item
      v-for="movie in movies"
      :key="movie.imdbID"
      :movie="movie"
    ></movies-item>
    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MoviesItem from './MoviesItem.vue';

export default {
  name: 'MovieList',
  components: {
    MoviesItem
  },

  mounted() {
    this.getMovies()
  },

  computed: {
    ...mapState(['movies'])
  },
  methods: {
    ...mapActions(['getMovies'])
  }
}
</script>