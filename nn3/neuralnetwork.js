class NeuralNetwork{

	constructor(input, hidden, output){
		this.input = input;
		this.hidden = hidden;
		this.output = output;
		this.hidden_weight = new Matrix(this.hidden, this.input);
		this.output_weight = new Matrix(this.output, this.hidden);
		this.hidden_weight.randomize();
		this.output_weight.randomize();
		this.lr = 0.1;
	}

	feedforward(input_node){
		if(!(input_node instanceof Matrix)){
			input_node = Matrix.toMatrix(input_node); 
		}

		//Computing hidden node
		let hidden_node = Matrix.mul(this.hidden_weight, input_node);
		hidden_node.map(sigmoid);

		//Computing output node
		let output_node = Matrix.mul(this.output_weight, hidden_node);
		output_node.map(sigmoid);

		output_node.print();
	}

	train(input_node, result){
		//Converting input data and result into matrix from array
		if(!(input_node instanceof Matrix)){
			input_node = Matrix.toMatrix(input_node);
		}

		if(!(result instanceof Matrix)){
			result = Matrix.toMatrix(result);
		}

		//Computing hidden node
		let hidden_node = Matrix.mul(this.hidden_weight, input_node);
		hidden_node.map(sigmoid);

		//Computing output node
		let output_node = Matrix.mul(this.output_weight, hidden_node);
		output_node.map(sigmoid);

		//Computing output error
		let output_error = Matrix.sub(result, output_node);
		
		//Computing hidden error
		let transpose_output_weight = Matrix.transpose(this.output_weight);
		let hidden_error = Matrix.mul(transpose_output_weight, output_error);

		//Computing output delta weight
		output_node.map(fd_sigmoid);
		output_error.mul(output_node);
		let transpose_hidden_node = Matrix.transpose(hidden_node);
		let output_delta_weight = Matrix.mul(output_error, transpose_hidden_node);
		output_delta_weight.mul(this.lr);

		//Computing hidden delta weight
		hidden_node.map(fd_sigmoid);
		hidden_error.mul(hidden_node);
		let transpose_input_node = Matrix.transpose(input_node);
		let hidden_delta_weight = Matrix.mul(hidden_error, transpose_input_node);
		hidden_delta_weight.mul(this.lr);

		//Updating weights
		this.hidden_weight.add(hidden_delta_weight);
		this.output_weight.add(output_delta_weight); 	
	}

}