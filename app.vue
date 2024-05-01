<template>
  <div>
    <TheLogin
      :data="{
        fields: [
          {
            label: 'E-mail',
            name: 'email',
            type: 'email',
            required: true,
          },
          {
            label: 'Password',
            name: 'pw',
            type: 'password',
            required: true,
          },
        ],
      }"
    />
  </div>
</template>
