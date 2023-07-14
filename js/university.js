export const university = {
  students: [],
  addStudent(student) {
    this.students.push(student);
  },
  removeStudent(studentId) {
    this.students = this.students.filter(({ id }) => id !== studentId);
  },
  getStudent(studentId) {
    const student = this.students.find(({ id }) => {
      return id === studentId;
    });

    if (student) {
      return student;
    } else {
      return "Not found";
    }
  },
  getByFaculty(byFaculty) {
    return this.students.filter(({faculty})=> {
      return faculty === byFaculty;
    });
  }
};
