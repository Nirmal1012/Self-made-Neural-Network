let p;
let data = [];
let count = 0;

function setup(){
	createCanvas(600, 600);
	p = new Perceptron();
	for(let i = 0; i < 500; i++){
		data[i] = new Points();
	}
	console.log(p.w[0]);
	console.log(p.w[1]);
}

function draw(){
	background(200);
	stroke(0, 100, 0);
	line(0, 0, width, height);
	for(let i = 0; i < data.length; i++){
		p.dataDisplay(data[i]);
	}
	for(let i = 0; i < data.length; i++){
		p.train(data[i]);
	}
	stroke(0);
	fill(0);
	textSize(30);
	text(p.count, 550, 550);
}

function mousePressed(){
	console.log(p.w[0]);
	console.log(p.w[1]);
	text(p.count, 550, 550);
}