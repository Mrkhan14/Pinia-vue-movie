import { defineStore } from "pinia";

export const useMovieStore = defineStore("movieStore", {
    state: () => ({
        movies: [],
        activeTab: 1,
    }),

    getters: {
        korilganKinos() {
            return this.movies.filter((elem) => elem.isWatched === true)
        },
        kinolarSoni() {
            return this.movies.length
        }
    },

    actions: {
        setActioneTab(id) {
            this.activeTab = id;
        },
        toggleWatched(id) {
            const idx = this.movies.findIndex((elem) => elem.id === id);
            this.movies[idx].isWatched = !this.movies[idx].isWatched;
        },
        deletMovie(id) {
            this.movies = this.movies.filter(elem => elem.id !== id);
        }
    }
});
