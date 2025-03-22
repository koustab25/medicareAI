// Back Button Functionality
document.getElementById('backButton').addEventListener('click', function () {
  window.location.href = 'index.html';
});

// Medicine Data
const medicines = {
  paracetamol: {
    price: "₹20",
    sideEffects: "Nausea, stomach pain, loss of appetite.",
    usage: "Used to treat fever and mild to moderate pain.",
    availability: "Available in Store 1 and Store 3.",
  },
  amoxicillin: {
    price: "₹50",
    sideEffects: "Diarrhea, nausea, vomiting.",
    usage: "Used to treat bacterial infections.",
    availability: "Available in Store 2 and Store 4.",
  },
  cetirizine: {
    price: "₹30",
    sideEffects: "Drowsiness, dry mouth, fatigue.",
    usage: "Used to treat allergies and hay fever.",
    availability: "Available in Store 1 and Store 2.",
  },
  ibuprofen: {
    price: "₹40",
    sideEffects: "Stomach pain, heartburn, dizziness.",
    usage: "Used to treat pain, fever, and inflammation.",
    availability: "Available in Store 3 and Store 4.",
  },
  lisinopril: {
    price: "₹60",
    sideEffects: "Dizziness, headache, cough.",
    usage: "Used to treat high blood pressure.",
    availability: "Available in Store 1 and Store 4.",
  },
  metformin: {
    price: "₹35",
    sideEffects: "Nausea, diarrhea, stomach upset.",
    usage: "Used to treat type 2 diabetes.",
    availability: "Available in Store 2 and Store 3.",
  },
  albuterol: {
    price: "₹45",
    sideEffects: "Nervousness, shakiness, headache.",
    usage: "Used to treat asthma.",
    availability: "Available in Store 1 and Store 3.",
  },
  fluoxetine: {
    price: "₹55",
    sideEffects: "Nausea, insomnia, headache.",
    usage: "Used to treat anxiety and depression.",
    availability: "Available in Store 2 and Store 4.",
  },
  sertraline: {
    price: "₹65",
    sideEffects: "Nausea, diarrhea, insomnia.",
    usage: "Used to treat depression.",
    availability: "Available in Store 1 and Store 3.",
  },
  loratadine: {
    price: "₹25",
    sideEffects: "Headache, fatigue, dry mouth.",
    usage: "Used to treat allergies.",
    availability: "Available in Store 2 and Store 4.",
  },
  ferrousSulfate: {
    price: "₹40",
    sideEffects: "Constipation, stomach upset.",
    usage: "Used to treat anemia.",
    availability: "Available in Store 1 and Store 2.",
  },
  omeprazole: {
    price: "₹50",
    sideEffects: "Headache, diarrhea.",
    usage: "Used to treat acid reflux.",
    availability: "Available in Store 3 and Store 4.",
  },
};

// Symptom and Disease Data
const symptoms = [
  "Fever", "Cough", "Headache", "Fatigue", "Sore Throat",
  "Nausea", "Vomiting", "Diarrhea", "Dizziness", "Muscle Pain",
  "Joint Pain", "Swelling", "Numbness", "Tingling", "Chest Pain",
  "Shortness of Breath", "Runny Nose", "Sneezing", "Itchy Eyes",
  "Rash", "Abdominal Pain", "Loss of Appetite", "Weight Loss",
  "Weight Gain", "Insomnia", "Anxiety", "Depression", "Blurred Vision",
  "Frequent Urination", "Pale Skin",
];

const diseases = {
  flu: {
    symptoms: ["Fever", "Cough", "Headache", "Fatigue", "Muscle Pain"],
    difficulty: "⭐⭐",
    medicine: "Paracetamol",
  },
  commonCold: {
    symptoms: ["Cough", "Sore Throat", "Runny Nose", "Sneezing"],
    difficulty: "⭐",
    medicine: "Cetirizine",
  },
  migraine: {
    symptoms: ["Headache", "Nausea", "Dizziness", "Blurred Vision"],
    difficulty: "⭐⭐⭐",
    medicine: "Ibuprofen",
  },
  gastroenteritis: {
    symptoms: ["Nausea", "Vomiting", "Diarrhea", "Abdominal Pain"],
    difficulty: "⭐⭐⭐⭐",
    medicine: "Amoxicillin",
  },
  hypertension: {
    symptoms: ["Headache", "Dizziness", "Chest Pain", "Shortness of Breath"],
    difficulty: "⭐⭐⭐⭐⭐",
    medicine: "Lisinopril",
  },
  diabetes: {
    symptoms: ["Frequent Urination", "Weight Loss", "Fatigue", "Blurred Vision"],
    difficulty: "⭐⭐⭐⭐",
    medicine: "Metformin",
  },
  asthma: {
    symptoms: ["Cough", "Shortness of Breath", "Chest Pain", "Wheezing"],
    difficulty: "⭐⭐⭐",
    medicine: "Albuterol",
  },
  arthritis: {
    symptoms: ["Joint Pain", "Swelling", "Numbness", "Tingling"],
    difficulty: "⭐⭐⭐⭐",
    medicine: "Ibuprofen",
  },
  anxiety: {
    symptoms: ["Anxiety", "Insomnia", "Fatigue", "Headache"],
    difficulty: "⭐⭐⭐",
    medicine: "Fluoxetine",
  },
  depression: {
    symptoms: ["Depression", "Insomnia", "Weight Loss", "Fatigue"],
    difficulty: "⭐⭐⭐⭐",
    medicine: "Sertraline",
  },
  allergy: {
    symptoms: ["Itchy Eyes", "Sneezing", "Runny Nose", "Rash"],
    difficulty: "⭐⭐",
    medicine: "Loratadine",
  },
  fibromyalgia: {
    symptoms: ["Joint Pain", "Fatigue", "Muscle Pain", "Numbness"],
    difficulty: "⭐⭐⭐⭐",
    medicine: "Ibuprofen",
  },
  anemia: {
    symptoms: ["Fatigue", "Dizziness", "Shortness of Breath", "Pale Skin"],
    difficulty: "⭐⭐⭐",
    medicine: "Ferrous Sulfate",
  },
};

// Doctor Data
const doctors = [
  {
    name: "Dr. Ananya Banerjee",
    specialization: "General Physician",
    fee: "₹300",
    diseases: ["flu", "commonCold", "hypertension"],
    hospital: "Nabonneshok Hospital 1",
    availability: "10:00 AM - 2:00 PM",
  },
  {
    name: "Dr. Rajesh Mukherjee",
    specialization: "General Physician",
    fee: "₹350",
    diseases: ["flu", "commonCold", "diabetes"],
    hospital: "Nabonneshok Hospital 2",
    availability: "11:00 AM - 3:00 PM",
  },
  {
    name: "Dr. Priya Chakraborty",
    specialization: "General Physician",
    fee: "₹400",
    diseases: ["flu", "commonCold", "asthma"],
    hospital: "Nabonneshok Hospital 3",
    availability: "9:00 AM - 1:00 PM",
  },
  {
    name: "Dr. Arjun Roy",
    specialization: "General Physician",
    fee: "₹450",
    diseases: ["flu", "commonCold", "arthritis"],
    hospital: "Nabonneshok Hospital 4",
    availability: "12:00 PM - 4:00 PM",
  },
  {
    name: "Dr. Sneha Biswas",
    specialization: "General Physician",
    fee: "₹500",
    diseases: ["flu", "commonCold", "anxiety"],
    hospital: "Nabonneshok Hospital 1",
    availability: "2:00 PM - 6:00 PM",
  },
  {
    name: "Dr. Amit Khan",
    specialization: "Cardiologist",
    fee: "₹800",
    diseases: ["hypertension", "migraine"],
    hospital: "Nabonneshok Hospital 2",
    availability: "10:00 AM - 2:00 PM",
  },
  {
    name: "Dr. Rina Das",
    specialization: "Cardiologist",
    fee: "₹850",
    diseases: ["hypertension", "diabetes"],
    hospital: "Nabonneshok Hospital 3",
    availability: "11:00 AM - 3:00 PM",
  },
  {
    name: "Dr. Soham Mondal",
    specialization: "Cardiologist",
    fee: "₹900",
    diseases: ["hypertension", "arthritis"],
    hospital: "Nabonneshok Hospital 4",
    availability: "9:00 AM - 1:00 PM",
  },
  {
    name: "Dr. Meghna Sen",
    specialization: "Dermatologist",
    fee: "₹600",
    diseases: ["allergy", "rash"],
    hospital: "Nabonneshok Hospital 1",
    availability: "12:00 PM - 4:00 PM",
  },
  {
    name: "Dr. Ankit Roy",
    specialization: "Dermatologist",
    fee: "₹650",
    diseases: ["allergy", "eczema"],
    hospital: "Nabonneshok Hospital 2",
    availability: "2:00 PM - 6:00 PM",
  },
  {
    name: "Dr. Ritu Sharma",
    specialization: "Dermatologist",
    fee: "₹700",
    diseases: ["allergy", "psoriasis"],
    hospital: "Nabonneshok Hospital 3",
    availability: "10:00 AM - 2:00 PM",
  },
  {
    name: "Dr. Neha Gupta",
    specialization: "Psychiatrist",
    fee: "₹700",
    diseases: ["anxiety", "depression"],
    hospital: "Nabonneshok Hospital 4",
    availability: "11:00 AM - 3:00 PM",
  },
  {
    name: "Dr. Vikram Singh",
    specialization: "Psychiatrist",
    fee: "₹750",
    diseases: ["anxiety", "depression"],
    hospital: "Nabonneshok Hospital 1",
    availability: "9:00 AM - 1:00 PM",
  },
  {
    name: "Dr. Anjali Rao",
    specialization: "Psychiatrist",
    fee: "₹800",
    diseases: ["anxiety", "depression"],
    hospital: "Nabonneshok Hospital 2",
    availability: "12:00 PM - 4:00 PM",
  },
  {
    name: "Dr. Sameer Patel",
    specialization: "Rheumatologist",
    fee: "₹850",
    diseases: ["arthritis", "fibromyalgia"],
    hospital: "Nabonneshok Hospital 3",
    availability: "2:00 PM - 6:00 PM",
  },
  {
    name: "Dr. Kavita Joshi",
    specialization: "Rheumatologist",
    fee: "₹900",
    diseases: ["arthritis", "fibromyalgia"],
    hospital: "Nabonneshok Hospital 4",
    availability: "10:00 AM - 2:00 PM",
  },
  {
    name: "Dr. Rakesh Malhotra",
    specialization: "Rheumatologist",
    fee: "₹950",
    diseases: ["arthritis", "fibromyalgia"],
    hospital: "Nabonneshok Hospital 1",
    availability: "11:00 AM - 3:00 PM",
  },
  {
    name: "Dr. Sanjay Verma",
    specialization: "Neurologist",
    fee: "₹1000",
    diseases: ["migraine", "numbness", "tingling"],
    hospital: "Nabonneshok Hospital 2",
    availability: "10:00 AM - 2:00 PM",
  },
  {
    name: "Dr. Priyanka Reddy",
    specialization: "Neurologist",
    fee: "₹1050",
    diseases: ["migraine", "numbness", "tingling"],
    hospital: "Nabonneshok Hospital 3",
    availability: "11:00 AM - 3:00 PM",
  },
  {
    name: "Dr. Arvind Kumar",
    specialization: "Neurologist",
    fee: "₹1100",
    diseases: ["migraine", "numbness", "tingling"],
    hospital: "Nabonneshok Hospital 4",
    availability: "9:00 AM - 1:00 PM",
  },
  {
    name: "Dr. Nandini Kapoor",
    specialization: "Endocrinologist",
    fee: "₹900",
    diseases: ["diabetes", "weightGain", "weightLoss"],
    hospital: "Nabonneshok Hospital 1",
    availability: "12:00 PM - 4:00 PM",
  },
  {
    name: "Dr. Rajiv Menon",
    specialization: "Endocrinologist",
    fee: "₹950",
    diseases: ["diabetes", "weightGain", "weightLoss"],
    hospital: "Nabonneshok Hospital 2",
    availability: "2:00 PM - 6:00 PM",
  },
  {
    name: "Dr. Sunita Rao",
    specialization: "Endocrinologist",
    fee: "₹1000",
    diseases: ["diabetes", "weightGain", "weightLoss"],
    hospital: "Nabonneshok Hospital 3",
    availability: "10:00 AM - 2:00 PM",
  },
  {
    name: "Dr. Karthik Iyer",
    specialization: "Gastroenterologist",
    fee: "₹850",
    diseases: ["abdominalPain", "nausea", "vomiting"],
    hospital: "Nabonneshok Hospital 4",
    availability: "11:00 AM - 3:00 PM",
  },
  {
    name: "Dr. Anjali Desai",
    specialization: "Gastroenterologist",
    fee: "₹900",
    diseases: ["abdominalPain", "nausea", "vomiting"],
    hospital: "Nabonneshok Hospital 1",
    availability: "9:00 AM - 1:00 PM",
  },
  {
    name: "Dr. Rohan Shah",
    specialization: "Gastroenterologist",
    fee: "₹950",
    diseases: ["abdominalPain", "nausea", "vomiting"],
    hospital: "Nabonneshok Hospital 2",
    availability: "12:00 PM - 4:00 PM",
  },
];

// Cart System
let cart = [];

// Show Health Calculators Section
document.getElementById('healthCalculators').addEventListener('click', function () {
  document.getElementById('optionsSection').classList.add('hidden');
  document.getElementById('healthCalculatorsSection').classList.remove('hidden');
});

// Handle Health Calculator Form Submission
document.getElementById('healthCalculatorForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get user inputs
  const height = parseFloat(document.getElementById('height').value); // in cm
  const weight = parseFloat(document.getElementById('weight').value); // in kg
  const age = parseFloat(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const activityLevel = parseFloat(document.getElementById('activityLevel').value);

  // Calculate BMI
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

  // Determine BMI category
  let category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  // Display BMI result
  document.getElementById('bmiValue').textContent = bmi;
  document.getElementById('bmiCategory').textContent = category;
  document.getElementById('bmiResult').classList.remove('hidden');

  // Calculate BMR (Basal Metabolic Rate)
  let bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Calculate TDEE (Total Daily Energy Expenditure)
  const tdee = bmr * activityLevel;

  // Determine calorie recommendation
  let recommendedCalories, advice;
  if (category === 'Underweight') {
    recommendedCalories = tdee + 250; // Calorie surplus
    advice = 'You are underweight. Aim for a calorie surplus of 250 kcal/day to gain weight.';
  } else if (category === 'Normal weight') {
    recommendedCalories = tdee; // Maintenance calories
    advice = 'You are at a normal weight. Maintain your current calorie intake.';
  } else {
    recommendedCalories = tdee - 250; // Calorie deficit
    advice = 'You are overweight/obese. Aim for a calorie deficit of 250 kcal/day to lose weight.';
  }

  // Display calorie recommendation
  document.getElementById('maintenanceCalories').textContent = tdee.toFixed(0);
  document.getElementById('recommendedCalories').textContent = recommendedCalories.toFixed(0);
  document.getElementById('calorieAdvice').textContent = advice;
  document.getElementById('calorieResult').classList.remove('hidden');
});

// Handle Medicine Selection
document.getElementById('selectMedicine').addEventListener('click', function () {
  document.getElementById('optionsSection').classList.add('hidden');
  document.getElementById('medicineSection').classList.remove('hidden');
});

// Display Medicine Details
document.getElementById('medicineList').addEventListener('change', function () {
  const selectedMedicine = this.value;
  const details = medicines[selectedMedicine];

  if (details) {
    document.getElementById('medicinePrice').textContent = details.price;
    document.getElementById('medicineSideEffects').textContent = details.sideEffects;
    document.getElementById('medicineUsage').textContent = details.usage;
    document.getElementById('medicineAvailability').textContent = details.availability;
    document.getElementById('medicineDetails').classList.remove('hidden');
  } else {
    document.getElementById('medicineDetails').classList.add('hidden');
  }
});

// Add to Cart Functionality
document.getElementById('addToCart').addEventListener('click', function () {
  const selectedMedicine = document.getElementById('medicineList').value;
  const quantity = parseInt(document.getElementById('medicineQuantity').value);
  const medicineDetails = medicines[selectedMedicine];

  if (medicineDetails && quantity > 0) {
    const totalPrice = parseInt(medicineDetails.price.replace('₹', '')) * quantity;
    cart.push({
      name: selectedMedicine,
      quantity: quantity,
      price: medicineDetails.price,
      totalPrice: `₹${totalPrice}`,
    });
    alert(`${quantity} ${selectedMedicine}(s) added to cart.`);
  } else {
    alert('Please select a valid medicine and quantity.');
  }
});

// Proceed to Billing with Cart
document.getElementById('proceedToBilling').addEventListener('click', function () {
  if (cart.length > 0) {
    const totalAmount = cart.reduce((sum, item) => sum + parseInt(item.totalPrice.replace('₹', '')), 0);

    // Store medicine details in localStorage
    const medicineDetails = {
      type: 'medicine',
      items: cart,
      totalAmount: totalAmount,
    };
    localStorage.setItem('paymentDetails', JSON.stringify(medicineDetails));

    // Redirect to payment page
    window.location.href = 'payment.html';
  } else {
    alert('Your cart is empty. Please add medicines to proceed.');
  }
});

// Handle Symptom Test
document.getElementById('takeSymptomTest').addEventListener('click', function () {
  document.getElementById('optionsSection').classList.add('hidden');
  document.getElementById('symptomTestSection').classList.remove('hidden');
  populateSymptoms();
});

// Populate Symptoms
function populateSymptoms() {
  const symptomList = document.getElementById('symptomList');
  symptomList.innerHTML = symptoms
    .map(
      (symptom) => `
        <label>
          <input type="checkbox" name="symptom" value="${symptom}">
          ${symptom}
        </label>
      `
    )
    .join('');
}

// Diagnose Disease
document.getElementById('diagnose').addEventListener('click', function () {
  const selectedSymptoms = Array.from(
    document.querySelectorAll('input[name="symptom"]:checked')
  ).map((checkbox) => checkbox.value);

  const diagnosedDisease = diagnoseDisease(selectedSymptoms);

  if (diagnosedDisease) {
    const disease = diseases[diagnosedDisease];
    const medicineDetails = medicines[disease.medicine.toLowerCase()];

    document.getElementById('diseaseName').textContent = diagnosedDisease;
    document.getElementById('treatmentDifficulty').textContent = disease.difficulty;
    document.getElementById('recommendedMedicine').textContent = disease.medicine;
    document.getElementById('medicinePriceAfterTest').textContent = medicineDetails.price;
    document.getElementById('medicineAvailabilityAfterTest').textContent = medicineDetails.availability;

    // Show all doctors
    populateAllDoctors();

    // Show diagnosis result section
    document.getElementById('diagnosisResult').classList.remove('hidden');

    // Scroll to the diagnosis result section
    document.getElementById('diagnosisResult').scrollIntoView({ behavior: 'smooth' });
  } else {
    // No disease detected, show "Consult Doctor" button
    document.getElementById('diagnosisResult').innerHTML = `
      <h3>No Disease Detected</h3>
      <p>Your symptoms do not match any known diseases. Please consult a doctor.</p>
      <button id="consultDoctorDirectly">Consult Doctor</button>
    `;
    document.getElementById('diagnosisResult').classList.remove('hidden');

    // Scroll to the diagnosis result section
    document.getElementById('diagnosisResult').scrollIntoView({ behavior: 'smooth' });
  }
});

// Diagnose Disease Logic
function diagnoseDisease(selectedSymptoms) {
  let bestMatch = null;
  let maxMatches = 0;

  for (const disease in diseases) {
    const diseaseSymptoms = diseases[disease].symptoms;
    const matchedSymptoms = diseaseSymptoms.filter((symptom) =>
      selectedSymptoms.includes(symptom)
    ).length;

    if (matchedSymptoms > maxMatches) {
      maxMatches = matchedSymptoms;
      bestMatch = disease;
    }
  }

  // Return the best match if at least 1 symptom matches
  return maxMatches >= 1 ? bestMatch : null;
}

// Populate All Doctors
function populateAllDoctors() {
  const doctorList = document.getElementById('doctorList');
  doctorList.innerHTML = doctors
    .map(
      (doctor, index) => `
        <label>
          <input type="radio" name="doctor" value="${index}">
          <strong>${doctor.name}</strong> - ${doctor.specialization} (Fee: ${doctor.fee})<br>
          <small>Hospital: ${doctor.hospital}, Availability: ${doctor.availability}</small>
        </label>
      `
    )
    .join('');
}

// Handle Doctor Selection
document.getElementById('doctorList').addEventListener('change', function () {
  const selectedDoctorIndex = document.querySelector('input[name="doctor"]:checked').value;
  const selectedDoctor = doctors[selectedDoctorIndex];

  // Generate random date and time within the next 7 days
  const appointmentDate = new Date(Date.now() + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000);
  const appointmentTime = `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60)} ${Math.random() > 0.5 ? "PM" : "AM"}`;

  // Display appointment details
  document.getElementById('selectedDoctor').textContent = selectedDoctor.name;
  document.getElementById('appointmentDate').textContent = appointmentDate.toDateString();
  document.getElementById('appointmentTime').textContent = appointmentTime;
  document.getElementById('consultationFee').textContent = selectedDoctor.fee;

  // Show appointment details section
  document.getElementById('appointmentDetails').classList.remove('hidden');

  // Scroll to the appointment details section
  document.getElementById('appointmentDetails').scrollIntoView({ behavior: 'smooth' });
});

// Proceed to Billing (Doctor Consultation)
document.getElementById('proceedToBillingAfterConsultation').addEventListener('click', function () {
  const selectedDoctorIndex = document.querySelector('input[name="doctor"]:checked').value;
  const selectedDoctor = doctors[selectedDoctorIndex];

  // Get appointment details
  const appointmentDate = document.getElementById('appointmentDate').textContent;
  const appointmentTime = document.getElementById('appointmentTime').textContent;
  const consultationFee = selectedDoctor.fee.replace('₹', '');

  // Store appointment details in localStorage
  const appointmentDetails = {
    type: 'appointment',
    doctorName: selectedDoctor.name,
    specialization: selectedDoctor.specialization,
    date: appointmentDate,
    time: appointmentTime,
    venue: selectedDoctor.hospital, // Use the doctor's hospital as the venue
    fee: consultationFee,
    totalAmount: consultationFee,
  };
  localStorage.setItem('paymentDetails', JSON.stringify(appointmentDetails));

  // Redirect to payment page
  window.location.href = 'payment.html';
});

// Handle "Consult Doctor" Button
document.addEventListener('click', function (event) {
  if (event.target && event.target.id === 'consultDoctorDirectly') {
    document.getElementById('diagnosisResult').classList.add('hidden');
    document.getElementById('fullDoctorList').classList.remove('hidden');
    populateAllDoctors();
  }
});

// Handle "Buy Medicine Directly" Button
document.addEventListener('click', function (event) {
  if (event.target && event.target.id === 'buyMedicineDirectly') {
    const recommendedMedicine = document.getElementById('recommendedMedicine').textContent;
    const medicineDetails = medicines[recommendedMedicine.toLowerCase()];

    if (medicineDetails) {
      const totalAmount = medicineDetails.price.replace('₹', ''); // Remove ₹ symbol

      // Store medicine details in localStorage
      const medicinePurchase = {
        type: 'medicine',
        items: [
          {
            name: recommendedMedicine,
            quantity: 1,
            price: medicineDetails.price,
            totalPrice: medicineDetails.price,
          },
        ],
        totalAmount: totalAmount,
      };
      localStorage.setItem('paymentDetails', JSON.stringify(medicinePurchase));

      // Redirect to payment page
      window.location.href = 'payment.html';
    }
  }
});

// Confirm Payment
document.getElementById('confirmPayment').addEventListener('click', function () {
  alert('Payment confirmed. Thank you!');
  // Reset the form or redirect to another page
});