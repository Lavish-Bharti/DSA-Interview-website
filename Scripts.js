 
const companyLogos = {
  amazon: "https://logo.clearbit.com/amazon.com",
  google: "https://logo.clearbit.com/google.com",
  microsoft: "https://logo.clearbit.com/microsoft.com",
  flipkart: "https://logo.clearbit.com/flipkart.com",
  apple: "https://logo.clearbit.com/apple.com",
  intel: "https://logo.clearbit.com/intel.com",
  nvidia: "https://logo.clearbit.com/nvidia.com",
  goldman: "https://logo.clearbit.com/gs.com",
  bmw: "https://logo.clearbit.com/bmw.com",
  vmware: "https://logo.clearbit.com/vmware.com",
  byjus: "https://logo.clearbit.com/byjus.com",
  cisco: "https://logo.clearbit.com/cisco.com",
  oracle: "https://logo.clearbit.com/oracle.com",
  accenture: "https://logo.clearbit.com/accenture.com",
  tcs: "https://logo.clearbit.com/tcs.com",
  infosys: "https://logo.clearbit.com/infosys.com",
  capgemini: "https://logo.clearbit.com/capgemini.com",
  deloitte: "https://logo.clearbit.com/deloitte.com",
  wipro: "https://logo.clearbit.com/wipro.com",

  // Manually added where Clearbit doesn't work
  hcl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/HCL_Technologies_Logo.svg",
  adobe: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Logo.png",
  ibm: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
};

const companies = Object.keys(questions2);
const companyList = document.getElementById("company-list");

companies.forEach(company => {
  const card = document.createElement("div");
  card.className = "card";

  const logoKey = company.toLowerCase();
  const logo = companyLogos[logoKey] || "https://via.placeholder.com/32";

  card.innerHTML = `
    <img src="${logo}" class="company-logo" alt="${company}" />
    <span>${company.toUpperCase()}</span>
  `;

  card.addEventListener("click", () => {
    window.location.href = `topics.html?company=${company}`;
  });

  companyList.appendChild(card);
});



 

function renderQuestions(company) {
  companyList.classList.add("hidden");
  questionView.classList.remove("hidden");

  const data = questions2[company];
  if (!data) {
    questionView.innerHTML = `<h2>No data found for ${company}</h2>`;
    return;
  }

  questionView.innerHTML = `<h2>${company.toUpperCase()} Interview Questions</h2>`;

  Object.keys(data).forEach(topic => {
    const topicData = data[topic];
    const topicSection = document.createElement("section");
    topicSection.innerHTML = `<h3>🔹 ${topic.toUpperCase()}</h3>`;

    ["easy", "medium", "hard"].forEach(level => {
      const problems = topicData[level];
      if (problems && problems.length) {
        const levelDiv = document.createElement("div");
        levelDiv.innerHTML = `<strong>${level.toUpperCase()}</strong>`;
        const ul = document.createElement("ul");

        problems.forEach(q => {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${q.link}" target="_blank">${q.title}</a>`;
          ul.appendChild(li);
        });

        levelDiv.appendChild(ul);
        topicSection.appendChild(levelDiv);
      }
    });

    questionView.appendChild(topicSection);
  });

  // Optional Back Button
  const backBtn = document.createElement("button");
  backBtn.textContent = "⬅ Back to Companies";
  backBtn.onclick = () => {
    questionView.classList.add("hidden");
    companyList.classList.remove("hidden");
  };
  questionView.appendChild(backBtn);
}

 