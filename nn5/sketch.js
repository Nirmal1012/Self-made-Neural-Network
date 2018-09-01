let nn;
let data = [];
let result = [];

function setup() {
	noCanvas();
	nn = new NeuralNetwork(3, 8, 1, 1, 1);
	data = [[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1]];
	result = [[0], [0.1], [0.2], [0.3], [0.4], [0.5], [0.6], [0.7]];
	nn.feedforward(data[3]);
	for(let i = 0; i < 500000; i ++){
		j = Math.floor(random(8));
		nn.train(data[j], result[j]);
	}
	nn.feedforward(data[3]);
}

function sigmoid(x){
	return 1 / (1 + Math.exp(-x));
}

function fd_sigmoid(x){
	return x * (1 - x);
}
