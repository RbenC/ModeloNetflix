import axios from 'axios';
import store from '../store'


export function conexionApiTvMaze() {
    axios.get('http://api.tvmaze.com/shows')
    .then(response=> {
        //console.log(response.data);
        store.dispatch('llamarApiTvnaze', response.data);
    })
    .catch(error=>{
        console.log(error);
    })
}