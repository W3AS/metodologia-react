<template>
  <q-page padding>
    <q-markdown :src="readme" />
  </q-page>
</template>

<script>
import readme from '../statics/markdown/CERIMONIAS.md'
export default {
  name: 'Cerimonias',
  data () {
    return {
      readme: readme
    }
  }
}
</script>
