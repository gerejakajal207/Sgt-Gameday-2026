// You need to create a Student Ranking Dashboard where a list of students with their scores is displayed. Users should be able to sort the list by the highest score and also search for a specific student by name.
// Features to Implement:
// Display a Table/List of Students.
// Each student should have a name and a score.
// Example: Name Score Alice 85 Bob 92 Charlie 78
// Sorting by Score (Descending Order)
// Add a "Sort by Score" button. When clicked, students should be sorted from highest to lowest score.
// Search Filter for Student Name
// Add an input box where users can type a student’s name. Filter the list to only show matching students as the user types.
// User Friendly UI is must

const studentTable = document.querySelector("#student-table tbody");
const sortBtn = document.querySelector("#sort-btn");
const inputBar = document.querySelector("#input-bar");
const addStudentBtn = document.querySelector("#add-student-btn");
const nameInput = document.querySelector("#name-input");
const scoreInput = document.querySelector("#score-input");

let data = JSON.parse(localStorage.getItem("data")) || [
  {
    name: "Alice",
    score: 85,
  },
  {
    name: "Bob",
    score: 92,
  },
  {
    name: "Charlie",
    score: 78,
  },
];

populateTable(data);

// Sort
sortBtn.addEventListener("click", () => {
  data.sort((a, b) => b.score - a.score);
  populateTable(data);
  saveToLocalStorage();
});

// Search
inputBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filteredData = data.filter((student) =>
    student.name.toLowerCase().includes(value)
  );
  populateTable(filteredData);
});

// Add student
addStudentBtn.addEventListener("click", () => addStudent());
scoreInput.addEventListener("keypress", (event) => {
  if (event.code === "Enter") {
    addStudent();
  }
});

nameInput.addEventListener("keypress", (event) => {
  if (event.code === "Enter") {
    addStudent();
  }
});


function addStudent() {
  const name = nameInput.value;
  const score = +scoreInput.value;

  if (!name || !score) return;

  data.push({ name, score });
  populateTable(data);
  saveToLocalStorage();

  nameInput.value = "";
  scoreInput.value = "";
}

function populateTable(data) {
  studentTable.innerHTML = "";

  data.forEach((student) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.textContent = student.name;
    td2.textContent = student.score;

    tr.appendChild(td1);
    tr.appendChild(td2);
    studentTable.appendChild(tr);
  });
}

function saveToLocalStorage() {
  localStorage.setItem("data", JSON.stringify(data));
}
