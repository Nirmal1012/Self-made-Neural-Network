function setup() {
	noCanvas();
	// const data1 = tf.scalar(3.14);
	// data1.print();

	let size1 = [3, 3];
	let size2 = [2, 3, 3];

	let value = [];

	for(let i = 0; i < 18; i ++){
		value[i] = floor(random(100));
	}

	// const data2 = tf.tensor2d(value, size1); // size and value is in array
	// data2.print();

	// const data3 = tf.tensor3d(value, size2);
	// data3.print();

	// const data4 = tf.zeros(size2);
	// data4.print();

	// const data5 = tf.ones(size2); // two 3 x 3 matrix inside a array
	// data5.print();

	// const data6 = data5.clone(); // copies data of tensor
	// data6.print();

	// const data7 = tf.linspace(0, 9, 10);
	// data7.print();

	const data8 = tf.eye(5, 5); // here size is not in array unlike others
	data8.print();
}

function draw() {

}