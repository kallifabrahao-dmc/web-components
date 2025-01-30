import { ref, type EmitFn } from "vue";

export const useMenuHeader = () => {
  const openMenuSolutionForYou = ref(false);

  function backToHome(emit: EmitFn) {
    emit("backToHome");
  }

  const toggleMenu = () => {
    openMenuSolutionForYou.value = !openMenuSolutionForYou.value;
  };

  const handleBlur = () => {
    setTimeout(() => {
      openMenuSolutionForYou.value = false;
    }, 200);
  };

  return {
    openMenuSolutionForYou,
    toggleMenu,
    handleBlur,
    backToHome,
  };
};
