<template>
  <div class="products">
    <form class="searchbar">
      <input placeholder="Пошук" v-model="search" />
      <input type="submit" class="btn" />
    </form>
    <p>Товаров в корзине: {{ Count }}</p>
    <router-link v-bind:to="'/cart/'"
      ><button class="btn">Корзина</button></router-link
    >
    <button class="btn" @click="clear()">Очистить корзину</button>
    <div class="product" v-for="item in filteredItems" v-bind:key="item.id">
      <div class="product-image">
        <img v-bind:src="item.src" />
      </div>
      <div>
        <h4 class="product-title">
          <router-link v-bind:to="'/product/' + item.id">
            {{ item.item }}
          </router-link>
        </h4>
        <label>{{ item.price }}</label> <br />
        <button class="btn" @click="addProduct(item)">Купить</button>
      </div>
    </div>
  </div>
</template>
<script>
import products from "../data/products.js";

export default {
  data: function () {
    return {
      items: [],
      search: "",
      searchResult: [],
    };
  },
  mounted: function () {
    this.items = products;
  },
  computed: {
    filteredItems: function () {
      console.log(this);
      if (!this.search) {
        return this.items;
      }
      return this.items.filter((element) => {
        return element.item.toUpperCase().includes(this.search.toUpperCase());
      });
    },
    Count() {
      return this.$store.getters.Count;
    },
  },
  methods: {
    addProduct(item) {
      this.$store.commit("addProduct", item);
      this.$store.commit("incCount");
    },
    clear() {
      this.$store.commit("clear");
    },
  },
};
</script>
