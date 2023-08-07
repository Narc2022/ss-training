var len = 100;

var data = {
  name: "sachin singh",
  dob: "24-03-1996",
  prof: "mentor & sde2",
};

if (data && data.name) {
  var requireName = data.name.split(" ");
}

var requireData = {
  firstName: requireName[0],
  lastName: requireName[1],
  date_of_birth: data.dob,
  proffession: data.prof,
};

console.log("requireData", requireData);
