<template>
    <div>
        <h4>Swith language</h4>
        <!-- {{ locale }} -->
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
</script>