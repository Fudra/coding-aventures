<template>
  <div id="app" class="bg-gray-300 h-screen flex items-center">
    <div class="shadow rounded w-64 h-48 p-8 bg-white mx-auto">
      <h1 class="text-center text-4xl">{{ $t('WELCOME') }}</h1>

      <label class="block mt-4 w-full">
        <select v-model="$i18n.locale" class="form-select w-full">
          <option
            v-for="(lang, i) in languages"
            :key="`lang_${i}`"
            :value="lang">
            {{ lang }}
          </option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { langs } from './locales';

  export default {
    name: 'app',
    methods: {
      ...mapActions({
        addLanguages: 'lang/addLanguages',
      }),
    },
    computed: {
      ...mapGetters({
        languages: 'lang/languages',
      }),
    },
    created() {
      this.addLanguages(langs);
    },
  };
</script>

<style lang="scss">
  @import './assets/styles';
</style>
