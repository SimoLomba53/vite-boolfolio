<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

export default {
   name:'PostDetailPage',

   data(){
    return{
        proj:null,
    };
   },

   components:{ProjectCard},


   created(){
     axios
      .get(`http://127.0.0.1:8000/api/projs/${this.$route.params.id}`)
      .then((response)=>{this.proj = response.data});
   },
};


</script>

<template>
  <ProjectCard v-if="proj" :proj="proj"/>
</template>

<style lang="scss" scoped></style>
