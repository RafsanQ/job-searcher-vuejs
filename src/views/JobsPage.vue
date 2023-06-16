<template>
    <h1>Jobs Page</h1>
    <div v-for="job in jobs" :key="job.id">
        <h2>{{ job.title }}</h2>
    </div>
</template>


<script>
    export default{
        data() {
                    return {
                        jobs: [
                            {title: "Ninja UX Designer", id: 1, details: 'lorem'},
                            {title: "Ninja UX Developer", id: 2, details: 'lorem'},
                            {title: "Ninja Analyst", id: 3, details: 'lorem'},
                            {title: "Ninja Tester", id: 4, details: 'lorem'},
                            {title: "Ninja Team Lead", id: 5, details: 'lorem'},
                        ]
                    }
                }
    }
</script>


<style>

</style>