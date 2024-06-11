const ol = document.querySelector("#getOl");

    function addTodo() {
      let getInput = document.querySelector("#inp");
      let liNode = document.createElement("li");
      let liTxt = document.createTextNode(getInput.value);
      liNode.appendChild(liTxt);
      ol.appendChild(liNode);
      getInput.value = "";

      let editNode = document.createElement("button");
      editNode.innerText = "Edit Item";
      editNode.onclick = () => {
        let newText = prompt("Start Editing for todo here===>", liTxt.textContent);
        if (newText !== null) {
          liTxt.textContent = newText;
        }
      };
      liNode.appendChild(editNode);
    }

    function deleteAll() {
      ol.innerHTML = "";
    }
