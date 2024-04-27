<template>
  <div
    :class="[
      'input-field',
      {
        'has-error': errorMsg,
      },
    ]"
  >
    <label class="f-label" :for="data.name">{{ data.label }}</label>
    <input
      :name="data.name"
      :type="data.type"
      v-model="value"
      @change="field = value"
    />
    <p v-show="errorMsg" class="f-caption">{{ errorMsg }}</p>
  </div>
</template>
<script setup lang="ts">
import type { FieldInput } from "../types";

const props = defineProps<{
  data: FieldInput;
  errorMsg?: string;
}>();

const value = ref(props.data.value);
const field = defineModel();
</script>

<style lang="scss" scoped>
.input-field {
  position: relative;
  display: flex;
  flex-flow: row wrap;

  &.has-error {
    --input-border-color: var(--input-error-color, var(--clr-error));

    p {
      --clr-text: var(--input-error-color, var(--clr-error));
      margin-left: 1.6rem;
    }
  }

  input {
    padding: 1.2rem 1.6rem;
    border: 0.1rem solid var(--input-border-color, var(--clr-secondary));
    border-radius: 0.4rem;
    color: var(--input-color, var(--clr-neutral--0));
    width: 100%;
  }

  label {
    position: absolute;
    top: -18%;
    left: 1rem;
    color: var(--label-color, var(--clr-neutral--0));
    background-color: var(--label-bg-color, var(--clr-neutral--1));
    padding-inline: 1rem;
  }
}
</style>
