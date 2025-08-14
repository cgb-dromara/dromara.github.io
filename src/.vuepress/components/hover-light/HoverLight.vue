<template>
  <div
    class="hover-light-container"
    @mouseover="handleMouseOver"
    @mousemove="handleMouseMove($event)"
    @mouseout="handleMouseOut"
    :ref="setContainerRef"
  >
    <slot></slot>
    <div class="hover-light" :style="lightStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from "vue";

interface LightState {
  display: string;
  left: string;
  top: string;
}

const props = defineProps({
  lightColor: {
    type: String,
    default: "#0a59ae",
  },
  lightWidth: {
    type: String,
    default: "200px",
  },
  lightHeight: {
    type: String,
    default: "200px",
  },
  lightBlur: {
    type: String,
    default: "60px",
  },
  lightOpacity: {
    type: Number,
    default: 0.5,
  },
});

const containerRef = ref<HTMLElement | null>(null);
const light = ref<LightState>({
  display: "none",
  left: "0px",
  top: "0px",
});

const setContainerRef = (el: HTMLElement | null) => {
  if (el) {
    containerRef.value = el;
  }
};

const handleMouseOver = () => {
  light.value.display = "block";
};

const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value) return;

  const containerRect = containerRef.value.getBoundingClientRect();
  const lightElement = containerRef.value.querySelector(
    ".hover-light",
  ) as HTMLElement;

  if (!lightElement) return;

  const x = e.clientX - containerRect.left - lightElement.offsetWidth / 2;
  const y = e.clientY - containerRect.top - lightElement.offsetHeight / 2;

  light.value.left = `${x}px`;
  light.value.top = `${y}px`;
};

const handleMouseOut = () => {
  light.value.display = "none";
};

const lightStyle = computed(() => ({
  display: light.value.display,
  left: light.value.left,
  top: light.value.top,
  backgroundColor: props.lightColor,
  width: props.lightWidth,
  height: props.lightHeight,
  filter: `blur(${props.lightBlur})`,
  opacity: props.lightOpacity,
}));

// Optional: Clean up on unmount if necessary, though not strictly needed for this component
onUnmounted(() => {
  containerRef.value = null;
});
</script>

<style scoped>
.hover-light-container {
  position: relative;
  overflow: hidden; /* Ensures the light stays within the container */
}

.hover-light {
  position: absolute;
  border-radius: 50%;
  pointer-events: none; /* Ensures the light doesn't interfere with mouse events on the content */
}
</style>
