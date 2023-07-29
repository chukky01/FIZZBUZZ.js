//cycle through from 1 to 100
for (let i = 0; i <=100; i++)
{
  //If the number is divisible by both 5 and 15, print fizzbuzz
  if(i % 15 === 0)
  {
    console.log(i + " FIZZBUZZ");
  }
  //or if the number is divisible by 3 but not 5, print fizz
  else if(i % 3 === 0){
    console.log(i + " FIZZ");
  }
  //if the number if divisible by 5 but not 3, print buzz
  else if(i % 5 === 0)
  {
    console.log(i + " BUZZ");
  }
  //finally, if it is not divisible by 3 or 5, just print the number as it is
  else{
    console.log(i);
  }
  

}
