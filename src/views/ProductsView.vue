<template>
    <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">
          <div v-for="product in inventory" v-bind:key="product.id" class="card">
            <div class="card-title">
              {{ product.name }}
            </div>
            <div class="card-body">
              <i :class="'icofont-10x icofont-'+product.icon"></i>
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>{{ product.type }}</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    ${{ product.price.USD }}
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number" v-model="itemCount[product.id]">
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button @click="addToChart(product.name, product.id)" class="btn btn-light">Add to cart</button>
            </div>
          </div>
        </div>
      </main>
</template>
<script>

// import axios from 'axios'

export default {
  data () {
    return {
      // inventory: undefined,
      characters: ['mario', 'luigi', 'Yoshi', 'bowser'],
      itemCount: []
    }
  },
  // mounted () {
  //   axios.get('https://server-test-backend.vercel.app/view')
  //     .then((resp) => {
  //       this.inventory = resp.data.data.products
  //     })
  //   // console.log('mounted')
  // }
  props: ['inventory'],
  methods: {
    addToChart (name, index) {
      alert('add to chart ' + name + ' ' + this.itemCount[index])
    }
  }
}
</script>
