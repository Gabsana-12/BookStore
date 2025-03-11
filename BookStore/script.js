const books = [
    { title: "1984", author: "Джордж Оруел", description: "Антиутопична класика, описваща тоталитарно общество.", id: 1 },
    { title: "Хари Потър и философският камък", author: "Джоан Роулинг", description: "Първата книга от поредицата за Хари Потър.", id: 2 },
    { title: "Гордост и предразсъдъци", author: "Джейн Остин", description: "Роман, който разглежда любовта и социалните норми.", id: 3 },
    { title: "Малък принц", author: "Антоан дьо Сент-Екзюпери", description: "Философска притча за важността на детската невинност.", id: 4 },
    { title: "Глина", author: "Виктория Бешлийска", description: "Книга за любовта като съзидание и наказание. За ревността като проклятие. За мистичната сила на един майстор, който ведно с глината вае съдбата си.", id: 5},
    { title: "Живот в скалите", author: "Мария Лалева", description: "Драматичната история на ръба между философията и притчата провокира читателя да си задава въпроси", id: 6 },
    { title: "Физика на тъгата", author: "Георги Господинов", description: "Романът разказва за емпатията, минотаврите в нас, елементарните частици на тъгата и вечното време на детството.", id: 7 },
    { title: "Спомена София", author: "Тони Николов", description: "Книга, която разказва драматичната история на ръба между философията и притчата. ", id: 8 },
];

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const booksContainer = document.getElementById("books-container");
const noBooksMessage = document.getElementById("no-books");

searchButton.addEventListener("click", function() {
    const searchText = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchText));
    displayBooks(filteredBooks);
});

function displayBooks(booksList) {
    booksContainer.innerHTML = "";
    if (booksList.length === 0) {
        noBooksMessage.style.display = "block";
    } else {
        noBooksMessage.style.display = "none";
        booksList.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
            bookCard.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Автор:</strong> ${book.author}</p>
                <p>${book.description}</p>
                <button onclick="showDetails(${book.id})">Повече подробности</button>
            `;
            booksContainer.appendChild(bookCard);
        });
    }
}

function showDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    alert(`Подробности за книгата "${book.title}":\nАвтор: ${book.author}\nОписание: ${book.description}`);
}

displayBooks(books);
