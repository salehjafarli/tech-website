<template>
    <div>

      <nav class="navbar is-fixed-top">
        <div class="navbar-start">
            <a v-for="navbarItem in navbarItems" :key="navbarItem" class="navbar-item" v-bind:href="navbarItem.route">
              {{ navbarItem.name }}
            </a>
            
        </div> 
      </nav> 

    </div>
</template>
<script>

export default {
    data(){
        return {
            navbarItems: [{
            "name": "Ana səhifə",
            "route": "/"
            },
            {
              "name": "Məhsullar",
              "route": "/products"
            },
            {
              "name": "Haqqımızda",
              "route": "/aboutus"
            },
            {
              "name": "Kontakt",
              "route": "/contact"
            }]
        }
    }
}
</script>

<style>

</style>