// mixins/toggleBorderMixin.js
import { ref } from 'vue'

export default function toggleBorderMixin(initialLength) {
  const hasBorder = ref(new Array(initialLength).fill(false))

  function toggleBorder(index) {
    hasBorder.value[index] = !hasBorder.value[index]
  }

  return {
    hasBorder,
    toggleBorder
  }
}
