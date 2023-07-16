<template>
    <div class="container" >
        <h3>{{$t('home_title')}}</h3>
        <NuxtLink :to="localPath('/about')">{{ $t('about_link') }}</NuxtLink>
    </div>
</template>

<script setup>
    const localPath = useLocalePath()
</script>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100vh;
    }
    a {
        text-decoration: none;
        color: #fff;
        padding: 1rem 1.5rem;
        background-color: blue;
        border-radius: 1rem;
        margin: 1rem 0;
    }
</style>