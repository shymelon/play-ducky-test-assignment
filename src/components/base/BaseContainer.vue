<script setup lang="ts"></script>

<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style module lang="stylus">

.container
  max-width 360px
  margin-left auto
  margin-right auto
  padding-right 7px
  padding-left 7px
  background: radial-gradient(50% 50% at 50% 50%, #41AEE7 0%, #054BA6 100%);
  text-align center
</style>
