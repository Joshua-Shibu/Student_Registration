const imageInput = document.getElementById('image');
const uploadedImage = document.getElementById('uploaded-image');

        // Add an event listener to the file input
    imageInput.addEventListener('change', function () {
        const file = imageInput.files[0];

        if (file) {
                // Create a FileReader to read the selected image
            const reader = new FileReader();

            reader.onload = function (e) {
                    // Set the source, width, and height of the img element
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = 'block'; // Show the image
                uploadedImage.width = 100; // Set the width
                uploadedImage.height = 100; // Set the height
            };

                // Read the image file as a data URL
            reader.readAsDataURL(file);
        } else {
                // If no file is selected, clear the img element
                uploadedImage.src = '';
                uploadedImage.style.display = 'none';
        }
    });

const form = document.getElementById("upload-form");
const output = document.getElementById("output");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const name = document.getElementById('Name').value;
    const email = document.getElementById('email').value;

    const selectedGender = document.querySelector('input[name="gender"]:checked');
    let gender = '';
    if(selectedGender){
        gender = selectedGender.value;
    }

    const skills = document.querySelectorAll('input[name="skills"]:checked');
    const selectedSkills = [];
    skills.forEach(function (checkbox) {
        selectedSkills.push(checkbox.value);
    });
    let Skills = '';
    if(selectedSkills.length>0){
        Skills = selectedSkills.join(', ');
    } 

    const imageInput = document.getElementById('image');
    const selectedImage = imageInput.files[0];

    // Check if an image is selected
    if (selectedImage) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Create an <img> element to display the selected image
            const imageElement = document.createElement('img');
            imageElement.src = e.target.result;
            imageElement.width = 120;
            imageElement.height = 120;
            imageElement.classList.add('positioned-image');
            const outputData = `<b>Name:</b> ${name}<br><br><b>Email:</b> ${email}<br><br><b>Gender:</b> ${gender}<br><br><b>Skills:</b> ${Skills}`;

            // Append the image element to the output
            output.innerHTML = outputData;
            output.appendChild(imageElement);
        };

        // Read the selected image as a data URL
        reader.readAsDataURL(selectedImage);
    } else {
        const outputData = `<b>Name:</b> ${name}<br><br><b>Email:</b> ${email}<br><br><b>Gender:</b> ${gender}<br><br><b>Skills:</b> ${Skills}`;
        output.innerHTML = outputData;
    }
    
});