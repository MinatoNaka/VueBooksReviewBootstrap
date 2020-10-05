<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="c-stroke">
      <b-navbar-brand>Reading Recorder</b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/search">Search</b-nav-item>
          <b-nav-item-dropdown text="Support" right>
            <b-dropdown-item href="https://wings.msn.to/" target="help"
              >Author</b-dropdown-item
            >
            <b-dropdown-item href="https://www.sbcr.jp/" target="help"
              >Publisher</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
