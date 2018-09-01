let data = [];
let p;

function setup() {
	createCanvas(600, 600);
	p = new Perceptron();
	for(let i = 0; i < 500; i++){
		data[i] = new Points();
	}
	console.log(p.w[0]);
	console.log(p.w[1]);
}

function draw() {
	background(200);
	line(0, 0, width, height);
	for(let i = 0; i < data.length; i++){
		p.displayData(data[i]);
	}
}

function mousePressed(){
	for(let i = 0; i < data.length; i++){
		p.train(data[i]);
	}
	console.log(p.w[0]);
	console.log(p.w[1]);
}