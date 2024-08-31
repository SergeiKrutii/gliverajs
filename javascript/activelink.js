document.querySelectorAll(".sidebar__item-link").forEach((link) => {
  if (link.textContent.trim() === "Customers") {
    link.closest(".sidebar__item").classList.add("sidebar__acive-link");
    link.style.color = "#ffffff";

    const listItem = link.closest(".sidebar__item");
    listItem.querySelectorAll("use").forEach((use) => {
      use.setAttribute("stroke", "#ffffff");
    });
  }
});
