<template>
  <div class="field-set-validator">
    <FieldInput
      v-for="(item, i) in data"
      :key="i"
      :data="item"
      v-model:field="state[i]"
      :value="state[i]"
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

const state = ref<string[]>(props.data.map((el) => el.value ?? ''));
const errors = ref<string[]>([]);

const validateFields = () => {
  const x = Object.values(state.value).forEach((field, key) => {
    const { required, type } = props.data[key];

    if (required || field) {
      console.log('type');

      const errorType = validateInputValue(field, type);
      errors.value[key] = errorType;
    }
  });
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
