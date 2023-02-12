let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ];
   
  expencesExamples.forEach(yearly => {
    let index = 0

    yearly.yearlyExpences.forEach(exp => {
      if (exp <= 1000) {
      index = yearly.yearlyExpences.indexOf(exp);
     
      console.log (new Intl.DateTimeFormat("en-US", {
        month: "long"
        }).format(new Date(String(index))))
      }
    })

  })
  
