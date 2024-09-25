const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

 const usersMenores = [];
 const usersMayores = [];

  for (const user of users) {
    if (user.years < 18){
        usersMenores.push(user.name);
    }

    if (user.years >= 18){
        usersMayores.push(user.name);
    }

  }

  console.log("Usuarios menores de edad: " + "\n" + usersMenores);


  console.log("Usuarios mayores de edad: " + "\n" + usersMayores);

