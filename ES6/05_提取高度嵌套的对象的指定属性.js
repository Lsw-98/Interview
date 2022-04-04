const school = {
  classes: {
    stu: {
      name: 'Bob',
      age: 24,
    }
  }
}

const { classes: { stu: { name } } } = school
console.log(name);