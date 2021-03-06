function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return 
  }
  else {
    var recArea = length * width;
    return recArea;
  }
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return 
  }
  else {
    var traArea = (base * height) / 2;
    return traArea;
  }
}


function calculateCircleArea(radius) {
  if (radius < 0) {
    return 
  }
  else {
    var cirArea = Math.PI * (radius * radius);
    return cirArea;
  }
}


console.log(calculateRectangleArea(10, 5));     
console.log(calculateRectangleArea(1.5, 2.5));  
console.log(calculateRectangleArea(10, -5));    

console.log(calculateTriangleArea(10, 5)); 
console.log(calculateTriangleArea(3, 2.5)); 
console.log(calculateTriangleArea(10, -5)); 

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5)); 
console.log(calculateCircleArea(-1)); 