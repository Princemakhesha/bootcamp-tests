function countAllPaarl(registrationNumbers){
    const regNumbers = registrationNumbers.split(", ");
    let count = 0;
    for (let i = 0; i < regNumbers.length; i++){
      const trimmedregNumber = regNumbers[i].trim();
      if (trimmedregNumber.startsWith("CJ")){
        count++;
      }
    }
    return count;
  }