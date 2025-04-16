// function giveFeedback(studentId, feedback) {
//     document.getElementById(`feedback-${studentId}`).innerText = "Guide Feedback: " + feedback;
//   }
window.onload = () => {
    const studentProjects = JSON.parse(sessionStorage.getItem("studentProjects") || "[]");
    const container = document.getElementById("guideProjects");
  
    studentProjects.forEach((proj, index) => {
      if (proj.title) {
        const div = document.createElement("div");
        div.className = "student";
        div.innerHTML = `
          <p><strong>📘 ${proj.title}</strong></p>
          <p>${proj.desc}</p>
          <input type="text" id="guideComment${index}" placeholder="Enter feedback..." />
          <button onclick="submitGuideFeedback(${index})">Send Feedback</button>
          <div id="submitted${index}"></div>
        `;
        container.appendChild(div);
      }
    });
  };
  
  function submitGuideFeedback(i) {
    const text = document.getElementById(`guideComment${i}`).value;
    if (text) {
      let feedback = JSON.parse(sessionStorage.getItem("guideFeedback") || "[]");
      feedback[i] = text;
      sessionStorage.setItem("guideFeedback", JSON.stringify(feedback));
      document.getElementById(`submitted${i}`).innerHTML = "✅ Sent!";
    }
  }
  
  