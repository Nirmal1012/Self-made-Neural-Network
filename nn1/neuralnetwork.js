class NeuralNetwork{

	constructor(i_n, h_n, o_n){
		this.i_n = i_n;
		this.h_n = h_n;
		this.o_n = o_n;
		this.h_w = new Matrix(this.h_n, i_n);
		this.o_w = new Matrix(this.o_n, h_n);
		this.h_w.randomize();
		this.o_w.randomize();
		this.h_o = new Matrix(this.h_n, 1);
		this.o_o = new Matrix(this.o_n, 1);
		this.h_e = new Matrix(this.h_n, 1);
		this.o_e = new Matrix(this.o_n, 1);
		this.lr = 0.1;
	}

	feedforward(data){
		//Converting array data into matrix
		if(!(data instanceof Matrix)){
			data = Matrix.toMatrix(data);
		}
		//Calculating hidden layer output
		this.h_o = Matrix.mul(this.h_w, data);
		this.h_o.map(sigmoid);

		//Calculating output layer output
		this.o_o = Matrix.mul(this.o_w, this.h_o);
		this.o_o.map(sigmoid);
		this.o_o.print();
	}

	train(data, answer){
		if(!(data instanceof Matrix)){
			data = Matrix.toMatrix(data);
		}
		if(!(answer instanceof Matrix)){
			answer = Matrix.toMatrix(answer);
		}
		//Calculating hidden layer output
		this.h_o = Matrix.mul(this.h_w, data);
		this.h_o.map(sigmoid);

		//Calculating output layer output
		this.o_o = Matrix.mul(this.o_w, this.h_o);
		this.o_o.map(sigmoid);
		//Calculating the output layer error
		this.o_e = Matrix.sub(answer, this.o_o);

		//Calculating the hidden layer error
		this.h_e = Matrix.equals(this.h_w);
		if(this.o_n == 1){
			this.h_e.emul(this.o_e);
		}
		else{
			this.h_e = Matrix.transpose(this.h_e);
			this.h_e = Matrix.mul(this.h_e, this.o_e);
		}

		//Calculating delta weights for output layer
		//for output weights
		this.del_wo = Matrix.equals(this.o_o);
		this.del_wo.map(f_sigmoid);
		this.del_wo.emul(this.lr);
		this.del_wo.emul(this.o_e);
		if(this.o_n == 1){
			this.del_wo.mul(this.h_o);
		}
		else{
			let data1 = Matrix.transpose(this.h_o);
			this.del_wo = Matrix.mul(this.del_wo, data1);			
		}

		//for input weights
		this.del_wh = Matrix.equals(this.h_o);
		this.del_wh.map(f_sigmoid);
		this.del_wh.emul(this.lr);
		this.del_wh.emul(this.h_e);
		if(this.h_n == 1){
			this.del_wo.mul(this.data);
		}
		else{
			let data2 = Matrix.transpose(data);
			this.del_wh = Matrix.mul(this.del_wh, data2);			
		}

		//Updating weights
		this.o_w.add(this.del_wo);
		this.h_w.add(this.del_wh);

	}

}