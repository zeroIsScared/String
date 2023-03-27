// const str = "john";
//  const ucFirst= (newStr) =>{
//   if( newStr === null ||  newStr.trim()=== ''){
//  return "";
//   } 
//   else  {
// const trimedStr =  newStr.trim();
// const upperCasedStr =trimedStr[0].toUpperCase() + trimedStr.slice(1);
// console.log(upperCasedStr);
// return upperCasedStr;
//  }
// }
 
// ucFirst(str);

// const checkSpam = (email)=> {
//     const spam1 ='viagra';
//     const spam2 = 'xxx';
  
//     if(email.toLowerCase().includes(spam1) || email.toLowerCase().includes(spam2) ){
//       return true;
//     }
//     else {
//   return false;
//     }
//   }

// function truncate (str,maxlength) {

//     if (str.length > maxlength-1) {
//       const newStr = `${str.slice(0,maxlength-1)}…`;
//       return newStr;
//     } 
//     else if (str.length < maxlength-1) {
//       return str;
//     }
//   } 

//  console.log(truncate ('bjvbghdgdas',5));

// const extractCurrencyValue = (str) => {
// return parseInt(str.slice(1));
// }

// console.log(extractCurrencyValue ('$120'));


  // Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
  
const camelize = (str)=>{
  const strCamelized= [];

for(i=0; i< str.length; i++){
  if(str[i] !== '-' ){
     if(str[i-1] === '-' ){
       strCamelized.push( str[i].toUpperCase());
    } 
    else 
    {strCamelized.push( str[i]);

    }

  }
 
}
return strCamelized.join('');
}

console.log(camelize('a-final-word'));