<template>
  <div class="movie">
    <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieP.poster_path}`" :alt="movieP.original_title"
      class="movie-img" />
    <div>
      <div class="movie-name">
        {{ movieP.original_title }} ({{ movieP.release_date }})
      </div>

      <span class="movie-overview">{{ movieP.overview }}</span>

      <span class="movie-overview">Reting {{ movieP.vote_average }}</span>

      <div class="movie-buttons" v-if="!isSearch">
        <button class="btn movie-buttons-watched" @click="movieStore.toggleWatched(movieP.id)">
          <span v-if="!movieP.isWatched">Watched</span>
          <span v-else>Unwatched</span>
        </button>
        <button class="btn movie-buttons-delete" @click="movieStore.deletMovie(movieP.id)">Delete</button>
      </div>

      <div class="movie-buttons" v-else>
        <button class="btn btn_green" @click="searchStor.addToUserMovies(movieP)">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from '../stores/MovieStore';
import { useSearchStore } from '../stores/SearchStore';
const movieStore = useMovieStore()
const searchStor = useSearchStore()

const props = defineProps({
  movieP: {
    type: Object,
    required: true,
    default: () => { },
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style lang="css" scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-buttons-watched {
  color: #fff;
  background: #1eb4c3;
}

.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}

.movie-buttons-delete {
  color: #fff;
  background: #ff2a2a;
}
</style>
