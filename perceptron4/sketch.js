let data = [];
let p;

function setup() {
	createCanvas(600, 600);
	for(let i = 0; i < 500; i++){
		data[i] = new Points();
	}
	p = new Perceptron();
	p.set_weights(data[0].x.length);
	console.log("w[0]: ", p.w[0]);
	console.log("w[1]: ", p.w[1]);
	console.log("w[2]: ", p.w[2]);
}

function draw() {
	background(225);
	// frameRate(1);
	stroke(0);
	ellipse(mapX(0), mapY(0), 5, 5);
	line(mapX(-width / 2), mapY(f(-width / 2)), mapX(width / 2), mapY(f(width / 2)));
	stroke(0, 255, 0);
	for(let i = 0; i < data.length; i++){
		p.displayData(data[i]);
	}
	for(let i = 0; i < data.length; i++){
		p.train(data[i]);
	}
}

function mousePressed(){
	console.log("w[0]: ", p.w[0]);
	console.log("w[1]: ", p.w[1]);
	console.log("w[2]: ", p.w[2]);	
}

function f(x){
	return 5 * x - 2;
}

function mapX(x){
	return width / 2 + x;
}

function mapY(y){
	return height / 2 - y;
}