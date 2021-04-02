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
         <button class="auto" v-on:click="deleteJoke(joke)">Remove Joke</button>
         <p>PLEASEEEEEEE WORK</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Jokes',
  props: {
    Jokes: Array
  },
    methods:{
    async getJokes() {
        try {
          let response = await axios.get("/api/joke");
          this.$root.$data.Jokes = response.data;
          return true;
        } catch (error) {
          console.log(error);
        }
    },
    async addLike(joke) {
      try {
        await axios.put("/api/joke/" + joke.id, {
          like:joke.like+1
        });
        this.getJokes();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteLike(joke) {
      try {
        await axios.put("/api/joke/" + joke.id, {
          like:joke.like-1
        });
        this.getJokes();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteJoke(joke) {
      try {
        await axios.delete('/api/joke/' + joke.id);
            this.getJokes();
      } catch (error) {
        console.log(error);
      }
    },
    //   addLike(joke){
    //       this.$root.$data.Jokes[joke.id-1].like +=1;
    //   },
    //   deletelike(joke){
    //       this.$root.$data.Jokes[joke.id-1].like -=1;
    // //   },
    //   deleteJoke(joke){
    //     console.log(this.$root.$data.Jokes[joke.id-1].name);
    //     this.$root.$data.Jokes.splice(joke.id-1,1);
    //   }
      
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