class Perceptron{

	constructor(){
		this.weights = [];
		this.lr = 0.01;
	}

	set_weights(size){
		for(let i = 0; i < size; i++){
			this.weights[i] = random(-1, 1);
		}
	}

	//math function to calculate the total sum for every input
	math_function(data){
		let sum = 0;
		for(let i = 0; i < this.weights.length; i++){
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
			return - 1;
		}
	}

	displayData(data){
		let y = this.math_function(data);
		if(y == 1){
			fill(255);
		}
		else{
			fill(0);
		}
		ellipse(mapX(data.x[1] * width / 2), mapY(data.x[2] * height / 2), 12 ,12); 
	}

	//Training the data
	train(data){
		let y = this.math_function(data);
		let error = data.label - y;
		let del_weight;
		for(let i = 0; i < this.weights.length; i++){
			del_weight = error * data.x[i] * this.lr;
			this.weights[i] = this.weights[i] + del_weight;
		}
	}

	g(x){
		return -x * this.weights[1] / this.weights[2] - this.weights[0] / this.weights[2];
	}
}