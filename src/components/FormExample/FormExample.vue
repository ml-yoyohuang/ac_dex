<script>
import { postFormData } from '@/services/api';
import { type ApiResponseType } from '@/types';

interface Data {
  name: string;
  email: string;
  country: string;
  gender: string;
  skill: string[];
}

export default {
  data: ():Data => ({
    name: '',
    email: '',
    country: '',
    gender: '',
    skill: [],
    result: '',
  }),
  methods: {
    async submitHandler() {
      console.log('submitHandler', this.$data);
      const result:ApiResponseType = await postFormData(this.$data);
      console.log(result);
      this.result = result.status;
    },
  },
};
</script>

<template lang="pug">
form(@submit.prevent="submitHandler")
  //- .text-danger
    h3.error-message hi
  .form-group
    label Name
    input#input-name.form-control(v-model="name")
  .form-group
    label Email
    input#input-email.form-control(type="email" v-model="email")
  .form-group
    label Country
    select.form-control#select-country(v-model="country")
      option(value="0") 台灣1
      option(value="1") 台灣2
      option(value="2") 台灣3
  .form-group
    label Gender
    div
      .form-check-inline
        label
          input#radio-gender-1(type="radio" value="1" name="gender" v-model="gender")
          |男
      .form-check-inline
        label
          input#radio-gender-0(type="radio" value="0" name="gender" v-model="gender")
          |女
  .form-group
    label Skill
    div
      .form-check-inline
        label
          input#checkbox-skill-0(type="checkbox" value="Vue" v-model="skill")
          |Vue
      .form-check-inline
        label
          input#checkbox-skill-1(type="checkbox" value="React" v-model="skill")
          |React
      .form-check-inline
        label
          input#checkbox-skill-2(type="checkbox" value="Angular" v-model="skill")
          |Angular
  button.btn.btn-primary#button-submit(type="submit") Submit
</template>
