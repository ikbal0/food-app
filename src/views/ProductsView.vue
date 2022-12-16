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
                    <input type="number" value="0">
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button class="btn btn-light">Add to cart</button>
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
      characters: ['mario', 'luigi', 'Yoshi', 'bowser']
    }
  },
  // mounted () {
  //   axios.get('https://server-test-backend.vercel.app/view')
  //     .then((resp) => {
  //       this.inventory = resp.data.data.products
  //     })
  //   // console.log('mounted')
  // }
  props: ['inventory']
}
</script>
