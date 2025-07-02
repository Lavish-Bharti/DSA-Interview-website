// // const urlParams = new URLSearchParams(window.location.search);
// // const company = urlParams.get('company');
// // const heading = document.getElementById('heading');
// // const topicsList = document.getElementById('topics-list');

// // heading.textContent = `${company.toUpperCase()} Topics`;

// // const data = questions2[company];

// // if (!data) {
// //   topicsList.innerHTML = `<p>No data found for ${company}</p>`;
// // } else {
// //   const topics = Object.keys(data);
// //   topics.forEach(topic => {
// //   const card = document.createElement('div');
// //   card.className = 'topic-card';
// //   card.innerHTML = `<span class="bullet"></span> ${topic.toUpperCase()}`;
// //   card.addEventListener('click', () => {
// //     window.location.href = `questions.html?company=${company}&topic=${topic}`;
// //   });
// //   topicsList.appendChild(card);
// // });
// // }
// const urlParams = new URLSearchParams(window.location.search);
// const company = urlParams.get('company');
// const heading = document.getElementById('heading');
// const topicsList = document.getElementById('topics-list');

// heading.textContent = `${company.toUpperCase()} Topics`;

// const customOrder = [
//   'arrays',
//   'strings',
//   'sorting',
//   'recursion',
//   'linkedLists',
//   'trees',
//   'graphs',
//   'dp'
// ];

// const data = questions2[company];

// if (!data) {
//   topicsList.innerHTML = `<p>No data found for ${company}</p>`;
// } else {
//   customOrder.forEach(topic => {
//     if (data[topic]) {
//       const card = document.createElement('div');
//       card.className = 'topic-card';
//       const emoji = emojiMap[topic] || "📘";
      
//         window.location.href = `questions.html?company=${company}&topic=${topic}`;
//       });
//       topicsList.appendChild(card);
//     }
//   });
// }
const urlParams = new URLSearchParams(window.location.search);
const company = urlParams.get('company');
const heading = document.getElementById('heading');
const topicsList = document.getElementById('topics-list');

heading.textContent = `${company.toUpperCase()} Topics`;

const customOrder = [
  'arrays',
  'strings',
  'sorting',
  'recursion',
  'linkedLists',
  'stack',
  'queue',
  'trees',
  'graphs',
  'dp'
];

// const emojiMap = {
//   arrays: "📦",
//   strings: "🔤",
//   sorting: "🔃",
//   recursion: "🔁",
//   linkedLists: "🔗",
//   trees: "🌳",
//   graphs: "🌐",
//   dp: "🧩"
// };
const emojiMap = {
  arrays: "📦",
  strings: "🔤",
  sorting: "🔃",
  recursion: "🔁",
  linkedLists: "🔗",
  stack: "🥞",
  queue: "🚶",
  trees: "🌳",
  graphs: "🌐",
  dp: "🧩"
};

const data = questions2[company];

if (!data) {
  topicsList.innerHTML = `<p>No data found for ${company}</p>`;
} else {
  customOrder.forEach(topic => {
    if (data[topic]) {
      const card = document.createElement('div');
      card.className = 'topic-card';
      const emoji = emojiMap[topic] || "📘";
      card.innerHTML = `<span class="bullet">${emoji}</span> ${topic.toUpperCase()}`;  // ✅ This line was missing

      card.addEventListener('click', () => {
        window.location.href = `questions.html?company=${company}&topic=${topic}`;
      });

      topicsList.appendChild(card);
    }
  });
}