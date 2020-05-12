<template>
    <div class="post-list">
        <div class="card mb-3" v-for="post of posts" :key="post.id">
            <div class="card-body">
                <h3><router-link :to="`/post-detail/${post.id}`">{{post.title}}</router-link></h3>
                <p>{{post.body}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostList",
        props: ["posts"]
    }
</script>

<style scoped>

</style>