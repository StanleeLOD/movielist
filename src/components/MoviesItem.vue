<template>
  <div class="movies-item">
    <div class="movie-content">
      <h3>{{ movie.Title }} ({{ movie.Year }})</h3>
      <span> {{ movie.imdbID }} </span>

    </div>
  </div>
</template>

<script>

export default {
  name: 'MoviesItem',

  props: {
    movie: {
      required: true,
      type: Object
    }
  },

}
</script>

<style lang="stylus" scoped>
.movies-item
  display flex
  flex 0 0 20%
  padding 15px 20px

.movie-content
  display flex
  flex-direction column
  justify-content center
  flex 1 1 100%
  
  padding 10px
  border 1px solid #ccc
  border-radius 5px

</style>