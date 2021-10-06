var input1 
var input2
var data1,  data2
var button
var num1, num2
var button2
function setup() {
  createCanvas(400, 400);
  input1 = createInput()
  input1.position(50,200);
  input2 = createInput()
  input2.position(100,300);
  button = createButton("Add");
  button.mousePressed(addition)
  button.position(50,50)
  button2 = createButton("Subtract");
  button2.mousePressed(subtraction)
  button2.position(150,50);
}

function draw() {
  background(220);
  data1 = input1.value()
  data2 = input2.value()
  num1 = parseInt(data1)
  num2 = parseInt(data2)
}
function addition() {
  console.log(num1+num2);
}
function subtraction() {
  console.log(num1-num2);
}