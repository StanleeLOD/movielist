<template>
  <div class="movies-item">
    <div class="movie-content">
      <h3 class="title">{{ movie.Title }} ({{ movie.Year }})</h3>
      <span> {{ movie.imdbID }} </span>

      <MoviesStar
        v-if="selectable"
        :isSelected="movie.isSelected"
        @starClicked="onStarClicked"
      ></MoviesStar>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MoviesStar from '@/components/MoviesStar.vue'

export default {
  name: 'MoviesItem',
  components: {
    MoviesStar
  },

  props: {
    selectable: {
      required: false,
      type: Boolean,
      default: false
    },
    movie: {
      required: true,
      type: Object
    },
    index: {
      type: Number
    }
  },
  methods: {
    ...mapActions(['toggleFavouriteMovie']),

    onStarClicked() {
      const { movie, index } = this;
      this.toggleFavouriteMovie({ movie, index })
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
  position relative
  display flex
  flex-direction column
  justify-content center
  flex 1 1 100%
  
  padding 20px
  border 1px solid #ccc
  border-radius 5px

  .title
    margin-top 0

</style>