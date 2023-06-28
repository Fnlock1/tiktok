<template>
  <keep-alive >
    <router-view></router-view>
  </keep-alive>
  <Tabbar></Tabbar>
</template>

<script setup lang="ts">
import {defineComponent} from 'vue';

import Tabbar from "components/tabbar.vue";
</script>
