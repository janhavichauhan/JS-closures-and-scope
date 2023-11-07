// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
  const NEG_INF = -1000000;
  
  // Progression 2: add 3 variables: title, currIndex, check
  var check = false;
  var CurrIndex = -1;
  function createPop(array,number){
    for(let i=0; i < array.length;i++ ){
      if(array[i]==number){
        check=true;
        CurrIndex=i;
      }
    }
  
      // Progression 3: create a function "searchForElement" 
     if(!check){
      return "The item is not present and is at index -1000000";
     }else{
      return `The item is present and is at index ${CurrIndex}`;
     }
      // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
  }                 // to return the desired output.

const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 4;

