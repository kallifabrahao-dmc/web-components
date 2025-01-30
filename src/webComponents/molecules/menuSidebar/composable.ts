import type { IOptionsMenu, ISubMenu } from "./interfaces";
import { ref, type EmitFn } from "vue";

export const useMenuSidebar = () => {
  const isExpanded = ref(false);
  const indexMenu = ref(0);
  const indexDropdown = ref(-1);
  const expanded_dropDown = ref(false);

  function expandMenu() {
    isExpanded.value = true;
  }

  function collapseMenu() {
    isExpanded.value = false;
  }

  function defineRedirect(
    emit: EmitFn,
    index: number,
    item: IOptionsMenu | ISubMenu,
    isSubMenu: boolean
  ) {
    if (isSubMenu) {
      indexDropdown.value = index;
      emit("redirect", item);
      return;
    }

    indexMenu.value = index;
    indexDropdown.value = -1;
    expanded_dropDown.value = false;
    emit("redirect", item);
  }

  function backToHome() {
    indexMenu.value = 0;
  }

  function toggleDropdown(index: number) {
    expanded_dropDown.value = !expanded_dropDown.value;

    indexMenu.value = index;
  }

  return {
    isExpanded,
    indexMenu,
    expanded_dropDown,
    indexDropdown,
    expandMenu,
    collapseMenu,
    defineRedirect,
    backToHome,
    toggleDropdown,
  };
};
