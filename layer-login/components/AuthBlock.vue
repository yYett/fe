<template>
  <div class="auth-block">
    <TheCube :face="face">
      <template #front>
        <AuthForm :data="loginPayload">
          <DescriptiveLink
            text=" First-time explorer?"
            label="Register"
            @clicked="face = 'right'"
          />
          <DescriptiveLink
            text="Lost the way?"
            label="Recover password"
            @clicked="face = 'left'"
          />
        </AuthForm>
      </template>

      <template #right>
        <AuthForm :data="registerPayload">
          <DescriptiveLink
            text=" Been here before?"
            label="Login"
            @clicked="face = 'front'"
          />
        </AuthForm>
      </template>

      <template #left>
        <AuthForm :data="recoverPasswordPayload">
          <DescriptiveLink
            text="Here is the way to login &#8594;"
            label="Login"
            @clicked="face = 'front'"
          />
        </AuthForm>
      </template>
    </TheCube>
  </div>
</template>
<script setup lang="ts">
import type { TheCubeFaces } from '~/layer-ui/types';

const face = ref<TheCubeFaces>('front');
</script>

<style scoped lang="scss">
.auth-block {
  height: 100vh;
  width: 100%;
  display: flex;

  & > * {
    margin: auto;
  }
}
</style>
