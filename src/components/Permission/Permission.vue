<script>
export default {
  name: 'Permission',
  props: {
    permissionCode: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<template lang="pug">
.permission
  h1(v-if="permissionCode === 1" data-testid="text") Admin
  h1(v-else data-testid="text") User
</template>
