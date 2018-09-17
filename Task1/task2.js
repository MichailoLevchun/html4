function countLetter(letter,string){
    var count = 0,i=-1;
    while((i=string.indexOf(letter,i+1)) >= 0) count++;
    return count;
  }
  
  console.log(countLetter("а","Назва Львів дана місту на честь князя Лева Даниловича, сина засновника Львова Данила Галицького"));