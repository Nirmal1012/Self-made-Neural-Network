class Perceptron{

	//Initialize the weights
	constructor(){
		this.w = [random(-1, 1), random(-1, 1)];
		// this.w = [1, -1];
		this.lr = 0.01;
		this.count = 0;
	}

	//Calculate the sum
	guess(data){
		let sum = 0;
		for(let i = 0; i < this.w.length; i++){
			sum = sum + data.x[i] * this.w[i];
		}
		let y = this.sign(sum);
		return y;
		// console.log(this.w[0], this.w[1]);
		// console.log(y);
	}

	//Classify the output
	sign(value){
		if(value > 0){
			return 1;
		}
		else{
			return -1; 
		}
	}

	dataDisplay(data){
		let y = this.guess(data);
		if(y == 1){
			fill(255);
		}
		else{
			fill(0);
		}
		ellipse(data.x[0], data.x[1], 12, 12);
	}

	//Train data
	train(data){
		for(let i = 0; i < this.w.length; i++){
			let y = this.guess(data);
			let error = data.label - y;
			if(error != 0){
				this.count++;
			}
			let del_w = error * data.x[i] * this.lr;
			this.w[i] = this.w[i] + del_w; 
		}
	}
}