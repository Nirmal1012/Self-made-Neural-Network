class Points{

	constructor(){
		this.x = [1, random(-1, 1) * width / 2, random(-1, 1) * height / 2];
		if(this.x[2] > f(this.x[1])){
			this.label = 1;
		}
		else{
			this.label = -1;
		}
	}

}