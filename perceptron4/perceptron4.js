class Perceptron{

	constructor(){
		this.w = [];
		this.lr = 0.1;
	}

	//Initializing weights
	set_weights(size){
		for(let i = 0; i < size; i++){
			this.w[i] = random(-1, 1);
		}
	}

	//math_function to calculate the sum of inputs and weights
	math_function(data){
		let sum = 0;
		for(let i = 0; i < this.w.length; i++){
			sum = sum + data.x[i] * this.w[i];
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

	displayData(data){
		let y = this.math_function(data);
		if(y == 1){
			fill(255);
		}
		else{
			fill(0);
		}
		ellipse(mapX(data.x[1] * width / 2), mapY(data.x[2] * height / 2), 12, 12);
	}

	train(data){
		let y = this.math_function(data);
		let error = data.label - y;
		let del_w;
		for(let i = 0; i < this.w.length; i++){
			del_w = error * data.x[i] * this.lr;
			this.w[i] = this.w[i] + del_w;
		}
	}

}