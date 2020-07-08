<template>
  <div>

    <!--<div id="nav">
      <router-link to="/">Series</router-link> |
      <router-link to="/misfavoritos">Mis Favoritos</router-link>
    </div>-->
    <BarraNavegacion></BarraNavegacion>
    <router-view/>
  </div>
</template>


<script>
import BarraNavegacion from './components/BarraNavegacion.vue'
import { conexionApiTvMaze } from './configuracion/configuracionApi';
export default {
  name: 'App',
  components:{
    BarraNavegacion
  },
  mounted(){
    conexionApiTvMaze(); 
  }
}
</script>

<style lang="scss">
body {
  background-color: black;
}

$primary: #9724c4;

@import './node_modules/bootstrap/scss/bootstrap.scss';

</style>
