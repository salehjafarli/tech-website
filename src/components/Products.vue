
<template>
  <div>
    <section class="hero is-info is-medium">

      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            {{ title }}
          </p>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <!--eslint-disable vue/require-v-for-key-->
              <li v-bind:class="{'is-active': activeTab(product.type)}" v-for="product in products" >
                <a v-on:click="TabClicked(product.type)">
                  <span class="icon is-small">
                    <i v-bind:class="product.icon"></i>
                  </span>
                  <span>{{ product.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    </section>

    <section class="section">
      <div class="columns">
        <div v-for="(product, index) in displayed" class="column is-3">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{ product.name }}</p>
                  <p class="subtitle is-6">@{{ product.company }}</p>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" v-on:click="handler(index)" class="card-footer-item">Əlavə məlumat</a>
            </footer>
          </div>
        </div>
      </div>
    </section>

    <modal v-if="showModal" v-bind:class="'is-active'">

      <div slot="modalContents">
        <p >
          <strong>{{ this.selected.name }}</strong> <small>@{{ this.selected.company }}</small>
        </p>
        <table class="table">
          <tbody>
          <tr>
            <th>Ad:</th>
            <td>{{ this.selected.name }}</td>
          </tr>
          <tr>
            <th>Qiymət:</th>
            <td>{{ this.selected.value }}</td>
          </tr>
          <tr>
            <th>RAM:</th>
            <td>{{ this.selected.RAM }}GB</td>
          </tr>
          <tr>
            <th>Yaddaş:</th>
            <td>{{ this.selected.Storage }}GB</td>
          </tr>
          <tr>
            <th>Şirkət:</th>
            <td>{{ this.selected.company}}</td>
          </tr>
          </tbody>
        </table>
        <nav class="level is-mobile">
          <div class="level-left">
          </div>
          <div class="level-right">
            <button class="button is-danger level-item" v-on:click="showModal = false">
              Bağla
            </button>
          </div>
        </nav>
      </div>

    </modal>

    

  </div>
</template>

<script>
/* eslint-disable */

import modal from './Modal.vue'
  export default {
    components: {
      modal: modal
    },
    data: function () {
      return {
        title: "Məhsullar",
        
        phones : [
          {
            name : "Redmi S2",
            company : "Xiaomi",
            value : 199,
            RAM : 3,
            Storage : 32
            
          },
          {
            name : "Redmi Note 10",
            company : "Xiaomi",
            value : 199,
            RAM : 3,
            Storage : 32
            
          },
          {
            name : "Redmi Note 11",
            company : "Xiaomi",
            value : 199,
            RAM : 3,
            Storage : 32
            
          },
          {
            name : "Poco f4",
            company : "Xiaomi",
            value : 199,
            RAM : 3,
            Storage : 32
            
          }
        ],
        laptops : [
          {
            name : "Aspire",
            company : "Acer",
            value : 999,
            RAM : 8,
            Storage : 256
            
          },
          {
            name : "Aspire",
            company : "Acer",
            value : 999,
            RAM : 8,
            Storage : 256
            
          },
          {
            name : "Aspire",
            company : "Acer",
            value : 999,
            RAM : 8,
            Storage : 256
            
          },
          {
            name : "Aspire",
            company : "Acer",
            value : 999,
            RAM : 8,
            Storage : 256
            
          }
          
        ],
        tablets : [
          {
            name : "Ipad",
            company : "Apple",
            value : 999,
            RAM : 4,
            Storage : 64
          },
          {
            name : "Ipad",
            company : "Apple",
            value : 999,
            RAM : 4,
            Storage : 64
          },
          {
            name : "Ipad",
            company : "Apple",
            value : 999,
            RAM : 4,
            Storage : 64
          },
          {
            name : "Ipad",
            company : "Apple",
            value : 999,
            RAM : 4,
            Storage : 64
          }
        ],
        showModal: false,
        selected : {},


        displayed : [],

        displayedType : "",
        products: [
          {
            name: 'Telefonlar',
            icon: 'fas fa-mobile',
            type : "p"
          },{
            name: 'Laptoplar',
            icon: 'fas fa-laptop',
            type : "l"
          },{
            name: 'Planşetlər',
            icon: 'fas fa-tablet',
            type : "t"
          },
        ]


      }
    },
    methods: {

      activeTab: function(tab) {
        return this.displayedType === tab
      }, 


      TabClicked: function(type) {
        if(type == "p"){
          this.displayed = this.phones;
        }
        else if(type == "t"){
          this.displayed = this.tablets;
        }
        else if(type == "l"){
          this.displayed = this.laptops;
        }
        this.displayedType = type;
      },


      handler: function(index) {
        this.showModal = true;
        this.selected = this.displayed[index];
      },
      
      
    },
    created: function() { 
      this.displayed = this.phones;
      this.displayedType = "p";
    }

  }
</script>

<style>

</style>
