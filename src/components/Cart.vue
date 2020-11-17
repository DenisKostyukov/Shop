<template>
  <div>
    <div class="product" v-for="product in cart" v-bind:key="product.id">
      <div class="product-image">
        <img v-bind:src="product.src" />
      </div>
      <div>
        <h4>
          <router-link v-bind:to="'/product/' + product.id">
            {{ product.item }}
          </router-link>
        </h4>
        <p><span>Ціна: </span>{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      cart: [],
    };
  },
  mounted: function () {
    this.cart = this.$store.getters.List;
  },
};
</script>
