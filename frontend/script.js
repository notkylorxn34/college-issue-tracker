let issueList = [];

const issueForm = document.getElementById("issueForm");
const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const categoryInput = document.getElementById("categoryInput");
const issueTable = document.getElementById("issueTable");
const emptyText = document.getElementById("emptyText");

issueForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleValue = titleInput.value.trim();
  const descValue = descInput.value.trim();
  const categoryValue = categoryInput.value;

  if (titleValue === "" || descValue === "" || categoryValue === "") {
    alert("Please fill all fields");
    return;
  }

  const newIssue = {
    title: titleValue,
    category: categoryValue,
    status: "Open"
  };

  issueList.push(newIssue);

  showIssues();

  titleInput.value = "";
  descInput.value = "";
  categoryInput.value = "";
});

function showIssues() {
  issueTable.innerHTML = "";

  if (issueList.length === 0) {
    emptyText.style.display = "block";
    return;
  } else {
    emptyText.style.display = "none";
  }

  for (let i = 0; i < issueList.length; i++) {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = issueList[i].title;

    const categoryCell = document.createElement("td");
    categoryCell.textContent = issueList[i].category;

    const statusCell = document.createElement("td");
    statusCell.textContent = issueList[i].status;

    row.appendChild(titleCell);
    row.appendChild(categoryCell);
    row.appendChild(statusCell);

    issueTable.appendChild(row);
  }
}
