#infinite loops
function example(){
  console.log('one');
  example();
}
#Recursion function-alternative way to run the repeated function
  let counter=3;
  function  example(){
    console.log(counter);
    counter=counter-1;
    if(counter===0)return;
    example();
  }
