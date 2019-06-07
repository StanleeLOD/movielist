<template>
  <div
    class="movies-star"
    @click="onStarClick">
    
    <span v-html="starCode"></span>
  </div>
</template>

<script>
export default {
  name: 'MoviesStar',
  props: {
    isSelected: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    starCode() {
      return this.isSelected ? '&#9733;' : '&#9734;';
    }
  },
  methods: {
    onStarClick() {
      this.$emit('starClicked')
    }
  },
}
</script>

<style lang="stylus" scoped>
.movies-star
  position absolute
  top 10px
  right 10px
  cursor pointer
</style>