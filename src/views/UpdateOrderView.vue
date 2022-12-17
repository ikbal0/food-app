<template>
    <main class="wrapper">
        <h1>Orders</h1>

        <table class="product-table">
          <thead>
            <tr>
              <td><span class="sr-only">Product Image</span></td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td>Status</td>
              <td class="sr-only">Action</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order" v-bind:key="item._id">
              <td>
                <P v-for="a in item.ItemData" v-bind:key="a._id">
                  <i :class="'icofont-4x icofont-'+a.icon"></i>
                </P>
              </td>
              <td>
                <P v-for="a in item.ItemData" v-bind:key="a._id">
                  {{a.product_name}}
                </P>
              </td>
              <td>
                <P v-for="a in item.ItemData" v-bind:key="a._id">
                  ${{a.price}}
                </P>
              </td>
              <td>
                <P v-for="a in item.ItemData" v-bind:key="a._id">
                  {{a.qty}}
                </P>
              </td>
              <td>${{item.total_order}}</td>
              <td>{{item.status}}</td>
                <td>
                    <button @click="updateStatus(item._id)" class="btn btn-dark">Send Item</button>
                </td>
            </tr>
          </tbody>
        </table>
      </main>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      order: undefined
    }
  },
  methods: {
    updateStatus (id) {
      axios.patch(`https://server-test-backend.vercel.app/edit/order/${id}`)
        .then((resp) => {
          console.log(resp)
        })
    }
  },
  mounted () {
    axios.get('https://server-test-backend.vercel.app/view/order')
      .then((resp) => {
        console.log(resp)
        this.order = resp.data.data.ViewOrder
      })
  }
}
</script>
