<template>
  <div class="movie-item">
    {{ movie }}    
  </div>
</template>

<script>

export default {
  name: 'MovieItem',
  props: {
    movie: {
      required: true,
      type: Object
    }
  }
}
</script>