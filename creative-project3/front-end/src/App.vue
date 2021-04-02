<template>
<div id="app">
  <div id="menu">
    <div id="logo">
      <router-link to="/">
        <div class="opening">
          <H1>The Joke Factory</H1>
        </div>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/LeaderBoard">
        <div class="menu-item">
          <img src="/images/Star.png">
          <p>Leader Board</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<style>
* {
  background-color: azure;
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#logo {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#logo img {
  height: 200px;
}
#saved{
  height: 150px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.Categories {
  margin-right: 50px;
}
.opening{
  text-align: center;
  color:black;
  font-family: 'Courier New', Courier, monospace;
}
</style>
