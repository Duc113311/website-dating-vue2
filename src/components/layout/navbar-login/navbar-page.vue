<template>
  <header id="navbar">
    <nav class="navbar-container container">
      <a href="/" class="home-link">
        <div class="navbar-logo">
          <img
            class="w-10"
            src="@/assets/icon/ic_icon_app.svg"
            alt=""
            srcset=""
          />
        </div>
        <h2 class="text-2xl font-bold">Dating</h2>
      </a>
      <button
        @click="onClickAction()"
        type="button"
        id="navbar-toggle"
        aria-controls="navbar-menu"
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div id="navbar-menu" aria-labelledby="navbar-toggle">
        <ul class="navbar-links">
          <li class="navbar-item">
            <a class="navbar-link" href="/about">About</a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="/blog">Blog</a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="/careers">Careers</a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navbar-page",

  methods: {
    /**
     * Hàm thay đổi navbar
     * @param {*} isNavbarExpanded
     * @param {*} navbarToggle
     */
    toggleNavbarVisibility(isNavbarExpanded, navbarToggle) {
      isNavbarExpanded = !isNavbarExpanded;
      navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
    },

    /**
     * Hàm xử lý click show navbar dạng mobile
     */
    onClickAction() {
      const navbarToggle = document.querySelector("#navbar-toggle");
      const navbarMenu = document.querySelector("#navbar-menu");
      const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
      let isNavbarExpanded =
        navbarToggle.getAttribute("aria-expanded") === "true";
      this.toggleNavbarVisibility(isNavbarExpanded, navbarToggle);
      return navbarLinksContainer;
    },
  },
};
</script>

<style lang="css">
:root {
  --navbar-bg-color: hsl(0deg 8% 5% / 65%);
  --navbar-text-color: white;
  --navbar-text-color-focus: white;
  --navbar-bg-contrast: rgb(67 54 54 / 64%);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}
.container {
  max-width: 1000px;
  padding-left: 1.4rem;
  padding-right: 1.4rem;
  margin-left: auto;
  margin-right: auto;
}
#navbar {
  --navbar-height: 64px;
  position: fixed;
  height: var(--navbar-height);
  background-color: var(--navbar-bg-color);
  left: 0;
  right: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}
.navbar-item {
  margin: 0.4em;
  width: 100%;
}

.home-link,
.navbar-link {
  color: var(--navbar-text-color);
  text-decoration: none;
  display: flex;
  font-weight: 400;
  align-items: center;
}

.navbar-link {
  justify-content: center;
  width: 100%;
  padding: 0.4em 0.8em;
  border-radius: 5px;
}

.navbar-logo {
  border-radius: 50%;
  width: 40px;
  height: 30px;
  margin-right: 0.5em;
}
#navbar-toggle {
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.icon-bar {
  display: block;
  width: 25px;
  height: 4px;
  margin: 2px;
  background-color: var(--navbar-text-color);
}

#navbar-toggle[aria-expanded="true"] .icon-bar:is(:first-child, :last-child) {
  position: absolute;
  margin: 0;
  width: 30px;
}
#navbar-toggle[aria-expanded="true"] .icon-bar:first-child {
  transform: rotate(45deg);
}
#navbar-toggle[aria-expanded="true"] .icon-bar:nth-child(2) {
  opacity: 0;
}
#navbar-toggle[aria-expanded="true"] .icon-bar:last-child {
  transform: rotate(-45deg);
}
#navbar-menu {
  position: fixed;
  top: var(--navbar-height);
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  left: 0;
  right: 0;
}
#navbar-toggle[aria-expanded="true"] + #navbar-menu {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
  visibility: visible;
}
.navbar-links {
  list-style: none;
  position: absolute;
  background-color: var(--navbar-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  right: 0;
  margin: 1.4rem;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

#navbar-toggle[aria-expanded="true"] + #navbar-menu .navbar-links {
  padding: 1em;
}
@media screen and (min-width: 700px) {
  #navbar-toggle,
  #navbar-toggle[aria-expanded="true"] {
    display: none;
  }

  #navbar-menu,
  #navbar-toggle[aria-expanded="true"] #navbar-menu {
    visibility: visible;
    opacity: 1;
    position: static;
    display: block;
    height: 100%;
  }

  .navbar-links,
  #navbar-toggle[aria-expanded="true"] #navbar-menu .navbar-links {
    margin: 0;
    padding: 0;
    box-shadow: none;
    position: static;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
}
</style>
