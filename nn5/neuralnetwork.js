class NeuralNetwork{

	constructor(input, hidden, output, hidden_bias = 1, output_bias = 1){
		this.input = input;
		this.hidden = hidden;
		this.output = output;
		this.hidden_bias = hidden_bias;
		this.output_bias = output_bias;
		this.hidden_weight = new Matrix(this.hidden, this.input);
		this.output_weight = new Matrix(this.output, this.hidden);
		this.hidden_bias_weight = new Matrix(this.hidden, 1);
		this.output_bias_weight = new Matrix(this.output, 1);
		this.hidden_weight.randomize();
		this.output_weight.randomize();
		this.hidden_bias_weight.randomize();
		this.output_bias_weight.randomize();
		this.hidden_bias_weight.mul(this.hidden_bias);
		this.output_bias_weight.mul(this.output_bias);
		this.lr = 0.1;
	}

	feedforward(input_node){
		if(!(input_node instanceof Matrix)){
			input_node = Matrix.toMatrix(input_node);
		}

		//Calculating hidden nodes
		let hidden_node = Matrix.mul(this.hidden_weight, input_node);
		hidden_node.add(this.hidden_bias_weight);
		hidden_node.map(sigmoid);

		//Calculating output nodes
		let output_node = Matrix.mul(this.output_weight, hidden_node);
		output_node.add(this.output_bias_weight);
		output_node.map(sigmoid);

		output_node.print();
	}

	train(input_node, result){
		if(!(input_node instanceof Matrix)){
			input_node = Matrix.toMatrix(input_node);
		}

		if(!(result instanceof Matrix)){
			result = Matrix.toMatrix(result);
		}

		//Calculating hidden nodes
		let hidden_node = Matrix.mul(this.hidden_weight, input_node);
		hidden_node.add(this.hidden_bias_weight);
		hidden_node.map(sigmoid);

		//Calculating output nodes
		let output_node = Matrix.mul(this.output_weight, hidden_node);
		output_node.add(this.output_bias_weight);
		output_node.map(sigmoid);

		//Output error
		let output_error = Matrix.sub(result, output_node);

		//Input error
		let transpose_output_weight = Matrix.transpose(this.output_weight);
		let hidden_error = Matrix.mul(transpose_output_weight, output_error);

		//Calculating delta weights for output weights
		output_node.map(fd_sigmoid);
		output_error.mul(output_node);
		let transpose_hidden_node = Matrix.transpose(hidden_node);
		let output_delta_weight = Matrix.mul(output_error, transpose_hidden_node);
		output_delta_weight.mul(this.lr);

		//Calculating delta weights for hidden weights
		hidden_node.map(fd_sigmoid);
		hidden_error.mul(hidden_node);
		let transpose_input_node = Matrix.transpose(input_node);
		let hidden_delta_weight = Matrix.mul(hidden_error, transpose_input_node);
		hidden_delta_weight.mul(this.lr);

		//Calculating delta weights for output bias weights
		let output_delta_bias_weight = output_error;
		output_delta_bias_weight.mul(this.output_bias);
		output_delta_bias_weight.mul(this.lr);

		//Calculating delta weights for hidden bias weights
		let hidden_delta_bias_weight = hidden_error;
		hidden_delta_bias_weight.mul(this.hidden_bias);
		hidden_delta_bias_weight.mul(this.lr);

		//Updating weights
		this.hidden_weight.add(hidden_delta_weight);
		this.output_weight.add(output_delta_weight);
		this.hidden_bias_weight.add(hidden_delta_bias_weight);
		this.output_bias_weight.add(output_delta_bias_weight);

	}

}