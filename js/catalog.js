const catalogBtn = document.getElementById("main__catalog-btn");
const closeCatalogBtn = document.getElementById("catalog__sidebar-close");
const catalogList = document.getElementById("catalog__sidebar-list");

catalogBtn.addEventListener("click", () => {
  const img = document.getElementById("main__catalog-icon");
  const catalog = document.getElementById("main__catalog");

  if (catalog.style.display === "flex") {
    catalog.style.display = "none";
    img.src = "./images/icons/menu.svg";
  } else {
    catalog.style.display = "flex";
    img.src = "./images/icons/close-white.svg";
  }
});

closeCatalogBtn &&
  closeCatalogBtn.addEventListener("click", () => {
    const catalog = document.getElementById("main__catalog");
    const img = document.getElementById("main__catalog-icon");

    catalog.style.display = "none";
    img.src = "./images/icons/menu.svg";
  });

catalogList.addEventListener("click", (e) => {
  console.log(e.target);
});
