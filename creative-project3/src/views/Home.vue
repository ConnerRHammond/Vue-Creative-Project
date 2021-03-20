<template>
<div>
  <div class = "addJoke">
    <div class ="intro" >
      <p><h3>Welcome to the Joke Factory</h3>Welcome to the Joke Factory
          Add a photo or like your favorite joke!</br>
          Check the most liked in the top right corner.
      </p>
      
    </div>
    <h1>Add a joke!!!</h1>
      <h3>Pick an Image</h3>
      <img v-if ="imageClicked" :src="currentImage" width="200px" height="200px">
      <table v-if ="!imageClicked">
        <tr>
          <td><button class = "button" v-on:click ="i2"> <img src="/images/jokes/Laughing2.jpg"></button></td>
          <td><button class = "button" v-on:click ="i3"> <img src="/images/jokes/Laughing3.jpg"></button></td>
          <td><button class = "button" v-on:click ="i4"> <img src="/images/jokes/Laughing4.jpg"></button></td>
        </tr>
        <tr>
          <td><button class = "button" v-on:click ="i5"> <img src="/images/jokes/Laughing5.jpg"></button></td>
          <td><button class = "button" v-on:click ="i6"> <img src="/images/jokes/Laughing6.jpg"></button></td>
          <td><button class = "button" v-on:click ="i7"> <img src="/images/jokes/Laughing7.jpg"></button></td>
        </tr>
        <tr>
          <td><button class = "button" v-on:click ="i8"> <img src="/images/jokes/Laughing8.jpeg"></button></td>
          <td><button class = "button" v-on:click ="i9"> <img src="/images/jokes/Laughing9.jpg"></button></td>
          <td><button class = "button" v-on:click ="i10"> <img src="/images/jokes/Laughing10.jpg"></button></td>
        </tr>
      </table>         
     <form v-on:submit.prevent="addJoke">
        <input v-model="Title" placeholder="Title">
        </br>
        <textarea v-model="Joke" placeholder="ADD JOKE HERE"></textarea>
        </br>
        <input v-model="type" placeholder="type">
        </br>
        <button type="submit">add</button>
  </form>
  </div>
  <Jokes :Jokes ="Jokes"/>
</div>
</template>

<<script>
import Jokes from "../components/Jokes.vue"
export default {
  name: 'Home',
  components: {
    Jokes
  },
   data() {
    return {
      Title:'',
      Joke:'', 
      type:'',
      image:'',
      imageClicked: false,
    }
  },
  methods:{
     addJoke(){
        this.$root.$data.Jokes.push({
        id: this.currentId,
        name: this.Title,
        joke: this.Joke,
        type: this.type,
        image:this.image,
        like: 0
      })
      this.Title ='';
      this.Joke ='';
      this.type ='';
      this.image='';
      this.imageClicked = false;
    },
    i2(){
        this.imageClicked = true;
        this.image = 'Laughing2.jpg';
    },
    i3(){
        this.imageClicked = true;
        this.image = 'Laughing3.jpg';
    },
    i4(){
        this.imageClicked = true;
        this.image = 'Laughing4.jpg';
    },
    i5(){
        this.imageClicked = true;
        this.image = 'Laughing5.jpg';
    },
    i6(){
        this.imageClicked = true;
        this.image = 'Laughing6.jpg';
    },
    i7(){
        this.imageClicked = true;
        this.image = 'Laughing7.jpg';
    },
    i8(){
        this.imageClicked = true;
        this.image = 'Laughing8.jpg';
    },
    i9(){
        this.imageClicked = true;
        this.image = 'Laughing9.jpg';
    },
    i10(){
        this.imageClicked = true;
        this.image = 'Laughing10.jpg';
    },

  },
  computed: {
    Jokes() {
      return this.$root.$data.Jokes;
    },
    currentId(){
      return this.$root.$data.Jokes.length+1;
    },
    currentImage(){
      return "/images/jokes/"+this.image
    }
  },
}
</script>
<style scoped>

*{
 font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
h1,h2,h3,h4{
  font-family: cursive;
}

.addJoke{
  padding: 40px;
}
.buttons{
}
.button{
  display:flex;
  flex-direction: row;
}
.button img{
  display:flex;
  width:200px;
  height: 200px;
}
.intro{
  text-align: center;
}
</style>