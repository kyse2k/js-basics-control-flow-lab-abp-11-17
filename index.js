// Write your code in this file!
function scuberGreetingForFeet(ride){
  if (ride <= 400){
    return "This one is on me!";
  } else if (ride > 2000 && ride < 2500){
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  const citydesired = 'NYC';
  return (citydesired === city) ? `Ok, sounds good.` : `No go.`;
}
function switchOnCharmFromTip(){

   switch (){
     case 'generous':
      return "Thank you so much.";
     case 'not as generous':
      return "Thank you.";
     default:
      return "Bye.";
   }
 }
