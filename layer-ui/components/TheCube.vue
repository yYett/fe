<template>
  <div class="the-cube">
    <div :class="`cube cube--${face || 'front'}`">
      <div v-for="(item, i) in faces" :key="i" :class="`face face--${item}`">
        <slot :name="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  face?: 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom';
}>();

const faces = ['front', 'right', 'back', 'left', 'top', 'bottom'];
</script>

<style scoped lang="scss">
.the-cube {
  --cube--w: 50rem;
  --cube--h: 50rem;
  --cube-depth: var(--cube--w);
  --cube-z: -25rem;
  --spacing: 2rem;

  width: var(--cube--w);
  height: var(--cube--h);
  perspective: 60rem;
}

.cube {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in;

  $faces: (
    front: 0deg,
    right: -90deg,
    back: -180deg,
    left: 90deg,
    top: -90deg,
    bottom: 90deg,
  );

  @each $face, $rotation in $faces {
    &--#{$face} {
      transform: translateZ(var(--cube-z)) rotateY(#{$rotation});
    }
  }
}

.face {
  border: 1px solid red;

  position: absolute;
  width: var(--cube--w);
  height: var(--cube--h);
  padding: var(--spacing);

  &--front {
    transform: rotateY(0deg) translateZ(calc(var(--cube--w) / 2));
  }

  &--top {
    height: var(--cube-depth);
    transform: rotateX(90deg) translateZ(calc(var(--cube-depth) / 2));
  }

  &--back {
    transform: rotateY(180deg) translateZ(calc(var(--cube--w) / 2));
  }

  &--right {
    transform: rotateY(90deg) translateZ(calc(var(--cube--w) / 2));
  }

  &--left {
    transform: rotateY(-90deg) translateZ(calc(var(--cube--w) / 2));
  }

  &--bottom {
    height: var(--cube-depth);
    transform: rotateX(-90deg)
      translateZ(calc(var(--cube--h) - (var(--cube-depth) / 2)));
  }
}
</style>
