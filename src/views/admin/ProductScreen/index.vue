<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="hp-admin-product-main">
    <h1>{{ $t("product.product") }}</h1>
    <hr />
    <div>
      <b-form-input></b-form-input>
      <b-form-input></b-form-input>
      <b-form-input></b-form-input>
      <b-form-input></b-form-input>
    </div>
    <div>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
    </div>
    <b-table striped hover></b-table>
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
