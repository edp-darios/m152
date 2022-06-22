<template>
  <div class="container">
    <div class="row">

      <div class="col-12">
        <h1>Notenverwaltung</h1>
        <div class="form-group w-100">
          <input v-model="newSubject" type="text" placeholder="Subject" aria-label="New Subject"
            aria-describedby="add-button" class="form-control">
          <button @click="addSubject(this.newSubject)" class="btn btn-primary">Add Subject</button>
          <br><br>
          <select v-model="selectSubject" class="form-control">
            <option value="disabled" disabled>Choose a Subject</option>
            <option v-for="subject in subjects" :value="subject.subject">{{ subject.subject }}</option>
          </select>
          <input v-model="newGrade" type="text" placeholder="Grade" aria-label="New Grade" aria-describedby="add-button"
            class="form-control">
          <button @click="addGrade(this.newGrade, this.selectSubject)" class="btn btn-primary">Add Grade</button>
        </div>
      </div>

      <div class="col-md-3 mb-3" v-for="subject in subjects">
        <ul class="list-group">
          <li class="list-group-item active">{{ subject.subject }}</li>
          <li class="list-group-item d-flex justify-content-between" v-for="grade in subject.grades">
            <p>{{ grade }}</p>
            <button @click="removeGrade(grade, subject.subject)" class="btn">
              <i class="bi bi-trash-fill"></i>
            </button>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'GradesView',
  data() {
    return {
      selectSubject: "disabled",
      subjects: [{
        "subject": "Ges",
        "grades": [5, 4]
      }, {
        "subject": "M151",
        "grades": [5, 5.78]
      }, {
        "subject": "M152",
        "grades": [6, 6]
      }, {
        "subject": "M153",
        "grades": [5, 4.5]
      }, {
        "subject": "M306",
        "grades": [5.3, 5.4]
      }, {
        "subject": "NWS",
        "grades": [4, 3.8]
      }, {
        "subject": "SPK",
        "grades": [6, 5]
      }, {
        "subject": "SPO",
        "grades": [6, 5, 6]
      }, {
        "subject": "WUR",
        "grades": [5, 5.1, 4.6]
      }]
    }
  },
  methods: {
    addSubject(name) {
      this.subjects.push({ subject: name });
      this.newSubject = "";
    },
    addGrade(grade, subject) {

    },
    removeGrade(grade, subject) {

    }
  }
}
</script>
