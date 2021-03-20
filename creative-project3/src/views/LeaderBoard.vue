<template>
    <p>{{highestLiked.name}}</p>
</template>

<script>
export default {
  name: 'LeaderBoard',
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
    }
    },
}
</script>

