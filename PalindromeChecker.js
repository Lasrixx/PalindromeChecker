function palindrome(str) {
    let rgx = /[\W_]/g
    str = str.replace(rgx, "");
    str = str.toLowerCase();
  
    let firstHalf;
    let lastHalf;
    if(str.length%2 == 0){
      firstHalf = str.slice(0,str.length/2);
      lastHalf = str.slice(str.length/2);
    }
    else{
      firstHalf = str.slice(0,str.length/2);
      lastHalf = str.slice(str.length/2+1);
    }
  
    let counter = 0;
    for(let i = 0; i < firstHalf.length; i++){
      if(firstHalf[i] == lastHalf[lastHalf.length - 1 - i]){
  
        counter++;
      }
    }
  
    if(counter == firstHalf.length){
      return true;
    }
    else{
      return false;
    }
  
  }
  
  
  
  console.log(palindrome("_eye"));