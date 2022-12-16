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
  <div class="home">
    <div class="splash-container">
        <div class="splash">
          <h1>Splendid Food</h1>
        </div>
      </div>
      <main class="wrapper">
        <h2>Recommended</h2>
        <div class="recommended">
      <div class="card">
        <div class="card-title">
          Carrots
        </div>
        <div class="card-body">
          <i class="icofont-10x icofont-carrot"></i>
          <form>
            <div class="row">
              <div class="cell">
                <label>Type:</label>
              </div>
              <div class="cell">
                <em>Vegetable</em>
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Price:</label>
              </div>
              <div class="cell">
                $4.82
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Quantity:</label>
              </div>
              <div class="cell">
                <input type="number" v-model.number="inventory.carrots">
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <button @click="addToCart('carrots')" class="btn btn-light">
            Add to cart
          </button>
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          Pineapples
        </div>
        <div class="card-body">
          <i class="icofont-10x icofont-pineapple"></i>
          <form>
            <div class="row">
              <div class="cell">
                <label>Type:</label>
              </div>
              <div class="cell">
                <em>Fruit</em>
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Price:</label>
              </div>
              <div class="cell">
                $1.62
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Quantity:</label>
              </div>
              <div class="cell">
                <input type="number" v-model="inventory.pineapples">
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <button class="btn btn-light">Add to cart</button>
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          Cherries
        </div>
        <div class="card-body">
          <i class="icofont-10x icofont-cherry"></i>
          <form>
            <div class="row">
              <div class="cell">
                <label>Type:</label>
              </div>
              <div class="cell">
                <em>Fruit</em>
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Price:</label>
              </div>
              <div class="cell">
                $1.04
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Quantity:</label>
              </div>
              <div class="cell">
                <input type="number" v-model="inventory.cherries">
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
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios'

export default {
  name: 'HomeView',
  data () {
    return {
      inventory: {
        carrots: undefined,
        cherries: undefined,
        pineapples: undefined
      },
      characters: ['mario', 'luigi', 'Yoshi', 'bowser']
    }
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
