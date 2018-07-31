<template>
    <div class="navbar">
        <b-navbar toggleable="md" type="dark" variant="secondary">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <router-link to="/">
        <b-navbar-brand href="/">Game of the Year</b-navbar-brand>
        </router-link>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <router-link to="/nominate">
              <b-nav-item href="/nominate">Nominations</b-nav-item>
            </router-link>
            
            <router-link to="/vote">
              <b-nav-item href="/vote">Vote</b-nav-item>
            </router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

          <b-navbar-nav>
            <b-nav-item href="#">Register</b-nav-item>
            <b-nav-item href="#">Login</b-nav-item>
          </b-navbar-nav>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

    </div>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>

<style scoped>

</style>

