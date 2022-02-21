//more courses button from the courses page
let morecoursebtn = document.querySelector(".load-more .btn");

morecoursebtn.onclick = () => {
  document.querySelectorAll(".courses .box-container .hide").forEach((show) => {
    show.style.display = "block";
  });
  morecoursebtn.style.display = "none";
};

