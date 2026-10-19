
const itemList = document.getElementById("itemList");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

let itemCount = 0;

addBtn.addEventListener("click", function() {
    itemCount++;

    const newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCount;

    itemList.appendChild(newItem);
});

removeBtn.addEventListener("click", function() {
    if (itemList.lastElementChild) {
        itemList.lastElementChild.remove();
    }
});
