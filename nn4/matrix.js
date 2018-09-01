class Matrix{

	constructor(row, col){
		this.row = row;
		this.col = col;
		this.data = [];
		for(let i = 0; i < this.row; i ++){
			this.data[i] = [];
			for(let j = 0; j < this.col; j ++){
				this.data[i][j] = 0;
			}
		}
	}

	randomize(){
		for(let i = 0; i < this.row; i ++){
			for(let j = 0; j < this.col; j ++){
				this.data[i][j] = Math.random() * 2 - 1;
			}
		}
	}

	add(mx){
		if(!(mx instanceof Matrix)){
			for(let i = 0; i < this.row; i ++){
				for(let j = 0; j < this.col; j ++){
					this.data[i][j] += mx;
				}
			}
		}
		else{
			if(this.row == mx.row && this.col == mx.col){
				for(let i = 0; i < this.row; i ++){
					for(let j = 0; j < this.col; j ++){
						this.data[i][j] += mx.data[i][j];
					}
				}
			}
		}
	}

	static add(mx1, mx2){
		if(mx1.row == mx2.row && mx1.col == mx2.col){
			let mx3 = new Matrix(mx1.row, mx1.col);
			for(let i = 0; i < mx3.row; i ++){
				for(let j = 0; j < mx3.col; j ++){
					mx3.data[i][j] = mx1.data[i][j] + mx2.data[i][j];
				}
			}
			return mx3;
		}
	}

	sub(mx){
		if(!(mx instanceof Matrix)){
			for(let i = 0; i < this.row; i ++){
				for(let j = 0; j < this.col; j ++){
					this.data[i][j] -= mx;
				}
			}
		}
		else{
			if(this.row == mx.row && this.col == mx.col){
				for(let i = 0; i < this.row; i ++){
					for(let j = 0; j < this.col; j ++){
						this.data[i][j] -= mx.data[i][j];
					}
				}
			}
		}
	}

	static sub(mx1, mx2){
		if(mx1.row == mx2.row && mx1.col == mx2.col){
			let mx3 = new Matrix(mx1.row, mx1.col);
			for(let i = 0; i < mx3.row; i ++){
				for(let j = 0; j < mx3.col; j ++){
					mx3.data[i][j] = mx1.data[i][j] - mx2.data[i][j];
				}
			}
			return mx3;
		}
	}

	mul(mx){
		if(!(mx instanceof Matrix)){
			for(let i = 0; i < this.row; i ++){
				for(let j = 0; j < this.col; j ++){
					this.data[i][j] *= mx;
				}
			}
		}
		else{
			if(this.row == mx.row && this.col == mx.col){
				for(let i = 0; i < this.row; i ++){
					for(let j = 0; j < this.col; j ++){
						this.data[i][j] *= mx.data[i][j];
					}
				}
			}
		}
	}

	static mul(mx1, mx2){
		if(mx1.col == mx2.row){
			let mx3 = new Matrix(mx1.row, mx2.col);
			for(let i = 0; i < mx3.row; i ++){
				for(let j = 0; j < mx3.col; j ++){
					for(let k = 0; k < mx1.col; k ++){
						mx3.data[i][j] += mx1.data[i][k] * mx2.data[k][j];
					}
				}
			}
			return mx3;
		} 
	}

	static transpose(mx){
		let x = new Matrix(mx.col, mx.row);
		for(let i = 0; i < x.row; i ++){
			for(let j = 0; j < x.col; j ++){
				x.data[i][j] = mx.data[j][i];
			}
		}
		return x;
	}

	static toMatrix(arr){
		if(!(arr instanceof Matrix)){
			let mx = new Matrix(arr.length, 1);
			for(let i = 0; i < mx.row; i ++){
				for(let j = 0; j < mx.col; j ++){
					mx.data[i][j] = arr[i];
				}
			}
			return mx;
		}
	}

	map(func){
		for(let i = 0; i < this.row; i ++){
			for(let j = 0; j < this.col; j ++){
				this.data[i][j] = func(this.data[i][j]);
			}
		}
	}

	print(){
		console.table(this.data);
	}

}