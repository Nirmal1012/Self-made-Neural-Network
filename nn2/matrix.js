class Matrix{

	constructor(row, col){
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

	add(mx){
		if(mx instanceof Matrix){
			if(this.row == mx.row && this.col == mx.col){
				for(let i = 0; i < this.row; i++){
					for(let j = 0; j < this.col; j++){
						this.data[i][j] += mx.data[i][j];
					}
				}
			}
		}
		else{
			for(let i = 0; i < this.row; i++){
				for(let j = 0; j < this.col; j++){
					this.data[i][j] += mx;
				}
			}
		}
	}

	static add(mx1, mx2){
		if(mx1.row == mx2.row && mx1.col == mx2.col){
			let mx3 = new Matrix(mx1.row, mx1.col);
			for(let i = 0; i < mx3.row; i++){
				for(let j = 0; j < mx3.col; j++){
					mx3.data[i][j] = mx1.data[i][j] + mx2.data[i][j];
				}
			}
			return mx3;
		}
	}

	sub(mx){
		if(mx instanceof Matrix){
			if(this.row == mx.row && this.col == mx.col){
				for(let i = 0; i < this.row; i++){
					for(let j = 0; j < this.col; j++){
						this.data[i][j] -= mx.data[i][j];
					}
				}
			}
		}
		else{
			for(let i = 0; i < this.row; i++){
				for(let j = 0; j < this.col; j++){
					this.data[i][j] -= mx;
				}
			}
		}
	}

	static sub(mx1, mx2){
		if(mx1.row == mx2.row && mx1.col == mx2.col){
			let mx3 = new Matrix(mx1.row, mx1.col);
			for(let i = 0; i < mx3.row; i++){
				for(let j = 0; j < mx3.col; j++){
					mx3.data[i][j] = mx1.data[i][j] - mx2.data[i][j];
				}
			}
			return mx3;
		}
	}

	mul(mx){
		if(mx instanceof Matrix){
			if(this.row == mx.row && this.col == mx.col){
				for(let i = 0; i < this.row; i++){
					for(let j = 0; j < this.col; j++){
						this.data[i][j] *= mx.data[i][j];
					}
				}
			}
		}
		else{
			for(let i = 0; i < this.row; i++){
				for(let j = 0; j < this.col; j++){
					this.data[i][j] *= mx;
				}
			}
		}
	}

	static mul(mx1, mx2){
		if(mx1.col == mx2.row){
			let mx3 = new Matrix(mx1.row, mx2.col);
			for(let i = 0; i < mx3.row; i++){
				for(let j = 0; j < mx3.col; j++){
					for(let k = 0; k < mx1.col; k++){
						mx3.data[i][j] += mx1.data[i][k] * mx2.data[k][j];
					}
				}
			}
			return mx3;
		}
	}

	map(func){
		for(let i = 0; i < this.row; i++){
			for(let j = 0; j < this.col; j++){
				let x = this.data[i][j];
				this.data[i][j] = func(x);
			}
		}
	}

	static transpose(mx){
		let x = new Matrix(mx.col, mx.row);
		for(let i = 0; i < x.row; i++){
			for(let j = 0; j < x.col; j++){
				x.data[i][j] = mx.data[j][i];
			}
		}
		return x;
	}

	static equals(mx){
		for(let i = 0; i < this.row; i++){
			for(let j = 0; j < this.col; j++){
				this.data[i][j] = mx.data[i][j];
			}
		}
	}

	static toMatrix(arr){
		if(!(arr instanceof Matrix)){
			let x = new Matrix(arr.length, 1);
			for(let i = 0; i < x.row; i++){
				x.data[i] = [];
				for(let j = 0; j < x.col; j++){
					x.data[i][j] = arr[i];
				}
			}
			return x;
		}
	}

	print(){
		console.table(this.data);
	}

}