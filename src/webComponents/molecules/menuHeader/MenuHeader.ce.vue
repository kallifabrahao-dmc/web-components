<template>
  <div
    class="flex items-center justify-between bg-white px-5 h-full rounded-lg"
  >
    <div class="flex items-center space-x-2">
      <img
        src="../../../assets/logo-comerc.png"
        alt="logo da empresa Comerc"
        width="94px"
        class="mr-5"
      />

      <button @click="backToHome($emit)">Página Inicial</button>

      <button
        data-testid="solutions-for-you"
        class="flex items-center space-x-1 text-[#475569]"
        @click="toggleMenu"
        @blur="openMenuSolutionForYou ? handleBlur() : null"
      >
        <p class="mobile">Soluções para você</p>

        <span class="mobile">
          <i class="pi pi-angle-down ml-1"></i>
        </span>

        <span class="desktop">
          <i class="pi pi-bars ml-1"></i>
        </span>
      </button>
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useMenuHeader } from "./composable";

const { backToHome, toggleMenu, handleBlur, openMenuSolutionForYou } =
  useMenuHeader();
</script>

<style scoped></style>
