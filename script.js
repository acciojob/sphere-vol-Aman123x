function volume_sphere(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the radius input value
  const radiusInput = document.getElementById('radius');
  const radius = parseFloat(radiusInput.value);

  // Check if the input is a valid number
  if (!isNaN(radius)) {
    // Calculate the volume of the sphere using the formula: (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the volume input field
    const volumeInput = document.getElementById('volume');
    volumeInput.value = volume.toFixed(2); // Display the result with 2 decimal places
  } else {
    // If the input is not a valid number, display an error message
    alert('Please enter a valid number for the radius.');
  }
}

// Attach the form submit event handler to the form with the id "MyForm"
window.onload = function() {
  const form = document.getElementById('MyForm');
  form.onsubmit = volume_sphere;
};
