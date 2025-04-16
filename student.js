// let projects = [];
// let remarks = ["Guide: Good", "Reviewer: Needs Improvement"];

// function addProject() {
//   const title = document.getElementById("projectTitle").value;
//   const desc = document.getElementById("projectDesc").value;
//   if (title && desc && projects.length < 3) {
//     projects.push({ title, desc });
//     displayProjects();
//   } else {
//     alert("Fill details properly or limit reached (3 projects).");
//   }
// }

// function displayProjects() {
//   const list = document.getElementById("projectList");
//   list.innerHTML = '';
//   projects.forEach((p, index) => {
//     list.innerHTML += `<div class='student'><strong>${p.title}</strong><p>${p.desc}</p></div>`;
//   });

//   let remarkHTML = remarks.map(r => `<p>${r}</p>`).join('');
//   document.getElementById("remarksDisplay").innerHTML = remarkHTML;
// }
let savedProjects = [];
let feedback = {
  guide: [],
  reviewer: []
};

function saveProjects() {
  savedProjects = [
    { title: document.getElementById("p1title").value, desc: document.getElementById("p1desc").value },
    { title: document.getElementById("p2title").value, desc: document.getElementById("p2desc").value },
    { title: document.getElementById("p3title").value, desc: document.getElementById("p3desc").value },
  ];
  displayProjects();
  sessionStorage.setItem("studentProjects", JSON.stringify(savedProjects));
}

function displayProjects() {
  const list = document.getElementById("projectList");
  list.innerHTML = "<h3>📁 Your Projects:</h3>";
  savedProjects.forEach((p, i) => {
    if (p.title && p.desc) {
      list.innerHTML += `
        <div class='project-box'>
          <strong>${p.title} 🔧</strong>
          <p>${p.desc}</p>
        </div>`;
    }
  });

  let remarks = "";
  if (feedback.guide.length || feedback.reviewer.length) {
    remarks += `<div class="emoji">👨‍🏫 Guide: ${feedback.guide.join(", ")}</div>`;
    remarks += `<div class="emoji">🧑‍💼 Reviewer: ${feedback.reviewer.join(", ")}</div>`;
  } else {
    remarks = "<p>No feedback yet.</p>";
  }
  document.getElementById("remarksDisplay").innerHTML = remarks;
}

// Allow feedback to be injected when set via sessionStorage
window.onload = () => {
  const storedProjects = sessionStorage.getItem("studentProjects");
  if (storedProjects) {
    savedProjects = JSON.parse(storedProjects);
    displayProjects();
  }
  const g = sessionStorage.getItem("guideFeedback");
  const r = sessionStorage.getItem("reviewerFeedback");
  if (g) feedback.guide = JSON.parse(g);
  if (r) feedback.reviewer = JSON.parse(r);
  displayProjects();
};

