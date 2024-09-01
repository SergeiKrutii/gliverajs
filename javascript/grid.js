async function getData() {
  const response = await fetch("./javascript/MOCK_DATA.json");
  const users = await response.json();

  const svgForSearch = `<svg class="members__searchicon" width="24px" height="24px">
                <use href="../images/svg_sprite.svg#icon-search"></use>
              </svg>`;

  new gridjs.Grid({
    search: true,
    pagination: {
      limit: 8,
      summary: true,
    },
    style: {
      header: { border: "none", boxShadow: "none", borderTop: "none" },
      th: {
        borderLeft: "none",
        borderRight: "none",
        border: "none",
        padding: 0,
        backgroundColor: "transparent",
        color: "var(--th-text-color)",
        fontWeight: 500,
        fontSize: "14px",
        letterSpacing: "-0.001em",
      },
      td: {
        boxShadow: "none",
        borderLeft: "none",
        borderRight: "none",
        padding: "5px 0px",
        overflow: "hidden",
        color: "var(--td-text-color)",
        fontWeight: 500,
        fontSize: "14px",
        letterSpacing: "-0.001em",
      },
      footer: {
        boxShadow: "none",
      },
    },
    className: {
      thead: "table__thead",
      td: "table__body__td",
      tr: "table__body__tr__aft",
    },
    search: {
      placeholder: "Search",
    },
    columns: [
      {
        id: "customer_name",
        name: "Customer Name",
      },
      {
        id: "company",
        name: "Company",
      },
      {
        id: "phone_number",
        name: "Phone Number",
      },
      {
        id: "email",
        name: "Email",
      },
      {
        id: "country",
        name: "Country",
      },
      {
        id: "status",
        name: "Status",
        formatter: (cell, row) => {
          return gridjs.h(
            "div",
            {
              className: cell
                ? "table__status active"
                : "table__status inactive",
            },
            cell ? "Active" : "Inactive"
          );
        },
      },
    ],
    data: users,
  }).render(document.getElementById("table"));

  const searchWrapper = document.querySelector(".gridjs-search");
  const searchInput = document.querySelector(".gridjs-search-input");

  if (searchInput && searchWrapper) {
    searchInput.placeholder = "Search";
    searchWrapper.classList.add("members__search__wrapper");
    searchWrapper.innerHTML = svgForSearch;
  }

  const observer = new MutationObserver(() => {
    const prevButton = document.querySelector(
      ".gridjs-pagination .gridjs-pages button:first-child"
    );
    const nextButton = document.querySelector(
      ".gridjs-pagination .gridjs-pages button:last-child"
    );

    if (prevButton && nextButton) {
      nextButton.textContent = ">";
      prevButton.textContent = "<";
    }
  });

  observer.observe(document.querySelector(".gridjs-pagination"), {
    childList: true,
    subtree: true,
  });
}
getData();
