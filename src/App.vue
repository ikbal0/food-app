<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <div @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
  <button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>
  <router-view :inventory="inventory"/>
  <Sidebar
  v-if="showSidebar"
  :toggle="toggleSidebar"
  :cart="cart"
  :inventory="inventory"
  :remove="removeItem"
  />
  <!-- <router-view/> -->
</template>

<script>
import axios from 'axios'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  data () {
    return {
      totalQuantity: 0,
      showSidebar: false,
      inventory: undefined,
      cart: {},
      count: 0
    }
  },
  methods: {
    // addToCart (name, index) {
    //   if (this.cart[name]) this.cart.name = 0
    //   this.cart[name] += this.inventory[index].quantity
    //   this.inventory[index].quantity = 0
    // },
    toggleSidebar () {
      // this.count = 4
      this.showSidebar = !this.showSidebar
      // console.log(this.showSidebar)
    }
    // removeItem (name) {
    //   delete this.cart[name]
    // }
  },
  mounted () {
    axios.get('https://server-test-backend.vercel.app/view')
      .then((resp) => {
        this.inventory = resp.data.data.products
      })
    // console.log('mounted')
  }
}
</script>
