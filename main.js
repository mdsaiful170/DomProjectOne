const mileStoneData = JSON.parse(ApiData).data;

function displayData() {
  const mileStoneBox = document.querySelector(".milesontMainBOx");
  mileStoneBox.innerHTML = `${mileStoneData
    .map((res) => {
      return `<div class="milsesonte p-3 m-3 border-b border-slate-700 text-base" id="${
        res._id
      }">
        <div class="flex">
          <div class="w-5">
            <input
            type="checkbox"
            onclick="checkboxdata(this,${res._id})"
            class="mr-[5px] align-middle"
            name=""
            id=""
          />
          </div>
          <p class="cursor-pointer" onclick="datalist(this, ${res._id})">
            ${res.name}
            <span><i class="ri-arrow-down-s-line"></i></span>
          </p>
        </div>

        <div class="overflow-hidden max-h-0">
          ${res.modules
            .map((list) => {
              return `<div class="border-b border-slate-700 p-3 m-3 text-base ">
            <p>${list.name}</p>
          </div>`;
            })
            .join("")}
        </div>
      </div>`;
    })
    .join(" ")}`;
}


function datalist(result, num) {
  const dataitems = result.parentNode.parentNode.children[1];
  const height = document.querySelector(".max-h-full");
  const bold = document.querySelector(".font-bold");
  const color = document.querySelector(".text-green-500");
  if (!result.classList.contains("font-bold") && bold) {
    bold.classList.remove("font-bold");
  }
  if (!result.classList.contains("text-green-500") && color) {
    color.classList.remove("text-green-500");
  }
  result.classList.toggle("font-bold");
  result.classList.toggle("text-green-500");

  if (!dataitems.classList.contains("max-h-full") && height)
    height.classList.remove("max-h-full");
  dataitems.classList.toggle("max-h-full");
  showImageBox(num);
}

function showImageBox(num) {
  const imgbox = document.querySelector(".milseStoneImage");
  const title = document.querySelector(".taitle");
  const description = document.querySelector(".description");
  title.innerText = mileStoneData[num].name;
  description.innerText = mileStoneData[num].description;
  imgbox.classList.add("opacity-0");
  imgbox.src = mileStoneData[num].image;
}
const imgbox = document.querySelector(".milseStoneImage");
imgbox.onload = function () {
  this.classList.add("opacity-100");
};

function checkboxdata(sendbox, id) {
  const nodeList = document.querySelector(".nodeList");
  const milestoneBox = document.querySelector(".milesontMainBOx");
  const listId = document.getElementById(id);
  if (sendbox.checked) {
    nodeList.appendChild(listId);
    milestoneBox.removeChild(listId);
  } else {
    nodeList.removeChild(listId);
    milestoneBox.appendChild(listId);
  }
}

displayData();