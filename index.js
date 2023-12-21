function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Use the data from the response to do DOM manipulation
    // console.log(data); // Log the data to the console to verify the fetch is working
    console.log("Book number 5: " + data[4].name)
    
    let totalNumberOfPages = 0; // Initialize a variable to store the total number of pages

    for (let index in data) {
      const book = data[index];
      const numberOfPages = book.numberOfPages;
      totalNumberOfPages += numberOfPages;
    }
    console.log("Total number of pages in series: " + totalNumberOfPages); // Log the total number of pages
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
