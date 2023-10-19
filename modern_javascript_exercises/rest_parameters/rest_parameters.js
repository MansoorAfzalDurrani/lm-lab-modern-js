// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(... theAgrs) {
  // Add a loop here
  let total =0;
  //console.log(...theAgrs);
  for (let arg of theAgrs ){
    total +=arg;
  }

  return total;
}

add(1, 2, 3, 4, 5);
