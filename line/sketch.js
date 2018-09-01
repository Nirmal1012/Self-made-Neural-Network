let p;

function setup() {
	createCanvas(600, 600);
	p = new Points(100, 100);
}

function draw() {
	background(200);
	fill(0);
	line(p.mapX(-300), p.f(-300), p.mapX(300), p.f(300));
	ellipse(p.mapX(p.x), p.mapY(p.y), 12, 12);
}