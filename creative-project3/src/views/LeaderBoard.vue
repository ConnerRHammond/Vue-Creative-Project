<template>
    <div>
        <div v-if="!check" class ="NoLikes">
            <h1>There are currently no likes!!</h1>
            <p>Please add likes on The Joke Factory to see content</p>
        </div>
    <div v-if="check" class="highestRated">
        <h1>Highest Rated with {{highestLiked.like}} likes</h1>
        <h3>{{highestLiked.name}}</h3>
        <p>{{highestLiked.joke}}</p>
        <img class = "JokeImage" :src="img">
    </div>
    </div>
</template>

<script>
export default {
  name: 'LeaderBoard',
  data(){
      return{
      }
  },
  computed: {
    Jokes() {
      return this.$root.$data.Jokes;
    },
    highestLiked(){
        var max = 0;
        var index = 0;
        for(var i = 0; i<this.$root.$data.Jokes.length;i++ ){
            if (this.$root.$data.Jokes[i].like > max){
                index = i;
            }
        }
        return this.$root.$data.Jokes[index];
    },
    check(){
         var max = 0;
        var index = 0;
        for(var i = 0; i<this.$root.$data.Jokes.length;i++ ){
            if (this.$root.$data.Jokes[i].like > max){
                index = i;
            }
        }
        if (this.$root.$data.Jokes[index].like == 0){
          return false;
        }
        return true;
    },
    img(){
        var max = 0;
        var index = 0;
        for(var i = 0; i<this.$root.$data.Jokes.length;i++ ){
            if (this.$root.$data.Jokes[i].like > max){
                index = i;
            }
        }
        return '/images/jokes/'+this.$root.$data.Jokes[index].image;
    }
},
}
</script>
<style>
.highestRated{
    text-align: center;
}
.JokeImage{
    width: 300px;
    height: 300px;
}
.NoLikes{
    text-align: center;
}

</style>

