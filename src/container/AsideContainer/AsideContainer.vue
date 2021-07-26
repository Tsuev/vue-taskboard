<template>
  <nav id="sidebar" class="sidebar">
    <div class="sidebar-content js-simplebar" data-simplebar="init">
      <div class="simplebar-wrapper m-0">
        <div class="simplebar-height-auto-observer-wrapper">
          <div class="simplebar-height-auto-observer" />
        </div>
        <div class="simplebar-mask">
          <div class="simplebar-offset" style="right: 0px; bottom: 0px">
            <div
              class="simplebar-content-wrapper"
              style="height: 100%; overflow: hidden scroll"
            >
              <div class="simplebar-content" style="padding: 0px">
                <!-- svelte-ignore a11y-missing-attribute -->
                <Logo />

                <!-- Для того кто сел читать мой код, всё происходит здесь -->
                <ul class="sidebar-nav mt-3">
                  <li v-for="item in nav" :key="item.id" class="sidebar-link">
                    {{item.title}}
                  </li>
                </ul>
                <!-- Для того кто сел читать мой код, всё происходит здесь -->
              </div>
            </div>
          </div>
        </div>
        <div
          class="simplebar-placeholder"
          style="width: auto; height: 1485px"
        />
      </div>
      <div
        class="simplebar-track simplebar-horizontal"
        style="visibility: hidden"
      >
        <div class="simplebar-scrollbar" style="width: 0px; display: none" />
      </div>
      <div
        class="simplebar-track simplebar-vertical"
        style="visibility: visible"
      >
        <div
          class="simplebar-scrollbar"
          style="
            height: 269px;
            transform: translate3d(0px, 0px, 0px);
            display: block;
          "
        />
      </div>
    </div>
  </nav>
</template>
<style scoped>
  .sidebar-link {
    font-size: 1rem;
  }
</style>
<script>
import Logo from '@/components/Logo/Logo.vue'
export default {
  name: 'Aside',
  components: {
    Logo
  },
  data() {
    return {
      nav: [
        {
          id: 1,
          title: 'Проекты',
          link: '',
        },
        {
          id: 2,
          title: 'Команды',
          link: '',
        },
        {
          id: 3,
          title: '',
          link: '',
        },
        {
          id: 4,
          title: '',
          link: '',
        },
      ]
    }
  }
};
</script>

<style>
  .align-middle, .sidebar-header{
    font-size: 16px !important;
  }

  .sidebar-link{
    padding: .300rem 1.625rem !important;
  }
</style>