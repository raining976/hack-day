<template>
  <HomeTopView></HomeTopView>
  <ContentsView></ContentsView>
  <SponsorView></SponsorView>
  <Particle></Particle>
</template>

<script setup>
import { paintedEggShell } from './util/isStudio';
import { onMounted } from 'vue';

onMounted(()=>{
  paintedEggShell();
})

</script>

<style lang="scss">
* {
  color: #fff;

}

body {
  background-color: black;
}
</style>
