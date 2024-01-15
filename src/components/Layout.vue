<script>
// const { default: NavbarVue } = require('');
import NavbarVue from './Navbar.vue'
import Sidebar from './Sidebar.vue'

export default {
    components:{
        NavbarVue,
        Sidebar
    }
}
</script>
<template>
 <div class="d-flex ">
   
    <Sidebar />
<div class="w-100">
    <NavbarVue />
  <div class="p-4 main_content_iner main_content">
    <router-view> </router-view>
  </div>
</div>
 </div>
  

</template>