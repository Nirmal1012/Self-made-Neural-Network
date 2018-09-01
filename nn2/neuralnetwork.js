class NeuralNetwork{
	
	constructor(input, hidden, output){
		this.input = input;
		this.hidden = hidden;
		this.output = output;
		this.input_node = new Matrix(this.input, 1);
		this.hidden_node = new Matrix(this.hidden, 1);
		this.output_node = new Matrix(this.output, 1);
		this.hidden_weight = new Matrix(this.hidden, this.input);
		this.output_weight = new Matrix(this.output, this.hidden);
		this.hidden_weight.randomize();
		this.output_weight.randomize();
		this.lr = 0.1;
	}

	feedforward(data){
		if(!(data instanceof Matrix)){
			this.input_node = Matrix.toMatrix(data);
		}
		//Calculating hidden node
		this.hidden_node = Matrix.mul(this.hidden_weight, this.input_node);
		this.hidden_node.map(sigmoid);

		//Calculating output node
		this.output_node = Matrix.mul(this.output_weight, this.hidden_node);
		this.output_node.map(sigmoid);

		//Printing output
		this.output_node.print();
	}

	train(data, answer){
		if(!(data instanceof Matrix)){
			data = Matrix.toMatrix(data);
		}
		if(!(answer instanceof Matrix)){
			answer = Matrix.toMatrix(answer);
		}

		//Calculating input node
		this.hidden_node = Matrix.mul(this.hidden_weight, data);
		this.hidden_node.map(sigmoid);

		//Calculating output node
		this.output_node = Matrix.mul(this.output_weight, this.hidden_node);
		this.output_node.map(sigmoid);
		
		//Calculating output error
		let output_error = Matrix.sub(answer, this.output_node);

		//Calculating hidden error
		let transpose_output_weight = Matrix.transpose(this.output_weight);
		let hidden_error = Matrix.mul(transpose_output_weight, output_error);

		//Calculating new delta weights for output layer
		output_error.mul(this.lr);
		this.output_node.map(fd_sigmoid);
		output_error.mul(this.output_node);
		let transpose_hidden_node = Matrix.transpose(this.hidden_node);
		let del_o_weight = Matrix.mul(output_error, transpose_hidden_node);
		
		//Calculating new delta weights for hidden layer
		hidden_error.mul(this.lr);
		this.hidden_node.map(fd_sigmoid);
		hidden_error.mul(this.hidden_node);
		let transpose_data = Matrix.transpose(data);
		let del_h_weight = Matrix.mul(hidden_error,transpose_data);

		//Updating weights
		this.output_weight.add(del_o_weight);
		this.hidden_weight.add(del_h_weight);
	}

}