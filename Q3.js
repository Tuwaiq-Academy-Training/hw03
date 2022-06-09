const names = ["Maram", "Khaild", "Mohammed"];
const ages = [25, 30, 20];
const jobs = ["project manager", "engineer", "accountent"];
const hobbies = ["swimming", "chess", "eating"];

const employees = names.map((name, index) => {
  return {
    name: name,
    props: {
      age: ages[index],
      job: jobs[index],
      hobby: hobbies[index],
    },
  };
});

console.log(employees)