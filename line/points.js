class Points{

	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	f(x){
		return this.mapY(3 * x + 2);
	}

	mapX(x){
		return 300 + x;
	}

	mapY(y){
		return 300 - y;
	}

}