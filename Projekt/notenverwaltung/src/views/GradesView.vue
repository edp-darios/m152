<template>
  <div class="container">
    <div class="row">

      <div class="col-12">
        <h1>Vue-Projekt | Noten-Verwaltung</h1>
        <p>von Dario Stübi</p>
        <hr>
        <h3>Verwaltung</h3>
        <br>
      </div>

      <div class="col-md-6">
        <div class="form-group w-100">
          <label for="addSubject" class="font-weight-bold">Add Subject</label>
          <input v-model="newSubject" id="addSubject" name="addSubject" type="text" placeholder="Subject" aria-label="New Subject" aria-describedby="add-button" class="form-control">
          <button @click="addSubject(this.newSubject)" class="btn btn-primary mt-2">Add Subject</button>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group w-100">
          <label for="addGrade" class="font-weight-bold">Add Grade</label>
          <select name="addGrade" id="addGrade" v-model="selectSubject" class="form-control">
            <option value="disabled" disabled>Choose a Subject</option>
            <option v-for="subject in subjects" :value="subject.subject">{{ subject.subject }}</option>
          </select>
          <input v-model="newGrade" type="number" placeholder="Grade" aria-label="New Grade" aria-describedby="add-button" class="form-control mt-2">
          <button @click="addGrade(this.newGrade, this.selectSubject)" class="btn btn-primary mt-2">Add Grade</button>
        </div>
      </div>

      <div class="col-12">
        <hr>
        <h3>Noten</h3>
        <h5>Gesammtdurchschnitt: Ø {{ Math.round(parseFloat(overallAVG) * 2) / 2 }}</h5>
        <br>
      </div>

      <div class="col-md-3 col-lg-2 mb-3" v-for="subject in subjects">
        <ul class="list-group">
          <li class="list-group-item active  d-flex justify-content-between">
            <p>{{ subject.subject }}</p>
            <p>Ø {{ parseFloat(subject.average).toFixed(2) }}</p>
          </li>
          <li class="list-group-item d-flex justify-content-between" v-for="(grade, index) in subject.grades">
            <p>{{ parseFloat(grade).toFixed(2) }}</p>
            <button @click="removeGrade(subject.subject, index)" class="btn">
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
      overallAVG: 0.00,
      overallAVGArray: [],
      subjects: [{
        "subject": "Ges",
        "grades": [5, 4],
        "average": 0.00
      }, {
        "subject": "M151",
        "grades": [5, 5.78],
        "average": 0.00
      }, {
        "subject": "M152",
        "grades": [6, 6],
        "average": 0.00
      }, {
        "subject": "M153",
        "grades": [5, 4.5],
        "average": 0.00
      }, {
        "subject": "M306",
        "grades": [5.3, 5.4],
        "average": 0.00
      }, {
        "subject": "NWS",
        "grades": [4, 3.8],
        "average": 0.00
      }, {
        "subject": "SPK",
        "grades": [6, 5],
        "average": 0.00
      }, {
        "subject": "SPO",
        "grades": [6, 5, 6],
        "average": 0.00
      }, {
        "subject": "WUR",
        "grades": [5, 5.1, 4.6],
        "average": 0.00
      }]
    }
  },
  methods: {
    addSubject(name) {
      this.subjects.push({ subject: name, grades: [], average: 0.00 });
      this.newSubject = "";
    },
    addGrade(grade, subject) {
      if (grade >= 1 && grade <= 6) {
        this.subjects[this.subjects.findIndex((sub) => sub.subject == subject)].grades.push(grade);
        this.newGrade = "";
        this.updateAVG();
      } else if (subject != "disabled") {
        window.alert("Bitte gib eine Note zwischen 1 und 6 ein")
      } else {
        window.alert("Bitte wähle ein Subject")
      }
    },
    removeGrade(subject, index) {
      this.subjects[this.subjects.findIndex((sub) => sub.subject == subject)].grades.splice(index, 1);
      this.updateAVG();
    },
    updateAVG() {
      const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
      this.overallAVGArray = [];
      this.subjects.forEach(subject => {
        subject.average = average(subject.grades)
        if (isNaN(subject.average)) {
          subject.average = 0;
        }
        if (subject.average != 0.00) {
          this.overallAVGArray.push(subject.average)
        }
      });
      this.overallAVG = average(this.overallAVGArray)
    }
  },
  beforeMount() {
    this.updateAVG();
  }
}
</script>
