<template>
  <div>
  
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-brand anton" href="#">NetFlix</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse lobster" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a href="#"><router-link class="nav-link" to="/"><span></span>Series</router-link></a>
                </li>
                <li class="nav-item">
                    <a href="#"><router-link class="nav-link" to="/misfavoritos"><span><i class="far fa-heart"></i></span> Mis Favoritos</router-link></a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </div>
    </nav>
  
  </div>
</template>

<script>
export default {
    name: 'BarraNavegacion'
}
</script>

<style scoped lang="scss">
.anton {
font-family: 'Coda Caption', sans-serif;
color:red;
}
.lobster {
font-family: 'Roboto Mono', monospace;
}



@import url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&family=Roboto+Mono:wght@500&display=swap');
</style>