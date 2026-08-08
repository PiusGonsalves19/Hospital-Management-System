// Check Login
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

function showSection(sectionName) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionName).classList.remove("hidden");
}

const patientForm = document.getElementById("patientForm");

patientForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const patientData = {
        name: document.getElementById("name").value,
        age: Number(document.getElementById("age").value),
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value,
        disease: document.getElementById("disease").value
    };

    try {

        const response = await fetch("http://localhost:3000/patients/add", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(patientData)
        });

        const data = await response.json();

        if (response.ok) {

            document.getElementById("message").textContent =
                "✅ Patient Added Successfully!";

            patientForm.reset();

        } else {

            document.getElementById("message").textContent =
                "❌ Error: " + data.message;
        }

    } catch (error) {

        document.getElementById("message").textContent =
            "❌ Cannot connect to server.";
    }
});


async function loadPatients() {

    try {

        const response = await fetch("http://localhost:3000/patients");

        const patients = await response.json();

        const tableBody = document.getElementById("patientTableBody");

        tableBody.innerHTML = "";

        patients.forEach(patient => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.gender}</td>
                <td>${patient.phone}</td>
                <td>${patient.disease}</td>
                <td>
                    <button onclick="editPatient('${patient._id}')">
                        ✏️ Edit
                    </button>

                    <button onclick="deletePatient('${patient._id}')">
                        🗑️ Delete
                    </button>
                </td>
            `;

            tableBody.appendChild(row);
        });

    } catch (error) {

        console.log("Error loading patients:", error);

    }
}


// Add Doctor
const doctorForm = document.getElementById("doctorForm");

doctorForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const doctorData = {
        name: document.getElementById("doctorName").value,
        specialization: document.getElementById("specialization").value,
        phone: document.getElementById("doctorPhone").value,
        email: document.getElementById("doctorEmail").value,
        experience: Number(document.getElementById("experience").value)
    };

    try {

        const response = await fetch("http://localhost:3000/doctors/add", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(doctorData)
        });

        const data = await response.json();

        if (response.ok) {

            document.getElementById("doctorMessage").textContent =
                "✅ Doctor Added Successfully!";

            doctorForm.reset();

        } else {

            document.getElementById("doctorMessage").textContent =
                "❌ Error: " + data.message;
        }

    } catch (error) {

        document.getElementById("doctorMessage").textContent =
            "❌ Cannot connect to server.";
    }
});

// Load all doctors
async function loadDoctors() {

    try {

        const response = await fetch("http://localhost:3000/doctors");

        const doctors = await response.json();

        const tableBody = document.getElementById("doctorTableBody");

        tableBody.innerHTML = "";

        doctors.forEach(doctor => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${doctor.name}</td>
                <td>${doctor.specialization}</td>
                <td>${doctor.phone}</td>
                <td>${doctor.email}</td>
                <td>${doctor.experience}</td>
                <td>
                    <button onclick="editDoctor('${doctor._id}')">
                        ✏️ Edit
                    </button>

                    <button onclick="deleteDoctor('${doctor._id}')">
                        🗑️ Delete
                    </button>
                </td>
            `;

            tableBody.appendChild(row);
        });

    } catch (error) {

        console.log("Error loading doctors:", error);

    }
}

// Add Appointment
const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const appointmentData = {
        patientName: document.getElementById("appointmentPatient").value,
        doctorName: document.getElementById("appointmentDoctor").value,
        date: document.getElementById("appointmentDate").value,
        time: document.getElementById("appointmentTime").value,
        reason: document.getElementById("appointmentReason").value
    };

    try {

        const response = await fetch("http://localhost:3000/appointments/add", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(appointmentData)
        });

        const data = await response.json();

        if (response.ok) {

            document.getElementById("appointmentMessage").textContent =
                "✅ Appointment Added Successfully!";

            appointmentForm.reset();

        } else {

            document.getElementById("appointmentMessage").textContent =
                "❌ Error: " + data.message;
        }

    } catch (error) {

        document.getElementById("appointmentMessage").textContent =
            "❌ Cannot connect to server.";
    }
});


// Load all appointments
async function loadAppointments() {

    try {

        const response = await fetch("http://localhost:3000/appointments");

        const appointments = await response.json();

        const tableBody = document.getElementById("appointmentTableBody");

        tableBody.innerHTML = "";

        appointments.forEach(appointment => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${appointment.patientName}</td>
                <td>${appointment.doctorName}</td>
                <td>${appointment.date}</td>
                <td>${appointment.time}</td>
                <td>${appointment.reason}</td>
                <td>
                    <button onclick="editAppointment('${appointment._id}')">
                        ✏️ Edit
                    </button>

                    <button onclick="deleteAppointment('${appointment._id}')">
                        🗑️ Delete
                    </button>
                </td>
            `;

            tableBody.appendChild(row);
        });

    } catch (error) {

        console.log("Error loading appointments:", error);

    }
}

// Add Bill
const billingForm = document.getElementById("billingForm");

billingForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const billingData = {
        patientName: document.getElementById("billingPatient").value,
        amount: Number(document.getElementById("billingAmount").value),
        paymentMethod: document.getElementById("paymentMethod").value,
        paymentStatus: document.getElementById("paymentStatus").value,
        date: document.getElementById("billingDate").value
    };

    try {

        const response = await fetch("http://localhost:3000/billing/add", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(billingData)
        });

        const data = await response.json();

        if (response.ok) {

            document.getElementById("billingMessage").textContent =
                "✅ Bill Added Successfully!";

            billingForm.reset();

        } else {

            document.getElementById("billingMessage").textContent =
                "❌ Error: " + data.message;
        }

    } catch (error) {

        document.getElementById("billingMessage").textContent =
            "❌ Cannot connect to server.";
    }
});

// Load all bills
async function loadBills() {

    try {

        const response = await fetch("http://localhost:3000/billing");

        const bills = await response.json();

        const tableBody = document.getElementById("billingTableBody");

        tableBody.innerHTML = "";

        bills.forEach(bill => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${bill.patientName}</td>
                <td>₹${bill.amount}</td>
                <td>${bill.paymentMethod}</td>
                <td>${bill.paymentStatus}</td>
                <td>${bill.date}</td>
                <td>
                    <button onclick="editBill('${bill._id}')">
                        ✏️ Edit
                    </button>

                    <button onclick="deleteBill('${bill._id}')">
                        🗑️ Delete
                    </button>
                </td>
            `;

            tableBody.appendChild(row);
        });

    } catch (error) {

        console.log("Error loading bills:", error);

    }
}

// Load Dashboard Statistics
async function loadDashboard() {

    try {

        const response = await fetch("http://localhost:3000/dashboard");

        const data = await response.json();

        console.log("Dashboard Data:", data);

        document.getElementById("totalPatients").textContent =
            data.totalPatients;

        document.getElementById("totalDoctors").textContent =
            data.totalDoctors;

        document.getElementById("totalAppointments").textContent =
            data.totalAppointments;

        document.getElementById("totalBills").textContent =
            data.totalBills;

        // Calculate Total Revenue
        const billsResponse = await fetch(
            "http://localhost:3000/billing"
        );

        const bills = await billsResponse.json();

        const totalRevenue = bills.reduce(
            (total, bill) => total + Number(bill.amount || 0),
            0
        );

        document.getElementById("totalRevenue").textContent =
            "₹" + totalRevenue;

    }
     catch (error) {

        console.log("Error loading dashboard:", error);

    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadDashboard();
    loadRecentAppointments();
    loadRecentBills();
});


// Load Recent Appointments on Dashboard
async function loadRecentAppointments() {

    try {

        const response = await fetch(
            "http://localhost:3000/appointments"
        );

        const appointments = await response.json();

        const tableBody =
            document.getElementById("recentAppointmentsBody");

        tableBody.innerHTML = "";

        // Show latest 5 appointments
        const recentAppointments = appointments.slice(-5).reverse();

        recentAppointments.forEach(appointment => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${appointment.patientName}</td>
                <td>${appointment.doctorName}</td>
                <td>${appointment.date}</td>
                <td>${appointment.time}</td>
                <td>${appointment.reason}</td>
            `;

            tableBody.appendChild(row);

        });

    } catch (error) {

        console.log(
            "Error loading recent appointments:",
            error
        );

    }
}

// Delete Patient
async function deletePatient(id) {

    if (!confirm("Are you sure you want to delete this patient?")) {
        return;
    }

    try {

        const response = await fetch(
            `http://localhost:3000/patients/${id}`,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert("✅ Patient Deleted Successfully!");

            loadPatients();

        } else {

            alert("❌ " + data.message);

        }

    } catch (error) {

        alert("❌ Cannot connect to server.");

    }
}

// Delete Doctor
async function deleteDoctor(id) {

    if (!confirm("Are you sure you want to delete this doctor?")) {
        return;
    }

    try {

        const response = await fetch(
            `http://localhost:3000/doctors/${id}`,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert("✅ Doctor Deleted Successfully!");

            loadDoctors();

        } else {

            alert("❌ " + data.message);

        }

    } catch (error) {

        alert("❌ Cannot connect to server.");

    }
}

// Delete Appointment
async function deleteAppointment(id) {

    if (!confirm("Are you sure you want to delete this appointment?")) {
        return;
    }

    try {

        const response = await fetch(
            `http://localhost:3000/appointments/${id}`,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert("✅ Appointment Deleted Successfully!");

            loadAppointments();

        } else {

            alert("❌ " + data.message);

        }

    } catch (error) {

        alert("❌ Cannot connect to server.");

    }
}

// Delete Bill
async function deleteBill(id) {

    if (!confirm("Are you sure you want to delete this bill?")) {
        return;
    }

    try {

        const response = await fetch(
            `http://localhost:3000/billing/${id}`,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert("✅ Bill Deleted Successfully!");

            loadBills();

            // Update dashboard count
            loadDashboard();

        } else {

            alert("❌ " + data.message);

        }

    } catch (error) {

        alert("❌ Cannot connect to server.");

    }
}

async function editPatient(id) {

    const name = prompt("Enter patient name:");
    if (name === null) return;

    const age = prompt("Enter age:");
    if (age === null) return;

    const gender = prompt("Enter gender:");
    if (gender === null) return;

    const phone = prompt("Enter phone:");
    if (phone === null) return;

    const disease = prompt("Enter disease:");
    if (disease === null) return;

    const updatedPatient = {
        name: name,
        age: Number(age),
        gender: gender,
        phone: phone,
        disease: disease
    };

    try {

        const response = await fetch(
            `http://localhost:3000/patients/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedPatient)
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert("✅ Patient Updated Successfully!");

            loadPatients();

        } else {

            alert("❌ " + data.message);

        }

    } catch (error) {

        alert("❌ Cannot connect to server.");

    }
}

// Edit Doctor
async function editDoctor(id) {

    const name = prompt("Enter doctor name:");
    if (name === null) return;

    const specialization = prompt("Enter specialization:");
    if (specialization === null) return;

    const phone = prompt("Enter phone:");
    if (phone === null) return;

    const email = prompt("Enter email:");
    if (email === null) return;

    const experience = prompt("Enter experience:");
    if (experience === null) return;

    const updatedDoctor = {
        name: name,
        specialization: specialization,
        phone: phone,
        email: email,
        experience: Number(experience)
    };

    try {

        const response = await fetch(
            `http://localhost:3000/doctors/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedDoctor)
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert("✅ Doctor Updated Successfully!");

            loadDoctors();

        } else {

            alert("❌ " + data.message);

        }

    } catch (error) {

        alert("❌ Cannot connect to server.");

    }
}

// Edit Appointment
async function editAppointment(id) {

    const patientName = prompt("Enter patient name:");
    if (patientName === null) return;

    const doctorName = prompt("Enter doctor name:");
    if (doctorName === null) return;

    const date = prompt("Enter appointment date:");
    if (date === null) return;

    const time = prompt("Enter appointment time:");
    if (time === null) return;

    const reason = prompt("Enter reason:");
    if (reason === null) return;

    const updatedAppointment = {
        patientName,
        doctorName,
        date,
        time,
        reason
    };

    try {

        const response = await fetch(
            `http://localhost:3000/appointments/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedAppointment)
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert("✅ Appointment Updated Successfully!");

            loadAppointments();

        } else {

            alert("❌ " + data.message);

        }

    } catch (error) {

        alert("❌ Cannot connect to server.");

    }
}

// Edit Bill
async function editBill(id) {

    const patientName = prompt("Enter patient name:");
    if (patientName === null) return;

    const amount = prompt("Enter amount:");
    if (amount === null) return;

    const paymentMethod = prompt("Enter payment method:");
    if (paymentMethod === null) return;

    const paymentStatus = prompt("Enter payment status:");
    if (paymentStatus === null) return;

    const date = prompt("Enter date:");
    if (date === null) return;

    const updatedBill = {
        patientName,
        amount: Number(amount),
        paymentMethod,
        paymentStatus,
        date
    };

    try {

        const response = await fetch(
            `http://localhost:3000/billing/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedBill)
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert("✅ Bill Updated Successfully!");

            loadBills();
            loadDashboard();

        } else {

            alert("❌ " + data.message);

        }

    } catch (error) {

        alert("❌ Cannot connect to server.");

    }
}

// Patient Search
document.getElementById("patientSearch").addEventListener("input", function () {

    const searchText = this.value.toLowerCase();

    const rows = document.querySelectorAll("#patientTableBody tr");

    rows.forEach(row => {

        const patientData = row.textContent.toLowerCase();

        if (patientData.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});

// Doctor Search
document.getElementById("doctorSearch").addEventListener("input", function () {

    const searchText = this.value.toLowerCase();

    const rows = document.querySelectorAll("#doctorTableBody tr");

    rows.forEach(row => {

        const doctorData = row.textContent.toLowerCase();

        if (doctorData.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});

// Appointment Search
document.getElementById("appointmentSearch").addEventListener("input", function () {

    const searchText = this.value.toLowerCase();

    const rows = document.querySelectorAll("#appointmentTableBody tr");

    rows.forEach(row => {

        const appointmentData = row.textContent.toLowerCase();

        if (appointmentData.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});

// Billing Search
document.getElementById("billingSearch").addEventListener("input", function () {

    const searchText = this.value.toLowerCase();

    const rows = document.querySelectorAll("#billingTableBody tr");

    rows.forEach(row => {

        const billData = row.textContent.toLowerCase();

        if (billData.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});

// Load Recent Bills on Dashboard
async function loadRecentBills() {

    try {

        const response = await fetch(
            "http://localhost:3000/billing"
        );

        const bills = await response.json();

        const tableBody =
            document.getElementById("recentBillsBody");

        tableBody.innerHTML = "";

        // Show latest 5 bills
        const recentBills = bills.slice(-5).reverse();

        recentBills.forEach(bill => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${bill.patientName}</td>
                <td>₹${bill.amount}</td>
                <td>${bill.paymentMethod}</td>
                <td>${bill.paymentStatus}</td>
                <td>${bill.date}</td>
            `;

            tableBody.appendChild(row);

        });

    } catch (error) {

        console.log("Error loading recent bills:", error);

    }
}

// Logout
function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";
}

