<template>
  <div id="sidebar" class="sidebar"
        :class="{ isOpen: isOpen }">
     <div class="sidebar-opener"
          @click="toggle">{{openerText}}</div>
     <ul class="sidebar-menu">
       <li class="sidebar-menu-item">
         <img class="zap-emoji" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/19332/zap-emoji.svg" alt="Zap Emoji" />
       </li>
       <li class="sidebar-menu-item"
         v-for="item in menu" :key="item.index">{{item}}</li>
       <li class="sidebar-menu-item--small"
         v-for="item in smallMenu" :key="item.index">{{item}}</li>
     </ul>
   </div>
</template>

<script type="text/javascript">
export default {
  data: () => ({
    openerText: 'Close',
    isOpen: false,
    menu: [ 'Home', 'Work', 'Contact' ],
    smallMenu: [ 'Tips', 'Resources', 'Shenanigans' ]
  }),
  methods: {
    open () {
      this.openerText = 'Open'
      this.isOpen = true
    },
    close () {
      this.openerText = 'Close'
      this.isOpen = false
    },
    toggle () {
      if (this.isOpen) {
        this.close()
      } else {
        this.open()
      }
    }
  }
}
</script>

<style scoped>
/* main css, body, etc */
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #ffff;
  background-color: #2c3e50;
  -webkit-font-smoothing: antialiased;
}

strong {
  font-weight: 600;
}

.info {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateX(50%);
  text-align: center;

}

.title {
  font-size: 24px;
  font-weight: 600;
}

.description {
  margin-top: 20px;
}

/* responsive grid */

* {
    box-sizing: border-box;
}

.container {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
}

.col-1 { width: 8.33%; }
.col-2 { width: 16.66%; }
.col-3 { width: 25%; }
.col-4 { width: 33.33%; }
.col-5 { width: 41.66%; }
.col-6 { width: 50%; }
.col-7 { width: 58.33%; }
.col-8 { width: 66.66%; }
.col-9 { width: 75%; }
.col-10 { width: 83.33%; }
.col-11 { width: 91.66%; }
.col-12 { width: 100%; }

[class*="col-"] {
    float: left;
    padding: 15px;
    background: #e4e4e4;
}

.row {
    margin-bottom: 25px;
}

.row::after {
    content: "";
    clear: both;
    display: block;
}

/*
Sidebar styles...
 */
.sidebar {
  position: absolute;
  left: -27%;
  width: 310px;
  height: 100vh;
  padding: 30px;
  background-color: #34495e;
  transform: translateX(100%);
  transition: transform 0.6s ease(out-cubic);
}
.sidebar.isOpen {
  transform: translateX(0);
}

.sidebar-opener {
  position: relative;
  top: 20px;
  right: -200%;
  margin-right: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgb(90, 9, 9);
  cursor: pointer;
}
.sidebar-opener:hover {
  text-decoration: underline;
}

.sidebar-menu {
  font-weight: 600;
  color: #fff;
}

.sidebar-menu-item,
.sidebar-menu-item--small {
  cursor: pointer;
}
.sidebar-menu-item:hover,
.sidebar-menu-item--small:hover {
  text-decoration: underline;
}
.sidebar-menu-item + .sidebar-menu-item,
.sidebar-menu-item--small + .sidebar-menu-item, .sidebar-menu-item +
.sidebar-menu-item--small,
.sidebar-menu-item--small +
.sidebar-menu-item--small {
  margin-top: 20px;
}

.sidebar-menu-item {
  font-size: 36px;
}
.sidebar-menu-item + .sidebar-menu-item--small {
  margin-top: 30px;
}

.sidebar-menu-item--small {
  font-size: 18px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #ecf0f1;
}

/* The famed Zap agency logo (TM) */
.zap-emoji {
  height: 120px;
}

</style>
