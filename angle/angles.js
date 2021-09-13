const inputs=document.querySelectorAll("input")
const isTriangleBtn = document.querySelector("button");
const output = document.querySelector(".output");

function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
  const sum = sumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 180) {

    output.innerText = "Yay, the angles form a triangle!";
   
  } else {
  
    output.innerText = "Oh Oh! The angle doesn't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
