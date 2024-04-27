<template>
  <div>
    <TheLogin
      :data="{
        fields: [
          {
            arg: {
              label: 'E-mail',
              name: 'email',
              type: 'email',
            },
            errorMsg: '',
          },
          {
            arg: {
              label: 'Password',
              name: 'pw',
              type: 'password',
            },
            errorMsg: '',
          },
        ],
      }"
    />
  </div>
</template>
