<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" :id="'serie'+index" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <img :src="image" :alt="name">
            <h5 class="modal-title" id="exampleModalLabel"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p v-html="summary"></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
<!--            <button type="button" class="btn btn-primary">Save changes</button>-->
        </div>
        </div>
    </div>
    </div>
  
  </div>
</template>

<script>
export default {
    name:'ModalSerie',
    props:['index', 'name', 'summary', 'image', 'id']
}
</script>

<style>

</style>