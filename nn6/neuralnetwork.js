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

		//Calculating output error
		let output_error = Matrix.sub(result, output_node);

		//Calculating hidden error
		let transpose_ouput_weight = Matrix.transpose(this.output_weight);
		let hidden_error = Matrix.mul(transpose_ouput_weight, output_error);

		//Calculating delta output weight
		output_node.map(fd_sigmoid);
		output_error.mul(output_node);
		let transpose_hidden_node = Matrix.transpose(hidden_node);
		let delta_output_weight = Matrix.mul(output_error, transpose_hidden_node);
		delta_output_weight.mul(this.lr);

		//Calculating delta hidden weight
		hidden_node.map(fd_sigmoid);
		hidden_error.mul(hidden_node);
		let transpose_input_node = Matrix.transpose(input_node);
		let delta_hidden_weight = Matrix.mul(hidden_error, transpose_input_node);
		delta_hidden_weight.mul(this.lr);

		//Calculating delta output bias weight
		let delta_output_bias_weight = output_error;
		delta_output_bias_weight.mul(this.output_bias);
		delta_output_bias_weight.mul(this.lr);

		//Calculating delta output bias weight
		let delta_hidden_bias_weight = hidden_error;
		delta_hidden_bias_weight.mul(this.hidden_bias);
		delta_hidden_bias_weight.mul(this.lr);
	
		//Updating weights
		this.hidden_weight.add(delta_hidden_weight);
		this.output_weight.add(delta_output_weight);
		this.hidden_bias_weight.add(delta_hidden_bias_weight);
		this.output_bias_weight.add(delta_output_bias_weight);
	}

}