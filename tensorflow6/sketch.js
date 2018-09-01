function setup() {
	noCanvas();
	frameRate(5);
	
}

function draw () {
	arr = [];
	for(let i = 0; i < 150000; i ++) {
		arr[i] = floor(random(1, 10));
	}
	siz = [500, 300];

	// Removes the memory leak of all tensors

	tf.tidy(() => {
		data1 = tf.tensor2d(arr, siz);
		data2 = tf.transpose(data1);
		data3 = data1.matMul(data2);
	});
	
	// data1 = tf.tensor2d(arr, siz);
	// data2 = tf.transpose(data1);
	// data3 = data1.matMul(data2);

	// Removes the memory leak 1 by 1
	// data1.dispose();
	// data2.dispose();
	// data3.dispose();
}