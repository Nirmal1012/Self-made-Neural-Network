class Perceptron{

	//Initializing weights
	constructor(){
		this.w = [random(-1, 1), random(-1, 1)];
		this.lr = 0.001;
	}

	//Main function
	math_function(data){
		let sum = 0;
		for(let i = 0; i < this.w.length; i++){
			sum = sum + data.x[i] * this.w[i];
		}
		return this.sign(sum); 
	}

	//Activation function to assign output
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
		ellipse(data.x[0], data.x[1], 12, 12);
	}

	train(data){
		let y = this.math_function(data);
		for(let i = 0; i < this.w.length; i++){
			let error = data.label - y;
			let del_w = error * data.x[i] * this.lr;
			this.w[i] = this.w[i] + del_w;
		}
	}

}