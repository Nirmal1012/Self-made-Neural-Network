let p;
let data = [];

function setup() {
	createCanvas(600, 600);
	p = new Perceptron();
	for(let i = 0; i < 500; i++){
		data[i] = new Points();
	}
	p.set_weights(data[0]);
	for(let i = 0; i < p.weights.length; i++){
		console.log(p.weights[i]);
	}
}

function draw() {
	frameRate(10);
	background(240);
	line(0, 0, width, height);
	for(let i = 0; i < data.length; i++){
		p.displayData(data[i]);
	}
	for(let i = 0; i < data.length; i++){
		p.train(data[i]);
	}
}

function mousePressed(){
	for(let i = 0; i < data.length; i++){
		p.train(data[i]);
	}
	for(let i = 0; i < p.weights.length; i++){
		console.log(p.weights[i]);
	}
}