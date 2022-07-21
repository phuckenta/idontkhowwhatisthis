<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="hp-admin-main">
    <HederLayout />
    <SidebarLayout />
    <div class="hp-admin-content">
      <slot/>
    </div>
  </div>
</template>

<script>
import HederLayout from "../components/HearderLayout.vue";
import SidebarLayout from "../components/SideBarLayout.vue";
export default {
  name : 'AdminLayout',
  components: { HederLayout, SidebarLayout },
};
</script>

<style scoped>
.hp-admin-main {
  padding-top: 70px;
}

.hp-admin-content{
  margin-left: 280px;
}
</style>
