let nn;
let data1 = [];
let answer1 = [];
let data2 = [];
let answer2 = [];

function setup() {
	nn = new NeuralNetwork(3, 8, 1);
	data1 = [[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1]];
	answer1 = [[0], [0.1], [0.2], [0.3], [0.4], [0.5], [0.6], [0.7]]
	// data2 = [[0, 0], [0, 1], [1, 0], [1, 1]];
	// answer2 = [[0], [1], [1], [0]];
	nn.feedforward(data1[1]);
	for(let i = 0; i < 500000; i++){
		j = Math.floor(random(8));
		nn.train(data1[j], answer1[j]);
	}
	nn.feedforward(data1[1]);
}

function sigmoid(x){
	return 1 / (1 + Math.exp(-x));
}

function fd_sigmoid(x){
	return x * (1 - x);
}
