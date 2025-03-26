const doctors = [
    { name: "Dr. John Doe", rating: 4.5, specialty: "General Physician" },
    { name: "Dr. Jane Smith", rating: 4.8, specialty: "Cardiologist" },
];

const doctorList = document.getElementById("doctor-list");

doctors.forEach(doctor => {
    const card = document.createElement("div");
    card.innerHTML = `
        <h3>${doctor.name}</h3>
        <p>Rating: ${doctor.rating}</p>
        <p>Specialty: ${doctor.specialty}</p>
    `;
    doctorList.appendChild(card);
});

const form = document.getElementById("appointment-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
});

const profileForm = document.getElementById("profile-form");
profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
});
const feedbackForm = document.getElementById("feedback-form");
feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
});