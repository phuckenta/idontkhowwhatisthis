<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="hp-admin-product-main">
    <h1>{{ $t("product.product") }}</h1>
    <hr>
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductAdminLayout",
  layout: "admin",
};
</script>

<style>
.hp-admin-product-main {
  width: 100%;
  background: white;
}
</style>
