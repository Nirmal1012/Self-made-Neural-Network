class Points{

	constructor(){
		this.x = [random(width), random(height)];
		if(this.x[0] > this.x[1]){
			this.label = 1;
		}
		else{
			this.label = -1;
		}
	}

}