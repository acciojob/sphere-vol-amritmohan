function volume_sphere() {
    //Write your code here
	let inputRadius = document.getElementById("radius").value;
	let radius = parseFloat(inputRadius);

	if (isNaN(radius) || radius < 0) {
		document.getElementById("volume").value = "NaN";
		return;
	}

	let volume = (4/3)* Math.PI* Math.pow(radius,3);
	document.getElementById("volume").value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
