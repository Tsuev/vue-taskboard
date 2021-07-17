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
  /* .btn-primary {
    animation: btn-glitch 1s infinite;
    transition: 1s ease-in !important;
  }
  @keyframes btn-glitch {
    0% {
      background: linear-gradient(90deg, rgba(189,63,151,1) 0%, rgba(211,80,165,1) 11%, rgba(76,56,133,1) 19%);
    }
    10% {
      background: linear-gradient(90deg, rgba(189,63,151,1) 13%, rgba(211,80,165,1) 37%, rgba(76,56,133,1) 58%);
    }
    25% {
      background: linear-gradient(90deg, rgba(189,63,151,1) 18%, rgba(211,80,165,1) 50%, rgba(76,56,133,1) 77%);
    }
    40% {
      background: linear-gradient(90deg, rgba(189,63,151,1) 69%, rgba(211,80,165,1) 94%, rgba(76,56,133,1) 100%);
    }
    50% {
      background: linear-gradient(90deg, rgba(189,63,151,1) 40%, rgba(211,80,165,1) 66%, rgba(76,56,133,1) 87%);       
    }
    60% {
      background: linear-gradient(90deg, rgba(189,63,151,1) 69%, rgba(211,80,165,1) 94%, rgba(76,56,133,1) 100%);
    }
    75% {
      background: linear-gradient(90deg, rgba(189,63,151,1) 18%, rgba(211,80,165,1) 50%, rgba(76,56,133,1) 77%);
    }
    90% {
      background: linear-gradient(90deg, rgba(189,63,151,1) 13%, rgba(211,80,165,1) 37%, rgba(76,56,133,1) 58%);
    }
    100% {
      background: linear-gradient(90deg, rgba(189,63,151,1) 0%, rgba(211,80,165,1) 11%, rgba(76,56,133,1) 19%);
    }
  } */
</style>
