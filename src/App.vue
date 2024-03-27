<template>
	<div class="app">
	  <header>
		<h1>The<strong>Anime</strong>Verse</h1>
		<form class="search-box" @submit.prevent="HandleSearch">
		  <input
			type="search"
			class="search-field"
			placeholder="Search for an anime...."
			required
			v-model="search_query"
		  />
		</form>
	  </header>
	  <main>
		<div class="cards">
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
  h1 {
	color: #057dcd;
	font-size: 42px;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 40px;
  }
  
  .search-box {
	display: flex;
	justify-content: center;
	padding-left: 30px;
	padding-right: 30px;
  }
  strong {
	color: #43b0f1;
  }
  header {
	padding-top: 50px;
	padding-bottom: 50px;
  }
  input:focus{
	color: #fff;
	background-color: #003f5c;
	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
  }
  input:valid{
	color: #fff;
	background-color: #003f5c;
	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
  
  }
  .placeholder {
	color: #aaa;
  }
  .search-field {
	appearance: none;
	background: none;
	border: none;
	outline: none;
	background-color: #f3f3f3;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
	display: block;
	width: 100%;
	max-width: 600px;
	padding: 15px;
	border-radius: 8px;
	color: #03045e;
	font-size: 20px;
	transition: 0.4s;
  }
  main {
	max-width: 1200px;
	margin: 0 auto;
	padding-left: 30px;
	padding-right: 30px;
  }
  
  .cards {
	display: flex;
	flex-wrap: wrap;
	margin: 0 -8px;
  }
  </style>