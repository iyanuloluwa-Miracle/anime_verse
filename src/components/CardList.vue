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
    max-width: calc(33% - 16px); /* Adjusted for margin */
    margin: 0 8px; /* Added margin for spacing between cards */
    margin-bottom: 16px;
    box-sizing: border-box; /* Ensures padding and margin are included in width */
}

img {
    width: 100%;
    max-height: 300px; /* Changed height to max-height for responsiveness */
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    transition: 0.4s;
}

h3 {
    padding: 16px;
    color: #2c4875;
}

h3:hover {
    color: #00202e;
    transition: .4s;
}

/* Media query for smaller screen sizes */
@media (max-width: 768px) {
    .card {
        flex: 1 1 50%; /* Adjusting to 50% width for two cards per row */
        max-width: calc(50% - 16px); /* Adjusted for margin */
    }
}
</style>
