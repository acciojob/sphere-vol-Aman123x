function volume_sphere() {
    //Write your code here
	event.preventDefault();
	const radiusInput=document.getElementById("radius");
	const radius=radiusInput.value;
	if(!isNaN(radius)){
		const volume=(4/3)*Math.PI*Math.pow(radius,3);
		const volumeInput=document.getElementById("volume");
		volumeInput.value=volume.toFixed(2);
	}
	else {
    // If the input is not a valid number, display an error message
    alert('Please enter a valid number for the radius.');
  }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
