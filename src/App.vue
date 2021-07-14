<template>
  <div id="app">
    <div class="wrapper">
      <AsideContainer/>
        <div class="main">
            <HeaderContainer/>
            <main class="content">
              <router-view/>
            </main>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderContainer from '@/container/HeaderContainer/HeaderContainer.vue'
import AsideContainer from '@/container/AsideContainer/AsideContainer.vue'

export default {
  name: 'App',
  components: {
    HeaderContainer,
    AsideContainer
  }
}
</script>

<style>

</style>
