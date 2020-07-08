<template>
  <div class="container">
    <div class="row">
      <div class="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="(serie,index) in traerDataSeries" :key="index" >
        <img :src="serie.image.medium" class="card-img-top" :alt="serie.name">
        <div class="card-body">
          <h5 class="card-title">{{serie.name | mayuscula}}</h5>
          <p class="card-text text-justify" v-html="$options.filters.recorte(serie.summary)" ></p> 
          
          <!-- Button trigger modal -->          
          <button type="button" class="btn btn-primary mx-2" data-placement="top" title="Ver más detalle" data-toggle="modal" :data-target="'#serie'+index">
           <i class="fas fa-search-plus"></i>
          </button>

          <!-- Button trigger Visitar web de la pelicula -->        
          <a :href="serie.url" target="_blank" class="btn btn-secondary mx-2" data-placement="top" title="Visitar web de film">
          <i class="fas fa-globe"></i>
          </a>

          <!-- Button agregar a favoritos -->        
          <a href="#" class="btn btn-info" :class="{ favorito: activo }" data-toggle="tooltip" data-placement="top" title="Añadir a Mis Favoritos" @click="MisFavoritos(serie)">
          <i class="far fa-heart"></i>
          </a>
          

          <ModalSerie :index="index" :name="serie.name" :summary="serie.summary" :image="serie.image.medium" :id="serie.id" ></ModalSerie>

        </div>
      </div>
    </div>

  
  </div>
</template>

<script>
import ModalSerie from '../components/ModalSerie.vue';

export default {
    name: 'ListadoSeries',
    data(){
      return {
        activo:true
      }
    },
    components:{
      ModalSerie
    },
    computed:{
        traerDataSeries() {
          return this.$store.getters.enviarDataSeries;          
      }
    },
    filters:{
      mayuscula(texto){
        return texto.toUpperCase();
      },
      recorte(texto){
        return texto.substring(0,100)+'...'
      }
    },
    methods:{
      MisFavoritos(serie) {
        
        let auxiliarSerie = {
          id: serie.id,
          name: serie.name,
          image: serie.image.medium,
          url: serie.url
        }
        serie.id ? this.activo : !this.activo ;
        this.$store.dispatch('MisFavoritos', auxiliarSerie);
      }
    }
}
</script>

<style>

.favorito {
  background-color: red;  
}

</style>