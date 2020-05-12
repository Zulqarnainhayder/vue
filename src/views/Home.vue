<template>
  <div class="home">
    <PostAdd   />
    <PostList v-bind:posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line no-unused-vars
import Axios from "axios";
import PostAdd from "./PostAdd";
import PostList from "./PostList";

export default {
  name: 'Home',
  components: {
    PostList,
    PostAdd
  },
  data(){
    return{
      posts: [],
      errors: []
    }
  },
  created() {
    Axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res =>{
             this.posts = res.data;
            })
            .catch(e =>{
              this.errors.push(e);
            })
  }
}
</script>
