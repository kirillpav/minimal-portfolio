export interface ShelfBook {
  title: string;
  author: string;
  isbn?: string; // For OpenLibrary cover
  olid?: string; // OpenLibrary Work ID as fallback
  year: number; // Year read
}

export const books: ShelfBook[] = [
  // 2025
  {
    title: "Ubik",
    author: "Philip K. Dick",
    isbn: "9780547572291",
    year: 2025,
  },
  {
    title: "Station Eleven",
    author: "Emily St. John Mandel",
    isbn: "9780385353304",
    year: 2025,
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    isbn: "9780143131847",
    year: 2025,
  },
  {
    title: "The Goldfinch",
    author: "Donna Tartt",
    isbn: "9780316055444",
    year: 2025,
  },
  {
    title: "Метро 2033",
    author: "Dmitry Glukhovsky",
    isbn: "9781473204287",
    year: 2025,
  },
  {
    title: "Demon Copperhead",
    author: "Barbara Kingsolver",
    isbn: "9780063251922",
    year: 2025,
  },
  {
    title: "Омон Ра",
    author: "Victor Pelevin",
    isbn: "9780811213646",
    year: 2025,
  },
  {
    title: "Razorblade Tears",
    author: "S. A. Cosby",
    isbn: "9781250252708",
    year: 2025,
  },
  {
    title: "Falling Man",
    author: "Don DeLillo",
    isbn: "9781416546061",
    year: 2025,
  },
  {
    title: "The War of the Worlds",
    author: "H.G. Wells",
    isbn: "9780141441030",
    year: 2025,
  },
  {
    title: "A Storm of Swords",
    author: "George R.R. Martin",
    isbn: "9780553106633",
    year: 2025,
  },
  {
    title: "Annihilation",
    author: "Jeff VanderMeer",
    isbn: "9780374104092",
    year: 2025,
  },
  {
    title: "High-Rise",
    author: "J.G. Ballard",
    isbn: "9780871404022",
    year: 2025,
  },
  {
    title: "The Institute",
    author: "Stephen King",
    isbn: "9781982110567",
    year: 2025,
  },

  // 2024
  {
    title: "How High We Go in the Dark",
    author: "Sequoia Nagamatsu",
    isbn: "9780063072640",
    year: 2024,
  },
  {
    title: "Artemis",
    author: "Andy Weir",
    isbn: "9780553448122",
    year: 2024,
  },
  {
    title: "Berserk, Vol. 1",
    author: "Kentaro Miura",
    isbn: "9781593070205",
    year: 2024,
  },
  {
    title: "American Psycho",
    author: "Bret Easton Ellis",
    isbn: "9780679735779",
    year: 2024,
  },
  {
    title: "The Wind-Up Bird Chronicle",
    author: "Haruki Murakami",
    isbn: "9780679775430",
    year: 2024,
  },
  {
    title: "The Green Mile",
    author: "Stephen King",
    isbn: "9781501192265",
    year: 2024,
  },
  {
    title: "A Clash of Kings",
    author: "George R.R. Martin",
    isbn: "9780553108033",
    year: 2024,
  },
  {
    title: "Tender Is the Night",
    author: "F. Scott Fitzgerald",
    isbn: "9780684801544",
    year: 2024,
  },
  {
    title: "No Country for Old Men",
    author: "Cormac McCarthy",
    isbn: "9780375706677",
    year: 2024,
  },
  {
    title: "How to Win Friends & Influence People",
    author: "Dale Carnegie",
    isbn: "9780671027032",
    year: 2024,
  },
  {
    title: "Fight Club",
    author: "Chuck Palahniuk",
    isbn: "9780393327342",
    year: 2024,
  },
  {
    title: "Do Androids Dream of Electric Sheep?",
    author: "Philip K. Dick",
    isbn: "9780345404473",
    year: 2024,
  },
  {
    title: "Flowers for Algernon",
    author: "Daniel Keyes",
    isbn: "9780156030304",
    year: 2024,
  },
  {
    title: "Игрок",
    author: "Fyodor Dostoevsky",
    isbn: "9780140455090",
    year: 2024,
  },
  {
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    isbn: "9781400079278",
    year: 2024,
  },
  {
    title: "Hyperion",
    author: "Dan Simmons",
    isbn: "9780553283686",
    year: 2024,
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    isbn: "9781451673319",
    year: 2024,
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    isbn: "9781400031702",
    year: 2024,
  },
  {
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    isbn: "9780593321201",
    year: 2024,
  },
  {
    title: "The Invisible Man",
    author: "H.G. Wells",
    isbn: "9780141439983",
    year: 2024,
  },

  // 2023
  {
    title: "The Glass Hotel",
    author: "Emily St. John Mandel",
    isbn: "9780525521143",
    year: 2023,
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    isbn: "9780553593716",
    year: 2023,
  },
  {
    title: "Mr. Mercedes",
    author: "Stephen King",
    isbn: "9781476754451",
    year: 2023,
  },
  {
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    isbn: "9780593318171",
    year: 2023,
  },
  {
    title: "Discipline Is Destiny",
    author: "Ryan Holiday",
    isbn: "9780593191699",
    year: 2023,
  },
  {
    title: "These Silent Woods",
    author: "Kimi Cunningham Grant",
    isbn: "9781250822727",
    year: 2023,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    isbn: "9780441172719",
    year: 2023,
  },
  {
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    isbn: "9780064404990",
    year: 2023,
  },
  {
    title: "A Room of One's Own",
    author: "Virginia Woolf",
    isbn: "9780156787338",
    year: 2023,
  },
  {
    title: "Mad Honey",
    author: "Jodi Picoult & Jennifer Finney Boylan",
    isbn: "9781984818386",
    year: 2023,
  },
  {
    title: "Misery",
    author: "Stephen King",
    isbn: "9781501156748",
    year: 2023,
  },
  {
    title: "Childhood's End",
    author: "Arthur C. Clarke",
    isbn: "9780345444059",
    year: 2023,
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    isbn: "9780553418026",
    year: 2023,
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    isbn: "9780375704024",
    year: 2023,
  },
  {
    title: "The Metamorphosis",
    author: "Franz Kafka",
    isbn: "9780553213690",
    year: 2023,
  },
  {
    title: "A Clockwork Orange",
    author: "Anthony Burgess",
    isbn: "9780393312836",
    year: 2023,
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
    isbn: "9780345538987",
    year: 2023,
  },
  {
    title: "Never Let Me Go",
    author: "Kazuo Ishiguro",
    isbn: "9781400078776",
    year: 2023,
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    isbn: "9780593135204",
    year: 2023,
  },
  {
    title: "Recursion",
    author: "Blake Crouch",
    isbn: "9781524759780",
    year: 2023,
  },
  {
    title: "Fear and Loathing in Las Vegas",
    author: "Hunter S. Thompson",
    isbn: "9780679785897",
    year: 2023,
  },
  {
    title: "Dark Matter",
    author: "Blake Crouch",
    isbn: "9781101904220",
    year: 2023,
  },
  {
    title: "Пикник на обочине",
    author: "Arkady & Boris Strugatsky",
    isbn: "9781613743416",
    year: 2023,
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    isbn: "9780441569595",
    year: 2023,
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    isbn: "9780307387899",
    year: 2023,
  },
  {
    title: "Sea of Tranquility",
    author: "Emily St. John Mandel",
    isbn: "9780593321447",
    year: 2023,
  },
  {
    title: "Мы",
    author: "Yevgeny Zamyatin",
    isbn: "9780140185850",
    year: 2023,
  },
  {
    title: "Lolita",
    author: "Vladimir Nabokov",
    isbn: "9780679723165",
    year: 2023,
  },
  {
    title: "And Then There Were None",
    author: "Agatha Christie",
    isbn: "9780062073488",
    year: 2023,
  },
  {
    title: "I, Robot",
    author: "Isaac Asimov",
    isbn: "9780553382563",
    year: 2023,
  },
  {
    title: "Freakonomics",
    author: "Steven D. Levitt & Stephen J. Dubner",
    isbn: "9780060731328",
    year: 2023,
  },
  {
    title: "The Plague",
    author: "Albert Camus",
    isbn: "9780679720218",
    year: 2023,
  },
  {
    title: "The Time Machine",
    author: "H.G. Wells",
    isbn: "9780141439976",
    year: 2023,
  },
  {
    title: "Мастер и Маргарита",
    author: "Mikhail Bulgakov",
    isbn: "9780141180144",
    year: 2023,
  },
  {
    title: "The Running Man",
    author: "Stephen King",
    isbn: "9781501144523",
    year: 2023,
  },
  {
    title: "Requiem for a Dream",
    author: "Hubert Selby Jr.",
    isbn: "9781560252481",
    year: 2023,
  },
  {
    title: "The Long Walk",
    author: "Stephen King",
    isbn: "9781501144264",
    year: 2023,
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    isbn: "9780807014271",
    year: 2023,
  },
  {
    title: "Vernon God Little",
    author: "DBC Pierre",
    isbn: "9781841954615",
    year: 2023,
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    isbn: "9780451526342",
    year: 2023,
  },
  {
    title: "2001: A Space Odyssey",
    author: "Arthur C. Clarke",
    isbn: "9780451457998",
    year: 2023,
  },
  {
    title: "A Mind for Numbers",
    author: "Barbara Oakley",
    isbn: "9780399165245",
    year: 2023,
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    isbn: "9780684801223",
    year: 2023,
  },
  {
    title: "Foundation",
    author: "Isaac Asimov",
    isbn: "9780553293357",
    year: 2023,
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    isbn: "9780140449334",
    year: 2023,
  },
  {
    title: "On the Road",
    author: "Jack Kerouac",
    isbn: "9780140283297",
    year: 2023,
  },
  {
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    year: 2023,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    isbn: "9780345391803",
    year: 2023,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    isbn: "9780060850524",
    year: 2023,
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    isbn: "9780679720201",
    year: 2023,
  },
];

// Helper to get OpenLibrary cover URL
export function getBookCoverUrl(
  book: ShelfBook,
  size: "S" | "M" | "L" = "M"
): string {
  if (book.isbn) {
    return `https://covers.openlibrary.org/b/isbn/${book.isbn}-${size}.jpg`;
  }
  if (book.olid) {
    return `https://covers.openlibrary.org/b/olid/${book.olid}-${size}.jpg`;
  }
  // Fallback placeholder
  return `/books/placeholder.jpg`;
}

// Get unique years sorted descending
export function getYears(): number[] {
  const years = Array.from(new Set(books.map((b) => b.year)));
  return years.sort((a, b) => b - a);
}

// Get books for a specific year
export function getBooksByYear(year: number): ShelfBook[] {
  return books.filter((b) => b.year === year);
}
