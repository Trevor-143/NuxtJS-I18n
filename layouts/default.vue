<template>
    <div>
        <slot />
        <div class="switch" >
            <LangSwitcher />
        </div>
        <div class="two" >
            <CustomLangSwitcher />
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .switch {
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 3rem;
    }
    .two {
        position: fixed;
        bottom: 0;
        left: 0;
        margin: 3rem;
    }
</style>