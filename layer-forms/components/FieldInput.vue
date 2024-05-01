<template>
  <div :class="['input-field', { 'has-error': errorMsg }]">
    <label class="f-label" :for="data.name">{{ data.label }}</label>
    <input
      :id="data.name"
      :name="data.name"
      :type="data.type"
      :value="value"
      @change="updateField($event)"
    />
    <p v-show="errorMsg" class="f-caption">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import type { FieldInput } from '../types';

const props = defineProps<{
  data: FieldInput;
  errorMsg?: string;
  value: string;
}>();

const field = defineModel('field');

const updateField = (evt: Event) => {
  field.value = (evt.target as HTMLInputElement).value;
};
</script>

<style scoped lang="scss">
.input-field {
  position: relative;
  display: flex;
  flex-flow: row wrap;

  &.has-error {
    --input-border-color: var(--input-error-color, var(--clr-error));

    p {
      --clr-text: var(--input-error-color, var(--clr-error));

      margin: {
        top: 0.25rem;
        left: 1.6rem;
      }
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
    top: -1.1rem;
    left: 1rem;
    color: var(--label-color, var(--clr-neutral--0));
    background-color: var(--label-bg-color, var(--clr-neutral--1));
    padding-inline: 1rem;
  }
}
</style>
