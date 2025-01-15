<template>
  <div
    class="flex justify-between items-center rounded-lg bg-white p-4 shadow-md h-[4.5rem]"
  >
    <img :src="avatar" alt="logo da empresa Comerc" width="50px" />
    <p>© {{ new Date().getFullYear() }} Comerc. Todos direitos reservados.</p>
  </div>
</template>

<script setup lang="ts">
import avatar from "../../../assets/avatar-comerc.png";
</script>
