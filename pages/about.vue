<template>
    <div class="container" >
        <h3>{{$t('about_title')}}</h3>
        <NuxtLink :to="localPath('/')">{{ $t('home_link') }}</NuxtLink>
    </div>
</template>

<script setup>
    const localPath = useLocalePath()
</script>