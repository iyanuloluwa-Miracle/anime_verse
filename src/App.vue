<template>
	<div class="app">
	  <header class="pt-12 pb-12">
		<h1 class="text-color-one text-5xl font-bold text-center uppercase mb-10">The<strong class="text-color-two">Anime</strong>Verse</h1>
		<form class="flex justify-center px-7" @submit.prevent="HandleSearch">
		  <input
			type="search"
			placeholder="Search for an anime...."
			class="rounded-full bg-violet-100 text-xl border-2 border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 py-3 px-4 block w-full max-w-2xl"
			required
			v-model="search_query"
		  />
		</form>
	  </header>
	  <main class="max-w-1200 mx-auto px-6">
		<div class="flex flex-wrap mx-[-8px]">
		  <CardList 
			v-for="anime in animeList" 
			:key="anime.mal_id"
			:anime="anime" />
		</div>
	  </main>
	</div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import CardList from "./components/CardList.vue";
  
  export default {
	components:{
	  CardList
	},
	setup() {
	  const search_query = ref("");
	  const animeList = ref([])
	  const HandleSearch = () => {
	  const url = `https://api.jikan.moe/v4/anime?q=${search_query.value}`;
  
		fetch(url)
		  .then(res => res.json()) 
		  .then(res => {
			animeList.value = res.data;
			console.log(res); // Console log the response object
		  })
		  .catch(error => {
			console.error('Error fetching data:', error) ;
		  });
  
		console.log(url); // Move this console log inside the function if you want to log the URL as well
	  }
  
	  return {
		search_query,
		animeList,
		HandleSearch
	  };
	}
  
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Ojuju:wght@200..800&display=swap");
  
  /* Apply margin and padding reset */
  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Ojuju", sans-serif;
  }
  
  a {
	text-decoration: none;
  }
 
  </style>