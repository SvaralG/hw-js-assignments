let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ];
   
  expencesExamples.forEach((yearly) => {
    let newM = [];
    yearly.yearlyExpences.forEach((exp) => {
      if (exp <= 1000) {
        let idx =yearly.yearlyExpences.indexOf(exp);
        while (idx != -1) {
          newM.push(idx);
          idx = expencesExamples.indexOf(exp, idx + 1);
   
      }
    }
    //console.log (newM)
  });
      
     
    let months = [
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
    for (let index = 0; index < newM.length; index++) {
      newM[index] = months[newM[index]];
    }
    console.log(` ${newM}`);
  });
   