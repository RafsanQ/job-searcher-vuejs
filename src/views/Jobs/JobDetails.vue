<template>
    <h1>Job Details Page</h1>
    <p>The job id is {{ this.id }}</p>
</template>

<script>
    export default {
        data() {
                    return {
                        id: this.$route.params.id
                    }
                }
    }
</script>

<style>

</style>