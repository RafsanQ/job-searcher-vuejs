<template>
    <h1>Jobs Page</h1>
    <div v-for="job in jobs" :key="job.id" class="jobList">
        <RouterLink :to="{ name: 'jobsDetails', params: { id: job.id }}">
            <h1>{{ job.title }}</h1>    
        </RouterLink>
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


<style scoped>
    h2{
        background: #909090;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    h2:hover {
        background: #1a1a1a;
    }
    a{
        text-decoration: none;
    }
</style>