class NeuralNetwork{

	constructor(input, hidden, output, hidden_bias = 1, output_bias = 1){
		this.hidden_bias = tf.scalar(hidden_bias);
		this.output_bias = tf.scalar(output_bias);
		this.lr = tf.scalar(0.1);
		this.h_b_w_s = [hidden, 1];
		this.h_w_s = [hidden, input];
		this.o_w_s = [output, hidden];
		this.o_b_w_s = [output, 1];
		this.hidden_weight = tf.randomUniform(this.h_w_s, -1, 1);
		this.output_weight = tf.randomUniform(this.o_w_s, -1, 1);
		this.hidden_bias_weight = tf.randomUniform(this.h_b_w_s, -1, 1);
		this.output_bias_weight = tf.randomUniform(this.o_b_w_s, -1, 1);
	}

	feedforward(input_node){
		input_node = tf.tensor2d(input_node, [input_node.length, 1]);

		// Calculating hidden nodes
		let hidden_node = tf.variable(tf.matMul(this.hidden_weight, input_node));
		hidden_node.assign(hidden_node.add(this.hidden_bias_weight));

		// Calculating output nodes
		let output_node = tf.variable(tf.matMul(this.output_weight, hidden_node));
		output_node.assign(output_node.add(this.output_bias_weight));
		output_node.print();
	}

	train(input_node, result){
		input_node = tf.tensor2d(input_node, [input_node.length, 1]);
		result = tf.tensor2d(result, [result.length, 1]);

		// Calculating hidden nodes
		let hidden_node = tf.variable(tf.matMul(this.hidden_weight, input_node));
		hidden_node.assign(hidden_node.add(this.hidden_bias_weight));

		// Calculating output nodes
		let output_node = tf.variable(tf.matMul(this.output_weight, hidden_node));
		output_node.assign(output_node.add(this.output_bias_weight));

		// Calculating output error
		const output_error = tf.variable(result.sub(output_node)); 
	
		// Calculating hidden error
		const hidden_error = tf.variable(this.output_weight.transpose());
		hidden_error.assign(hidden_error.matMul(output_error));

		// Calculating delta output weights
		let delta_output_weight = tf.variable(output_error.matMul(hidden_node.transpose()));
		delta_output_weight.assign(delta_output_weight.mul(this.lr));

		// Calculating delta hidden weights
		let delta_hidden_weight = tf.variable(hidden_error.matMul(input_node.transpose()));
		delta_hidden_weight.assign(delta_hidden_weight.mul(this.lr));

		// Calculating delta output bias weights
		let delta_output_bias_weight = tf.variable(output_error.mul(this.output_bias)); 
		delta_output_bias_weight.assign(delta_output_bias_weight.mul(this.lr));

		// Calculating delta hidden bias weights
		let delta_hidden_bias_weight = tf.variable(hidden_error.mul(this.hidden_bias));
		delta_hidden_bias_weight.assign(delta_hidden_bias_weight.mul(this.lr));

		// Updating weights
		this.hidden_weight = this.hidden_weight.add(delta_hidden_weight);
		this.output_weight = this.output_weight.add(delta_output_weight);
		this.hidden_bias_weight = this.hidden_bias_weight.add(delta_hidden_bias_weight);
		this.output_bias_weight = this.output_bias_weight.add(delta_output_bias_weight);

	}

}