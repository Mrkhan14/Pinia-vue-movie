import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
    const movies = ref([]);
    const activeTab = ref(2);

    const watchedMovies = computed(() =>
        movies.value.filter((el) => el.isWatched)
    );
    const totalCountMovies = computed(() => movies.value.length);

    const setActiveTab = (id) => {
        activeTab.value = id;
    };
    const toggleWatched = (id) => {
        const idx = movies.value.findIndex((el) => el.id === id);
        movies.value[idx].isWatched = !movies.value[idx].isWatched;
    };
    const deleteMovie = (id) => {
        movies.value = movies.value.filter((el) => el.id !== id);
    };

    return {
        movies,
        activeTab,
        watchedMovies,
        totalCountMovies,
        toggleWatched,
        deleteMovie,
        setActiveTab,
    };
});

// export const useMovieStore = defineStore("movieStore", {
//     state: () => ({
//         movies: [],
//         activeTab: 1,
//     }),

//     getters: {
//         watchedMovies() {
//             return this.movies.filter((elem) => elem.isWatched === true)
//         },
//         totalCountMovies() {
//             return this.movies.length
//         }
//     },

//     actions: {
//         setActiveTab(id) {
//             this.activeTab = id;
//         },
//         toggleWatched(id) {
//             const idx = this.movies.findIndex((elem) => elem.id === id);
//             this.movies[idx].isWatched = !this.movies[idx].isWatched;
//         },
//         deletMovie(id) {
//             this.movies = this.movies.filter(elem => elem.id !== id);
//         }
//     }
// });
