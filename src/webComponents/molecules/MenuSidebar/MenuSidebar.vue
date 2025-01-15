<template>
  <div
    class="pt-[25px] relative z-10 h-full overflow-hidden transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg"
    :class="{ 'w-[310px] mr-2.5': isExpanded }"
    @mouseenter="expandMenu"
    @mouseleave="collapseMenu"
  >
    <div
      class="px-2.5 mb-2 flex items-center"
      v-for="(item, index) in options"
      :key="index"
    >
      <div
        v-if="item.subMenu.length == 0"
        class="flex items-center cursor-pointer h-12 rounded-lg w-full"
        :class="{
          'bg-gray-100 ': index === indexMenu,
          'justify-center': !isExpanded,
          'pl-[1rem] space-x-2': isExpanded,
        }"
        @click="defineRedirect($emit, index, item, false)"
      >
        <img
          v-if="item.svg"
          width="24"
          height="24"
          :src="item.icon"
          alt="icons"
        />

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-6 h-6 opacity-45"
        >
          <path :d="item.icon" />
        </svg>

        <span
          class="opacity-0 max-w-0 overflow-hidden whitespace-nowrap"
          :class="{
            'opacity-100 max-w-[300px]  transition-all duration-300':
              isExpanded,
          }"
        >
          {{ item.text }}
        </span>
      </div>

      <div v-else class="min-h-12 flex flex-col cursor-pointer w-full">
        <div
          class="flex items-center cursor-pointer h-12 rounded-lg"
          :class="{
            'bg-gray-100': index === indexMenu,
            'justify-center': !isExpanded,
            'pl-[1rem] space-x-2': isExpanded,
          }"
        >
          <img
            v-if="item.svg"
            width="24"
            height="24"
            :src="item.icon"
            alt="facebook-new"
          />

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path :d="item.icon" />
          </svg>

          <div
            @click="toggleDropdown(index)"
            class="opacity-0 max-w-0 overflow-hidden whitespace-nowrap flex items-center"
            :class="{
              'opacity-100 max-w-[300px] transition-all duration-300':
                isExpanded,
              'ml-2': isExpanded,
            }"
          >
            <span>{{ item.text }}</span>

            <img
              width="20"
              height="20"
              :class="{ 'ml-2': isExpanded }"
              :src="
                expanded_dropDown
                  ? 'https://img.icons8.com/material-rounded/24/chevron-up.png'
                  : 'https://img.icons8.com/material-rounded/24/chevron-down.png'
              "
              alt="facebook-new"
            />
          </div>
        </div>

        <div
          class="rounded-lg pt-4 overflow-hidden transition-all duration-300 ease-in-out max-h-0 w-full"
          :class="{ 'max-h-[300px]': expanded_dropDown }"
          v-if="isExpanded && expanded_dropDown"
        >
          <div
            class="h-12 flex flex-col justify-center w-full rounded-lg pl-12 hover:bg-gray-100"
            v-for="(submenu, index) in item.subMenu"
            :class="{ 'w-[310px] bg-gray-100': index == indexDropdown }"
            @click="defineRedirect($emit, index, submenu, true)"
            :key="index"
          >
            <transition name="fade" appear>
              <p class="mt-1">
                {{ submenu.text }}
              </p>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType, watch } from "vue";
import { type IOptionsMenu } from "../../../utils/interface";
import { useMenuSidebar } from "./composable";

const {
  isExpanded,
  indexMenu,
  expanded_dropDown,
  indexDropdown,
  expandMenu,
  collapseMenu,
  defineRedirect,
  backToHome,
  toggleDropdown,
} = useMenuSidebar();

const props = defineProps({
  options: { type: Array as PropType<IOptionsMenu[]>, required: true },
  isHome: { type: Boolean, required: true, default: false },
});

watch(props, () => {
  if (props.isHome) {
    backToHome();
  }
});
</script>
