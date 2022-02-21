//faq buttons
let accordion = document.querySelectorAll(
    ".faq .accordion-container .accordion"
  );
  
  accordion.forEach((acco) => {
    acco.onclick = () => {
      accordion.forEach((dion) => dion.classList.remove("active"));
      acco.classList.toggle("active");
    };
  });