class Matrix{

	constructor(row = 0, col = 0){
		this.row = row;
		this.col = col;
		this.data = [];
		for(let i = 0; i < this.row; i++){
			this.data[i] = [];
			for(let j = 0; j < this.col; j++){
				this.data[i][j] = 0;
			}
		}
	}

	randomize(){
		for(let i = 0; i < this.row; i++){
			for(let j = 0; j < this.col; j++){
				this.data[i][j] = Math.random() * 2 - 1;
			}
		}
	}

	add(data){
		if(data instanceof Matrix){
			if(this.row == data.row && this.col == data.col){
				for(let i = 0; i < this.row; i++){
					for(let j = 0; j < this.col; j++){
						this.data[i][j] += data.data[i][j];
					}
				}
			}
			else{
				console.log("dimension incorrect.");
			}
		}
		else{
			for(let i = 0; i < this.row; i++){
				for(let j = 0; j < this.col; j++){
					this.data[i][j] += data;
				}
			}
		}
	}

	static add(data1, data2){
		if(data1.row == data2.row && data1.col == data2.col){
			let mx = new Matrix(data1.row, data2.row);
			for(let i = 0; i < mx.row; i++){
				for(let j = 0; j < mx.col; j++){
					mx.data[i][j] = data1.data[i][j] + data2.data[i][j];
				}
			}
			return mx;
		}
		else{
			console.log("dimension incorrect.");
		}
	}

	sub(data){
		if(data instanceof Matrix){
			if(this.row == data.row && this.col == data.col){
				for(let i = 0; i < this.row; i++){
					for(let j = 0; j < this.col; j++){
						this.data[i][j] -= data.data[i][j];
					}
				}
			}
			else{
				console.log("dimension incorrect.");
			}
		}
		else{
			for(let i = 0; i < this.row; i++){
				for(let j = 0; j < this.col; j++){
					this.data[i][j] -= data;
				}
			}
		}
	}

	static sub(data1, data2){
		if(data1.row == data2.row && data1.col == data2.col){
			let mx = new Matrix(data1.row, data1.col);
			for(let i = 0; i < mx.row; i++){
				for(let j = 0; j < mx.col; j++){
					mx.data[i][j] = data1.data[i][j] - data2.data[i][j];
				}
			}
			return mx;
		}
		else{
			console.log("dimension incorrect.");
		}
	}

	emul(data){
		if(data instanceof Matrix){
			if(this.row == data.row && this.col == data.col){
				for(let i = 0; i < this.row; i++){
					for(let j = 0; j < this.col; j++){
						this.data[i][j] *= data.data[i][j];
					}
				}
			}
			else{
				console.log("dimension incorrect.");
			}
		}
		else{
			for(let i = 0; i < this.row; i++){
				for(let j = 0; j < this.col; j++){
					this.data[i][j] *= data;
				}
			}
		}
	}

	mul(data){
		if(this.col == data.row){
			let mx = new Matrix(this.row, data.col);
			for(let i = 0; i < mx.row; i++){
				for(let j = 0; j < mx.col; j++){
					for(let k = 0; k < this.col; k++){
						mx.data[i][j] += this.data[i][k] * data.data[k][j];
					}
				}
			}
			this.data = mx.data;
		}
		else{
			console.log("dimension incorrect.");
		}
	}

	static mul(data1, data2){
		if(data1.col == data2.row){
			let mx = new Matrix(data1.row, data2.col);
			for(let i = 0; i < mx.row; i++){
				for(let j = 0; j < mx.col; j++){
					for(let k = 0; k < data1.col; k++){
						mx.data[i][j] += data1.data[i][k] * data2.data[k][j];
					}
				}
			}
			return mx;
		}
		else{
			console.log("dimension incorrect.");
		}
	}

	static transpose(data){
		let mx = new Matrix(data.col, data.row);
		for(let i = 0; i < mx.row; i++){
			for(let j = 0; j < mx.col; j++){
				mx.data[i][j] = data.data[j][i];
			}
		}
		return mx;
	}

	static equals(data){
		let mx = new Matrix(data.row, data.col);
		for(let i = 0; i < mx.row; i++){
			for(let j = 0; j < mx.col; j++){
				mx.data[i][j] = data.data[i][j]
			}
		}
		return mx;
	}

	static toMatrix(data){
		let mx = new Matrix(data.length, 1);
		for(let i = 0; i < mx.row; i++){
			for(let j = 0; j < mx.col; j++){
				mx.data[i][j] = data[i]; 
			}
		}
		return mx;
	}

	static toArray(data){
		let arr = [];
		for(let i = 0; i < data.length; i++){
			for(let j = 0; j < data[i].length; j++){
				arr.push(data[i][j]);
			}
		}
		return arr;
	}

	map(func){
		for(let i = 0; i < this.row; i++){
			for(let j = 0; j < this.col; j++){
				let data = this.data[i][j];
				this.data[i][j] = func(data);
			}
		}
	}

	print(){
		console.table(this.data);
	}
}