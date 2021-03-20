<template>
  <div class="Jokes">
    <div class="Joke" v-for="joke in Jokes " :key="joke.id">
      <div class="info">
          <div class ="Title">
              <h1>{{joke.name}}</h1>
          </div>
          <div class ="punchline">
              <p>{{joke.joke}}</p>
          </div>
      </div>
      <div class="image">
        <img class = "JokeImage" :src="'/images/jokes/'+joke.image">
      </div>
      <div class="Type">
        <h5>Categories: {{joke.type}}</h5>
        <h5>Likes : {{joke.like}}</h5>
         <button class="auto" v-on:click="addLike(joke)">Like</button>
         <button class="auto" v-on:click="deletelike(joke)">Delete Like</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Jokes',
  props: {
    Jokes: Array
  },
    methods:{
      addLike(joke){
          this.$root.$data.Jokes[joke.id-1].like +=1;
      },
      deletelike(joke){
          this.$root.$data.Jokes[joke.id-1].like -=1;
      }
  }
}

</script>
<style scoped>
*{
 font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
h1,h2,h3,h4,h5{
  font-family: cursive;
}
.Jokes{
    display: grid;
    grid-template-columns: 1fr  1fr;
    flex-direction: column;
}
.joke{
    flex-direction: column;
    display:flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: space-around;
    background-color: gray;


}
.info{
    flex-direction: column;
    display:flex
}
.image{
    display: flex;
}
.type{
    display: flex;
}
.JokeImage{
    width:200px;
    height:200px;
}

</style>