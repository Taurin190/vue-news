<template>
  <div id="app">
    <nav id="nav">
      <div class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand">Vue News</a> 
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/"  class="nav-link">TOP</router-link>
            </li>
            <li class="nav-item ">
              <router-link to="/ask" class="nav-link">ASK</router-link>
            </li>
            <li class="nav-item ">
              <router-link to="/lastest"  class="nav-link">UPDATE</router-link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
#nav {
  padding: 15px;
  background-color: #343a40;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav .navbar-brand {
  float: left;
  font-size: 20px;
}
#nav ul.navbar-nav li{ 	
    display: inline;
 } 

a.nav-link{
  padding: 20px;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
</style>
