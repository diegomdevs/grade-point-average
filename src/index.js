"use strict";

class Average {
  getAverage(grades) {
    let gradesSum = 0;
    for (let index = 0; index < grades.length; index++) {
      const element = grades[index];
      gradesSum += element;
    }
    return gradesSum / grades.length;
  }
  onClick() {
    const grades = document.querySelector("input").value;
    const gradesArray = grades.split(",");
    const gradesNumberArray = [];
    for (let index = 0; index < gradesArray.length; index++) {
      const element = Number(gradesArray[index]);
      gradesNumberArray.push(element);
    }
    const average = this.getAverage(gradesNumberArray);
    document.getElementById("average").innerHTML = average.toFixed(2);
  }
}
const average = new Average();
