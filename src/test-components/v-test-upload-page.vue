<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';

  export default {
    data(){
      return {
        file: '',
      }
    },
    methods: {
      submitFile(){
            let formData = new FormData();
            formData.append('file', this.file);
            Axios.post( 'http://localhost:3000/testPost',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(() => {
          console.log('SUCCESS!!');
        })
        .catch(() => {
          console.log('FAILURE!!');
        });
      },
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>

<style>

</style>