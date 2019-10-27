<template>
  <nav class="flex items-center justify-between flex-wrap bg-indigo-600 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
      <router-link 
        to="/"
        class="flex font-semibold text-xl tracking-tight"
      >
        Modular Scale <span class="pl-1 text-indigo-200 text-xs self-start font-normal">Beta</span>
      </router-link>
    </div>
    <div class="block md:hidden">
      <button 
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-indigo-400 hover:text-white hover:border-white"
         v-on:click='navOpen = !navOpen'
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div 
      class="w-full md:block flex-grow md:flex md:items-center md:w-auto"
      v-bind:class="{ 'block': navOpen, 'hidden': !navOpen }"
    >
      <div class="text-base md:flex-grow">
        <router-link 
          to="/"
          class="block mt-4 md:inline-block md:mt-0 text-indigo-200 hover:text-white mr-4"
        >
          Home
        </router-link>
        <router-link 
          to="/about"
          class="block mt-4 md:inline-block md:mt-0 text-indigo-200 hover:text-white mr-4"
        >
          About
        </router-link>
      </div>
      <div>
        <!-- <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Share</a> -->
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    data: () => ({
      navOpen: false,
    }),
    methods:{
      toggleNav: function(){
        this.navOpen = !this.navOpen
      }
    }
  }
</script>
