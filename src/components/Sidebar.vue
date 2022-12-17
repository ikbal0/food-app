<template>
    <aside class="cart-container">
        <div class="cart">
            <h1 class="cart-title spread">
            <span>
                Cart
                <i class="icofont-cart-alt icofont-1x"></i>
            </span>
            <button @click="toggle" class="cart-close">&times;</button>
            </h1>

            <div class="cart-body">
            <table class="cart-table">
                <thead>
                <tr>
                    <th><span class="sr-only">Product Image</span></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th><span class="sr-only">Actions</span></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in cart" v-bind:key="product._id">
                    <td><i :class="'icofont-3x icofont-'+product.icon"></i></td>
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td class="center">{{product.qty}}</td>
                    <td>{{product.total}}</td>
                    <td class="center">
                    <button class="btn btn-light cart-remove">
                        &times;
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <p v-if="cart == undefined" class="center"><em>No items in cart</em></p>
            <div class="spread mt-2">
                <span><strong>Total:</strong> ${{countTotal}}</span>
                <button @click="checkout" class="btn btn-light">Checkout</button>
            </div>
            </div>
        </div>
    </aside>
</template>
<script>
import axios from 'axios'

export default {
  name: 'SideBar',
  props: ['toggle', 'inventory', 'remove'],
  data () {
    return {
      cart: undefined,
      totalOnCart: 0
    }
  },
  computed: {
    countTotal () {
      if (this.cart !== undefined) {
        const sum = this.cart.reduce((accumulator, object) => {
          return accumulator + object.total
        }, 0)
        return sum.toFixed(2)
      } else {
        return 0
      }
    }
  },
  methods: {
    getPrice (name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.price.USD
    },
    calculateTotal () {
      const total = Object.entries(this.cart).reduce((acc, curr, index) => {
        return acc + (curr[1] * this.getPrice(curr[0]))
      }, 0)
      return total.toFixed(2)
    },
    checkout () {
      const sum = this.cart.reduce((accumulator, object) => {
        return accumulator + object.total
      }, 0)
      axios.post('https://server-test-backend.vercel.app/create/order', {
        ItemData: this.cart,
        total_order: sum.toFixed(2),
        status: 'pending'
      })
        .then((resp) => {
          console.log(resp)
        })
    }
  },
  mounted () {
    axios.get('https://server-test-backend.vercel.app/view/cart')
      .then((resp) => {
        this.cart = resp.data.data.ViewCarts
      })
  }
}
</script>
