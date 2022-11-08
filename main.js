const dbFilms = [
  {
    "id": 1,
    "title": "o sexto sentido ",
    "genre": "suspense",
    "imdb": "8,2",
  },
  {
    "id": 2,
    "title": "o exorcista",
    "genre": "terror",
    "imdb": "8,1",
  },
  {
    "id": 3,
    "title": "os outros",
    "genre": "terror",
    "imdb": "7,6",
  },
  {
    "id": 4,
    "title": "efeito borboleta",
    "genre": "ficção científica",
    "imdb": "7,6",
  },
  {
    "id": 5,
    "title": "o orfanato",
    "genre": "terror",
    "imdb": "7,4",
  },
  {
    "id": 6,
    "title": "o chamado",
    "genre": "terror",
    "imdb": "7,1",
  },
  {
    "id": 7,
    "title": "a órfã",
    "genre": "terror",
    "imdb": "7,0",
  },
  {
    "id": 8,
    "title": "espíritos: a morte está ao seu lado ",
    "genre": "terror",
    "imdb": "7,0",
  },
  {
    "id": 9,
    "title": "paranóia ",
    "genre": "suspense",
    "imdb": "6,8",
  },
  {
    "id": 10,
    "title": "arraste-me para o inferno",
    "genre": "terror",
    "imdb": "6,6",
  },
];

// console.log(dbFilm)

const mapFilm = dbFilms.map((film) => {

  return {
    titulo: `${film.title} | ${film.imdb}`,
    genero: 0

  }

})

console.log(mapFilm)
