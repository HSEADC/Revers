initFilterAndSearch();

function initFilterAndSearch() {
  const tags = document.querySelectorAll(".A_Tag");
  const allTag = document.querySelector(".A_Tag.all");
  const searchInput = document.querySelector("#searchInput");

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      if (tag === allTag) {
        tags.forEach((item) => item.classList.remove("active"));
        allTag.classList.add("active");
      } else {
        allTag.classList.remove("active");
        tag.classList.toggle("active");

        const activeTags = document.querySelectorAll(".A_Tag.active:not(.all)");

        if (activeTags.length === 0) {
          allTag.classList.add("active");
        }
      }

      updateCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      updateCards();
    });
  }

  updateCards();
}

function updateCards() {
  const cards = document.querySelectorAll(".O_IndexSectionCard");
  const allTag = document.querySelector(".A_Tag.all");
  const activeTags = document.querySelectorAll(".A_Tag.active:not(.all)");
  const searchInput = document.querySelector("#searchInput");

  const searchValue = searchInput ? searchInput.value.toLowerCase().trim() : "";

  let activeTagClasses = [];

  activeTags.forEach((tag) => {
    const classList = Array.from(tag.classList);

    classList.forEach((className) => {
      if (
        className !== "A_Tag" &&
        className !== "active" &&
        className !== "all"
      ) {
        activeTagClasses.push(className);
      }
    });
  });

  cards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();

    let matchesSearch = true;
    let matchesTag = true;

    if (searchValue !== "") {
      matchesSearch = cardText.includes(searchValue);
    }

    if (!allTag.classList.contains("active") && activeTagClasses.length > 0) {
      matchesTag = activeTagClasses.some((tagClass) =>
        card.classList.contains(tagClass)
      );
    }

    if (matchesSearch && matchesTag) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
