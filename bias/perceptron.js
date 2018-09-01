class Perceptron{
	
	constructor(){
		this.weights = [];
		this.lr = 0.01;
	}

	//Assigning data according to weights
	set_weights(data){
		for(let i = 0; i < data.x.length; i++){
			this.weights[i] = random(-1, 1);
		}
	}

	//Math function to calculate sum
	math_function(data){
		let sum = 0;
		for (let i = 0; i < data.x.length; i++){
			sum = sum + data.x[i] * this.weights[i];
		}
		return this.sign(sum);
	}

	//Activation function
	sign(value){
		if(value > 0){
			return 1;
		}
		else{
			return -1;
		}
	}

	//Displays data on canvas
	displayData(data){
		let y = this.math_function(data);
		if(y == 1){
			fill(255);
		}
		else{
			fill(0);
		}
		ellipse(data.x[1], data.x[2], 14, 14);
	}

	//Train data
	train(data){
		let y = this.math_function(data);
		let error = data.label - y;
		let del_weight;
		for(let i = 0; i < data.x.length; i++){
			del_weight = error * data.x[i] * this.lr;
			this.weights[i] = this.weights[i] + del_weight;
		}
	}

}