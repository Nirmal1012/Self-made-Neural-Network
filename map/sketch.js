let data = [];
let p;

function setup() {
	createCanvas(600, 600);
	for(let i = 0; i < 500; i++){
		data[i] = new Points();
	}	
	p = new Perceptron();
	p.set_weights();
	console.log("x[0] weight: ", p.weights[0]);
	console.log("x[1] weight: ", p.weights[1]);
	console.log("x[2] weight: ", p.weights[2]);
}

function draw() {
	background(225);
	// frameRate(10);
	stroke(255, 0, 0);
	line(mapX(-width / 2), mapY(p.g(-width / 2)), mapX(width / 2), mapY(p.g(width / 2)));
	stroke(0);
	line(mapX(-width / 2), mapY(f(-width / 2)), mapX(width / 2), mapY(f(width / 2)));
	stroke(0, 255, 0);
	for(let i = 0; i < data.length; i++){
		p.displayData(data[i]);
	}
	for(let i = 0; i< data.length; i++){
		p.train(data[i]);
	}
}

function mousePressed(){
	for(let i = 0; i < data.length; i++){
		p.train(data[i]);
	}
	console.log("x[0] weight: ", p.weights[0]);
	console.log("x[1] weight: ", p.weights[1]);
	console.log("x[2] weight: ", p.weights[2]);
}

function f(x){
	return 3 * x + 2;
}

function mapX(x){
	return (width / 2 + x);
}

function mapY(y){
	return (height / 2 - y);
}