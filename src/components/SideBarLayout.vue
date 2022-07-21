<template>
  <div class="hp-sidebar-main">
    <router-link class="hp-sidebar-router-link" to="/admin/product">
      <div class="hp-sidebar-item">
        <b-icon class="hp-sidebar-item-icon-v1" icon="archive"></b-icon>
        <span class="hp-sidebar-item-text">{{ $t("sidebar.product") }}</span>
        <b-icon class="hp-sidebar-item-icon-v2" icon="chevron-right"></b-icon>
      </div>
    </router-link>
    <router-link class="hp-sidebar-router-link" to="/product">
      <div class="hp-sidebar-item">
        <b-icon class="hp-sidebar-item-icon-v1" icon="card-image"></b-icon>
        <span class="hp-sidebar-item-text">{{ $t("sidebar.banner") }}</span>
        <b-icon class="hp-sidebar-item-icon-v2" icon="chevron-right"></b-icon>
      </div>
    </router-link>
    <router-link class="hp-sidebar-router-link" to="/product">
      <div class="hp-sidebar-item">
        <b-icon class="hp-sidebar-item-icon-v1" icon="cart3"></b-icon>
        <span class="hp-sidebar-item-text"> {{ $t("sidebar.order") }}</span>
        <b-icon class="hp-sidebar-item-icon-v2" icon="chevron-right"></b-icon>
      </div>
    </router-link>
    <router-link class="hp-sidebar-router-link" to="/product">
      <div class="hp-sidebar-item">
        <b-icon class="hp-sidebar-item-icon-v1" icon="person-circle"></b-icon>
        <span class="hp-sidebar-item-text">{{ $t("sidebar.user") }}</span>
        <b-icon class="hp-sidebar-item-icon-v2" icon="chevron-right"></b-icon>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SidebarLayout",
};
</script>

<style>
.hp-sidebar-main {
  left: 0;
  top: 70px;
  position: fixed;
  bottom: 0;
  width: 250px;
  background: white;
  padding: 5px;
}

.hp-sidebar-router-link {
  text-decoration: none;
  color: #000;
  position: relative;
  width: 100%;
}

.hp-sidebar-item:hover {
  background: rgb(207, 207, 207);
}

.hp-sidebar-item {
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  padding: 9px 30px;
  box-sizing: border-box;
  align-items: center;
  font-size: 18px;
}

.hp-sidebar-item-icon-v1 {
  text-align: left;
  width: 45px;
}

.hp-sidebar-item-text {
  width: 100%;
}

.hp-sidebar-item-icon-v2 {
  text-align: right;
  width: 20px;
}
</style>
