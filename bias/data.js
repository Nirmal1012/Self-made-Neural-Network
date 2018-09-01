class Points{

	constructor(){
		this.x = [1, random(600), random(600)];
		if(this.x[1] > this.x[2]){
			this.label = 1;
		}
		else{
			this.label = -1;
		}
	}

}