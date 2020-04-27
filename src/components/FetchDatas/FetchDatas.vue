<script>
import { fetchData } from '@/services/api';
import { type UserType } from '@/types';

interface Data {
  list: UserType[]
}

export default {
  name: 'FetchDatas',
  data: ():Data => ({
    list: [],
  }),
  async mounted() {
    const list:UserType[] = await fetchData();
    this.list = list;
  },
};
</script>

<template lang="pug">
  .fetch-datas
    h1 FetchDatas
    ul(data-testid='ul')
      li(v-for='user in list' :key='user.name')
        | {{ user.name }}
</template>
