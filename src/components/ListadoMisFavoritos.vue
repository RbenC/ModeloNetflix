<template>
  <div>
    <div class="card-footer text-center">
        <jw-pagination :items="traerDataFavoritos" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
    </div>
    <table class="table table-hover">
        <thead>
            <tr>            
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Opción</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(favorito, index) in pageOfItems" :key="index">            
            <td>{{favorito.name}} <i class="far fa-heart"></i></td>
            <td><a :href="favorito.url" target="_blank"><img :src="favorito.image" :alt="favorito.name" width="7%"></a></td>
            <td><button @click="quitar(index)" data-toggle="tooltip" data-placement="top" title="Borrar de mi lista de Favoritos" ><i class="far fa-trash-alt"></i></button></td>
            </tr>

        </tbody>
        
    </table>
            
    

    <Footer></Footer>
  </div>
</template>

<script>
const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
import Swal from 'sweetalert2';
import Footer from '../components/Footer.vue'

export default {
    name: 'ListadoMisFavoritos',
     components: {
        Footer
    },
    data(){
        return {
            pageOfItems: [],
            customLabels
        }
    },
    computed:{
        traerDataFavoritos() {
            return this.$store.getters.enviarDataMisFavoritos;
        }
    },
    methods:{
        quitar(id){
            Swal.fire({
                title: 'Esta seguro ?',
                text: "Desea remover de su lista de favoritos",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
                }).then((result) => {
                if (result.value) {
                    this.$store.dispatch('quitarFavorito', id);
                }
                })
            
        },
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    }
    
}
</script>

<style>

</style>