<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>

  <div class="splash-container">
    <div class="splash">
      <h1>Splendid Food</h1>
    </div>
  </div>

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
          <button @click="addToChart(product.name, product.id, product.icon, product.price.USD, product.type)" class="btn btn-light">Add to cart</button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      characters: ['mario', 'luigi', 'Yoshi', 'bowser'],
      itemCount: []
    }
  },
  props: ['inventory'],
  methods: {
    addToChart (name, index, icon, price, type) {
      // alert('add to chart ' + name + ' ' + this.itemCount[index])
      const total = this.itemCount[index] * price
      axios.post('https://server-test-backend.vercel.app/create/cart', {
        name,
        icon,
        price,
        type,
        qty: this.itemCount[index],
        total: total
      })
        .then((resp) => {
          console.log(resp)
        })
    }
  }
}
</script>
