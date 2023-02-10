let expenses = [
    {
      yearlyExp: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390],
    },
    {
      yearlyExp: [
        500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
      ],
    },
    {
      yearlyExp: [
        20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 901, 7000,
      ],
    },
  ];
  
  expenses.forEach((exp) => {
    let newId = [];
    exp.yearlyExp.forEach((value) => {
      if (value <= 1000) {
        let idx = exp.yearlyExp.indexOf(value);
        while (idx != -1) {
          newId.push(idx);
          idx = expenses.indexOf(value, idx + 1);
        }
      }
    });
  
    const month = [
      " January",
      " February",
      " March",
      " April",
      " May",
      " June",
      " July",
      " August",
      " September",
      " October",
      " November",
      " December",
    ];
    for (let index = 0; index < newId.length; index++) {
      newId[index] = month[newId[index]];
    }
    console.log(`Months with expenses less than a 1000: ${newId}`);
  });