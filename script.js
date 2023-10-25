function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	const radiusInput=document.getElementById("radius");
	const radius=parseFloat(radiusInput.value);
	if(!isNaN(radius)){
		const volume=(4/3)*Math.PI*Math.pow(radius,3);
		const volumeInput=document.getElementById("volume");
		volumeInput.value=volume;
	}
	// else {
 //    // If the input is not a valid number, display an error message
 //    alert('Please enter a valid number for the radius.');
  }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
