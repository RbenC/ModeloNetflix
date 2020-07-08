<template>
  <div class="container mt-5">    
    <ListadoSeries/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListadoSeries from '@/components/ListadoSeries.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    ListadoSeries,
    Footer
  }
}
</script>
