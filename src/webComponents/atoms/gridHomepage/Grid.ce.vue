<template>
  <div
    class="relative grid grid-cols-[6%_1fr] grid-rows-[3.5rem,1fr] gap-2 bg-[#f8f8f8] px-2"
  >
    <div class="col-span-2 shadow-md rounded-lg">
      <slot name="header"></slot>
    </div>

    <slot name="sidebar"></slot>

    <div class="grid grid-rows-[1fr,auto] gap-2">
      <slot name="content"></slot>

      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
