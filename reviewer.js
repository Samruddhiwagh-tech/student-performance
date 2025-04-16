// function addPreset(text) {
//     document.getElementById("reviewComment").value += text + ". ";
//   }
  
//   function submitReview() {
//     const comment = document.getElementById("reviewComment").value;
//     document.getElementById("reviewOutput").innerHTML = `<strong>Review Submitted:</strong><p>${comment}</p>`;
//   }
  

const presets = [
    "Good", "Partially Good", "Needs Improvement",
    "Rebuild Key Concepts", "Not Properly Done", "Improved"
  ];
  
  window.onload = () => {
    const studentProjects = JSON.parse(sessionStorage.getItem("studentProjects") || "[]");
    const container = document.getElementById("reviewerProjects");
  
    studentProjects.forEach((proj, i) => {
      if (proj.title) {
        const div = document.createElement("div");
        div.className = "student";
        let buttons = presets.map(p => `<button onclick="submitReviewerFeedback(${i}, '${p}')">${p}</button>`).join('');
        div.innerHTML = `
          <p><strong>📘 ${proj.title}</strong></p>
          <p>${proj.desc}</p>
          <div>${buttons}</div>
          <div id="reviewed${i}"></div>
        `;
        container.appendChild(div);
      }
    });
  };
  
  function submitReviewerFeedback(index, text) {
    let feedback = JSON.parse(sessionStorage.getItem("reviewerFeedback") || "[]");
    feedback[index] = text;
    sessionStorage.setItem("reviewerFeedback", JSON.stringify(feedback));
    document.getElementById(`reviewed${index}`).innerHTML = "✅ Submitted!";
  }
  