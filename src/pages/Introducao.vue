<template>
  <q-page padding>
    <q-markdown :src="readme" />
  </q-page>
</template>

<script>
import readme from '../statics/markdown/README.md'
export default {
  name: 'Introdução',
  data () {
    return {
      readme: readme
    }
  }
}
</script>
