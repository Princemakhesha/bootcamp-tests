function countAllFromTown(registrationNumbers, town){
    var regNumbersList = registrationNumbers.split(",");
    var count = 0;
    for (var i = 0; i < regNumbersList.length; i++){
      var regNumbers = regNumbersList[i].trim();
      if (regNumbers.startsWith(town)){
        count++;
      }
    }
    return count;
  }