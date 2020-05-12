<template>
    <div class="post-detail">
        <div class="card mb-3">
            <div class="card-body">
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "PostDetail",
        data() {
            return {
                id: this.$route.params.id,
                post: [],
                error: []
            }
        },
        created() {
            Axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
                .then(res => {
                    this.post = res.data;
                })
                .catch(e => {
                    this.error.push(e);
                })
        }
    }
</script>

<style scoped>

</style>