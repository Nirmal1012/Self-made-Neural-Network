let nn;
let data = [];
let answer = 0;
let count;

function setup(){
	nn = new NeuralNetwork(2, 2, 1);
	data = [[0, 0], [0, 1], [1, 0], [1, 1]];
	answer = [[0], [1], [1], [0]];
	count = 0;
	// console.table(nn.o_w.data);
	// nn.feedforward(data[0]);
	// nn.feedforward(data[1]);
	// nn.feedforward(data[2]);
	// nn.feedforward(data[3]);
	
	// for(let i = 0; i < 10; i++){
	// 	let num = floor(random(4));
	// 	if(num == 3){
	// 		count++;
	// 	}
	// }
		nn.train(data[0], answer[0]);	

	// nn.feedforward(data[0]);
	// nn.feedforward(data[1]);
	// nn.feedforward(data[2]);
	// nn.feedforward(data[3]);
	console.log(count);

	// console.table(nn.o_w.data);
}

function sigmoid(x){
	return 1 / (1 + Math.exp(-x));
}

function f_sigmoid(x){
	return x * (1 - x);
}