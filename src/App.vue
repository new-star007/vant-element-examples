<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    if (window.parent !== window.self) {
      window.addEventListener('message', this.handleMessage)
    }
  },
  watch: {
    $route(to) {
      if (window.parent === window.self) return
      window.parent.postMessage({ type: 'navigate', path: to.fullPath }, '*')
    }
  },
  methods: {
    handleMessage(ev) {
      if (ev.data?.type !== 'navigate') return
      const path = ev.data.path
      if (path && path !== this.$route.fullPath) {
        this.$router.push(path).catch(function () {})
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.handleMessage)
  }
}
</script>

<style>
* { box-sizing: border-box; }
body {
  margin: 0;
  background: #f5f6fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='14' cy='14' r='12' fill='rgba(0,122,255,0.3)' stroke='%23007aff' stroke-width='2'/%3E%3C/svg%3E") 14 14, auto;
}
a, button, [role="button"], input, select, textarea {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='14' cy='14' r='12' fill='rgba(0,122,255,0.3)' stroke='%23007aff' stroke-width='2'/%3E%3C/svg%3E") 14 14, pointer;
}
#app { max-width: 800px; margin: 0 auto; min-height: 100vh; background: #f7f8fa; }
.el-tag { margin-bottom: 4px; }
</style>
