<template>
    <div class="navbar">
        <b-navbar toggleable="md" type="dark" variant="secondary">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">Game of the Year</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <b-nav-item href="#">Nominations</b-nav-item>
            <b-nav-item href="#" disabled>Vote</b-nav-item>
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

