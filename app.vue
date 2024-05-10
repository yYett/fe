<template>
  <div>
    <!-- <TheLogin
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
    /> -->
    <TheRegister
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
          {
            label: 'Repeat password',
            name: 'pw_copy',
            type: 'password',
            required: true,
            match: 'pw',
          },
        ],
      }"
    />
  </div>
</template>
