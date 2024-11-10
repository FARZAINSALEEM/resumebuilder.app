document.getElementById("resume-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;

    // Generate the resume content
    const resumeContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h4>Skills</h4>
        <p>${skills}</p>

        <h4>Work Experience</h4>
        <p>${experience}</p>

        <h4>Education</h4>
        <p>${education}</p>
    `;

    // Display the resume in the generated-resume div
    document.getElementById("generated-resume").innerHTML = resumeContent;

    // Show the generated resume section
    document.getElementById("resume-section").style.display = "block";
});
