function filterLinks() {
    const selectedDomain = document.getElementById('domainSelect').value;
    const linksList = document.getElementById('linksList');
    linksList.innerHTML = ""; // Clear previous links

    let links = [];

    // Adding links based on the domain selection
    if (selectedDomain === "vlsi") {
        links = [
            { text: "How to overcome obstacles while starting your career in VLSI", url: "https://www.linkedin.com/pulse/how-overcome-obstacles-while-starting-your-career-vlsi-sriharsha-pudi/" },
            { text: "Top 5 reasons to pursue a career in VLSI design", url: "https://www.takshila-vlsi.com/top-5-reasons-to-pursue-a-career-in-vlsi-design/#:~:text=One%20of%20the%20main%20reasons,technologies%20and%20improve%20current%20ones." },
            { text: "Mantra for success in VLSI", url: "https://www.vlsi-expert.com/2017/09/mantra-for-success.html" }
        ];
    } else if (selectedDomain === "aiml") {
        links = [
            { text: "Introduction to AI and Machine Learning", url: "https://www.example.com/aiml-intro" },
            { text: "Machine Learning: Success and Challenges", url: "https://www.example.com/aiml-success" }
        ];
    } else if (selectedDomain === "fullstack") {
        links = [
            { text: "Building Full Stack Applications: A Guide", url: "https://www.example.com/fullstack-guide" },
            { text: "Success Stories in Full Stack Development", url: "https://www.example.com/fullstack-success" }
        ];
    } else if (selectedDomain === "communications") {
        links = [
            { text: "Success in Communications Engineering", url: "https://www.example.com/communications-success" },
            { text: "Overcoming Challenges in Communication Systems", url: "https://www.example.com/communications-challenges" }
        ];
    }

    // Display the links
    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.textContent = link.text;
        li.appendChild(a);
        linksList.appendChild(li);
    }); // <-- Added closing bracket here
}

// Placeholder function for the "Go to Dashboard" button
function goToDashboard() {
    window.location.href = "dashboard.html"; // Replace with actual dashboard link
}
