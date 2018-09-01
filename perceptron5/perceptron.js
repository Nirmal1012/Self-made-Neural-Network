class Perceptron{

	constructor(){
		this.w = [];
		this.lr = 0.01;
	}

	//Initializing weights randomly
	set_weights(size){
		for(let i = 0; i < size; i++){
			this.w[i] = random(-1, 1);
		}
	}

	//math function to calculate sum of product of input and their corresponding weights
	math_function(data){
		let sum = 0;
		for(let i = 0; i < data.x.length; i++){
			sum = sum + this.w[i] * data.x[i];
		}
		return this.sign(sum);
	}

	//Activation function to give output
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
		ellipse(mapX(data.x[1]), mapY(data.x[2]), 12, 12);
	}

	//Train data
	train(data){
		let y = this.math_function(data);
		let error = data.label - y;
		let del_w;
		for(let i = 0; i < data.x.length; i++){
			del_w = error * data.x[i] * this.lr;
			this.w[i] += del_w;
		}
	}
}