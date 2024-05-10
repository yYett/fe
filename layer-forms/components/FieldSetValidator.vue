<template>
  <div class="field-set-validator">
    <FieldInput
      v-for="(item, i) in data"
      :key="i"
      :data="item"
      v-model:field="state[item.name]"
      :value="state[item.name]"
      :error-msg="errors[i]"
    />
  </div>
</template>
<script setup lang="ts">
import type { FieldSetValidator } from '../types';

const props = defineProps<{
  data: FieldSetValidator;
}>();

const emit = defineEmits<{
  valid: [value: boolean];
}>();

const state = ref<{ [key: string]: string }>(
  props.data.reduce(
    (result, { name, value = '' }) => ({
      ...result,
      [name]: value,
    }),
    {},
  ),
);
const errors = ref<string[]>([]);

const validateFields = () => {
  Object.values(state.value).forEach((field, key) => {
    const { required, type, match } = props.data[key];

    if (required || field) {
      const errorType = validateInputValue(field, type);
      errors.value[key] = errorType;

      if (match && !errorType) {
        if (field !== state.value[match]) errors.value[key] = 'mismatch';
      }
    }
  });

  return {
    valid: errors.value.filter(Boolean).length === 0,
    payload: state.value,
  };
};

defineExpose({
  validateFields,
});
</script>

<style scoped lang="scss">
.field-set-validator {
  display: grid;
  gap: var(--gap, 2.4rem);
}
</style>
