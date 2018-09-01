function setup() {
	noCanvas();
	nn = new NeuralNetwork(2, 4, 1);
	input_data = [[0, 0], [0, 1], [1, 0], [1, 1]];
	result = [[0], [1], [1], [0]];

	nn.feedforward(input_data[1]);

	for(let i = 0; i < 10; i ++){
		let j = floor(random(4));
		nn.train(input_data[j], result[j]);
		console.log(tf.memory().numTensors);
		//	.dispose dispose the memory manually
		//	tf.tidy(function name) and after function is executed the tensors are deleted from the memory
	}

	nn.feedforward(input_data[1]);


}