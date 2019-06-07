<template>
  <div class="movies-search">
    <input
      type="text"
      :value="search"
      @input="setSearch"
      @keypress.enter="fetchMovies"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MovieSearch',

  computed: {
    ...mapState([
      'search'
    ])
  },
  methods: {
    ...mapActions([
      'setSearch',
      'fetchMovies'
    ])
  },
}
</script>

<style lang="stylus" scoped>
.movies-search
  min-width 30%

  input
    padding 10px
    width 100%
    border-radius 3px
    outline none
    box-shadow none

    border 1px solid #ccc
</style>