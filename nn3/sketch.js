let nn;
let data = [];
let answer = [];

function setup() {
	nn = new NeuralNetwork(3, 8, 1);
	data = [[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1]];
	answer = [[0], [0.1], [0.2], [0.3], [0.4], [0.5], [0.6], [0.7]];
	nn.feedforward(data[4]);
	for(let i = 0; i < 500000; i ++){
		let j = floor(random(8));
		nn.train(data[j], answer[j]);
	}
	nn.feedforward(data[4]);
}

function draw() {

}

function sigmoid(x){
	return 1 / (1 + Math.exp(-x));
}

function fd_sigmoid(x){
	return x * (1 - x);
}