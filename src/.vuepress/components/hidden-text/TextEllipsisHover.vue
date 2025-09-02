<template>
  <div class="text-ellipsis-container">
    <div
      ref="textRef"
      class="text-content"
      :class="{ 'text-ellipsis': isEllipsis }"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      {{ text }}
    </div>

    <Teleport to="body">
      <div
        v-if="showTooltip"
        ref="tooltipRef"
        class="tooltip"
        :style="tooltipStyle"
      >
        {{ text }}
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  onUnmounted,
  nextTick,
  computed,
  watch,
  type CSSProperties,
} from "vue";

interface Props {
  text: string;
  maxLines?: number;
}

const props = withDefaults(defineProps<Props>(), {
  maxLines: 3,
});

const textRef = ref<HTMLElement>();
const tooltipRef = ref<HTMLElement>();
const isEllipsis = ref(false);
const showTooltip = ref(false);
const mousePosition = ref({ x: 0, y: 0 });

const checkTextOverflow = async () => {
  if (!textRef.value) return;

  await nextTick();

  const element = textRef.value;
  const lineHeight = parseInt(getComputedStyle(element).lineHeight);
  const maxHeight = lineHeight * props.maxLines;

  element.classList.remove("text-ellipsis");
  const actualHeight = element.scrollHeight;

  if (actualHeight > maxHeight) {
    isEllipsis.value = true;
    element.classList.add("text-ellipsis");
  } else {
    isEllipsis.value = false;
  }
};

const handleMouseEnter = (event: MouseEvent) => {
  if (!isEllipsis.value) return;

  mousePosition.value = { x: event.clientX, y: event.clientY };
  showTooltip.value = true;
};

const handleMouseLeave = () => {
  showTooltip.value = false;
};

const tooltipStyle = computed((): CSSProperties => {
  const { x, y } = mousePosition.value;
  return {
    position: "fixed",
    left: `${x + 10}px`,
    top: `${y + 10}px`,
    zIndex: "9999",
    transform: showTooltip.value ? "scale(1)" : "scale(0)",
    transformOrigin: "top left",
  };
});

onMounted(() => {
  checkTextOverflow();

  window.addEventListener("resize", checkTextOverflow);
});

watch(
  () => props.text,
  () => {
    nextTick(() => {
      checkTextOverflow();
    });
  },
);

onUnmounted(() => {
  window.removeEventListener("resize", checkTextOverflow);
});
</script>

<style scoped>
.text-ellipsis-container {
  position: relative;
  width: 100%;
}

.text-content {
  line-height: 1.5;
  word-wrap: break-word;
  word-break: break-all;
  cursor: default;
}

.text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: v-bind(maxLines);
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;
}

.tooltip {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.4;
  max-width: 300px;
  word-wrap: break-word;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  pointer-events: none;
}
</style>
