<template>
    <div class="card">
        <a href="#" target="_blank">
            <img :src="anime.images.jpg.image_url" alt="Anime Poster Image" />
        </a>
        <h3>{{ anime.title }}</h3>

    </div>
</template>

<script>
export default {
    props: ['anime']
}
</script>
<style scoped>
.card {
    flex: 1 1 33%;
    width: 33%;
    max-width: 33%;
    padding: 0px 8px;
    margin-bottom: 16px;

}

img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    transition: 0.4s;
}

img:hover {
    transform: scale(1.05);
}

h3 {
    padding: 16px;
    color: #2c4875;
}

h3:hover {
    color: #00202e;
    transition: .4s;
}
</style>