<template>
    <div>
        <h4>Custom Swith</h4>
        <!-- {{ locale }} -->
        <ul>
            <li 
            v-for="lang in locales"
            :key="lang.code"
            :value="lang.code"
            @click="switchLang(lang.code)"
            >
                <h3>{{ lang.name }}</h3>
            </li>
        </ul>

        <select v-model="language" >
            <option
            v-for="lang in locales"
            :key="lang.code"
            :value="lang.code"
            >
                <h4>{{ lang.name }}</h4>
            </option>
        </select>
    </div>
</template>

<script setup>
    const { locales, locale, setLocale } = useI18n()
    const language = computed({
        get: () => locale.value,
        set: (value) => {
            setLocale(value)
        }
    })
    const switchLang = (value) => {
        setLocale(value)
    }
</script>

<style>
    ul li {
        list-style: none;
        background-color: azure;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
    }
</style>