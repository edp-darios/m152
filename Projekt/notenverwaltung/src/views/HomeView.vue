<template>
  <table>
    <tr>
      <th v-for="subject in subjects"> {{ subject.subject }}</th>
    </tr>
    <tr>
      <td v-for="subject in subjects"> {{ subject.grades }}</td>
    </tr>
  </table>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      subjects: [{
        "subject": "M152", 
        "grades": [5, 4]
      }, {
        "subject": "M151",
        "grades": [5, 5.78]
      }, {
        "subject": "ABU",
        "grades": [6]
      }]
    }
  }
}



</script>
