const searchInputEl = document.querySelector(".search-input");
const languageEl = document.querySelectorAll(".languages-box .language");

searchInputEl.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  languageEl.forEach((language) => {
    const text = language.textContent.toLowerCase();

    // You can use this code if you want all languages to be initially invisible and become visible when the search term matches

    //for this we will also have to make a change in the css file which is to set li display none

    // if (!searchTerm) {
    //   language.style.display = "none";
    //   language.innerHTML = text;
    //   return;
    // }

    const isMatch = text.includes(searchTerm);
    language.style.display = isMatch ? "block" : "none";

    if (isMatch) {
      const startIndex = text.toLowerCase().indexOf(searchTerm);
      const endIndex = startIndex + searchTerm.length;
      const highlightedText =
        text.substring(0, startIndex) +
        `<mark>${text.substring(startIndex, endIndex)}</mark>` +
        text.substring(endIndex);
      language.innerHTML = highlightedText;
    }
  });
});
