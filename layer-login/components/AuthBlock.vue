<template>
  <div class="auth-block">
    <TheCube :face="face">
      <template
        v-for="(item, i) in authBlockPayload"
        :key="i"
        v-slot:[item.face]
      >
        <AuthForm :data="item.data" @handle-submit="submit($event, item.type)">
          <DescriptiveLink
            v-for="(link, j) in item.links"
            :key="j"
            :text="link.text"
            :label="link.label"
            @clicked="face = link.to"
          />
          <IconBrand class="icon" />
        </AuthForm>
      </template>
    </TheCube>
  </div>
</template>
<script setup lang="ts">
import type { TheCubeFaces } from '~/layer-ui/types';
import type { AuthBlockFace, AuthForm } from '../types';

const face = ref<TheCubeFaces>('front');

const submit = (payload: object, type: AuthBlockFace['type']) => {
  switch (type) {
    case 'login':
      console.log('login', payload);
      break;
    case 'register':
      console.log('register', payload);
      break;
    case 'recoverPw':
      console.log('recoverPw', payload);
      break;
  }
};
</script>

<style scoped lang="scss">
.auth-block {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;

  & > * {
    --cube--w: #{fluid-type(32rem, 52rem, $max-vw: 76.6rem)};
    --cube--h: #{fluid-type(55rem, 52rem, $max-vw: 76.6rem)};
    --cube-z: #{fluid-type(-16rem, -25rem, $max-vw: 76.6rem)};

    margin: auto;
  }

  .icon {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
    padding: 15%;
    opacity: 0.05;
    z-index: -1;
    color: var(--clr-primary);
  }
}
</style>
