<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <!-- <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link> -->
      <router-link to="/past-orders" class="top-bar-link">
        <span>Orders</span>
      </router-link>
      <router-link to="/update-order-status" class="top-bar-link">
        <span>(On Admin) Update Status Order</span>
      </router-link>
    </nav>
    <div @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
  <router-view
  :inventory="inventory"
  :addToChart="addToChart"
  :itemCount="itemCount"
  />
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
      itemCount: []
    }
  },
  methods: {
    addToChart (name, index) {
      alert('add to chart ' + name + ' ' + this.itemCount[index])
    },
    toggleSidebar () {
      // this.count = 4
      this.showSidebar = !this.showSidebar
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
  }
}
</script>
