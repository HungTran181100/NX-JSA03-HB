const url = "https://6649e4944032b1331bef22ff.mockapi.io/todos";
const output = document.getElementById("output");

getData();
async function getData() {
  const response = await fetch(url);
  if (response.ok) {
    try {
      const data = await response.json();
      renderData(data);
    } catch (error) {
      console.error(error);
    }
  }
}

function renderData(data) {
  data.forEach((item) => {
    output.innerHTML += `
            <h1>${item.Title}</h1>
            <p>${item.id}</p>
            <button onclick="updateData(${item.id})">Update</button>
            <button onclick="deleteData(${item.id})">Delete</button>

        `;
  });
}

async function createData() {
  let title = prompt("Nhập vào Title mới");
  const createTitle = {
    Title: title,
  };
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createTitle),
  });
  if (response.ok) {
    try {
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  }
}

async function updateData(id) {
  let updateTitle = prompt("Nhập vào Title cần update: ");
  const update = {
    Title: updateTitle,
  };
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(update),
  });
  if (response.ok) {
    try {
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  }
}

async function deleteData(id) {
  const response = await fetch(`${url}/${id}`, { method: "DELETE" });
  if (response.ok) {
    try {
      const data = await response.json();
      getProd();
    } catch (error) {
      console.error(error);
    }
  }
}
