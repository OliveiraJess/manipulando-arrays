//lista de filmes e seus streaming
const filmsList = [
  {
    "id": 1,
    "title": "o sexto sentido",
    "genre": "suspense",
    "imdb": "8,2",
    "streaming": "star"
  },
  {
    "id": 2,
    "title": "o exorcista",
    "genre": "terror",
    "imdb": "8,1",
    "streaming": "hbo max"
  },
  {
    "id": 3,
    "title": "o exorcista",
    "genre": "terror",
    "imdb": "8,1",
    "streaming": "youtube"
  },
  {
    "id": 4,
    "title": "efeito borboleta",
    "genre": "ficção científica",
    "imdb": "7,6",
    "streaming": "hbo max"
  },
  {
    "id": 5,
    "title": "o orfanato",
    "genre": "terror",
    "imdb": "7,4",
    "streaming": "netflix"
  },
  {
    "id": 6,
    "title": "o orfanato",
    "genre": "terror",
    "imdb": "7,4",
    "streaming": "youtube"
  },
  {
    "id": 7,
    "title": "o chamado",
    "genre": "terror",
    "imdb": "7,1",
    "streaming": "youtube"
  },
  {
    "id": 8,
    "title": "o chamado",
    "genre": "terror",
    "imdb": "7,1",
    "streaming": "amazon"
  },
  {
    "id": 9,
    "title": "a órfã",
    "genre": "terror",
    "imdb": "7,0",
    "streaming": "youtube"
  },
  {
    "id": 10,
    "title": "a órfã",
    "genre": "terror",
    "imdb": "7,0",
    "streaming": "hbo max"
  },
]

//votação da lista de filmes
const votesList = [
  {
    "filmTitle": "o sexto sentido",
    "filmGenre": "suspense",
    "filmStreaming": "star"
  },
  {
    "filmTitle": "o sexto sentido",
    "filmGenre": "suspense",
    "filmStreaming": "star"
  },
  {
    "filmTitle": "o exorcista",
    "filmGenre": "terror",
    "filmStreaming": "hbo max"
  },
  {
    "filmTitle": "efeito borboleta",
    "filmGenre": "ficção científica",
    "filmStreaming": "hbo max"
  },
  {
    "filmTitle": "a órfã",
    "filmGenre": "terror",
    "filmStreaming": "hbo max"
  },
  {
    "filmTitle": "a órfã",
    "filmGenre": "terror",
    "filmStreaming": "hbo max"
  },
  {
    "filmTitle": "o orfanato",
    "filmGenre": "terror",
    "filmStreaming": "netflix"
  },
  {
    "filmTitle": "o orfanato",
    "filmGenre": "terror",
    "filmStreaming": "netflix"
  },
  {
    "filmTitle": "efeito borboleta",
    "filmGenre": "ficção científica",
    "filmStreaming": "hbo max"
  },
  {
    "filmTitle": "o chamado",
    "filmGenre": "terror",
    "filmStreaming": "amazon"
  },
  {
    "filmTitle": "o chamado",
    "filmGenre": "terror",
    "filmStreaming": "amazon"
  },
  {
    "filmTitle": "a órfã",
    "filmGenre": "terror",
    "filmStreaming": "hbo max"
  },
  {
    "filmTitle": "efeito borboleta",
    "filmGenre": "ficção científica",
    "filmStreaming": "hbo max"
  },
  {
    "filmTitle": "o sexto sentido",
    "filmGenre": "suspense",
    "filmStreaming": "star"
  },
  {
    "filmTitle": "a órfã",
    "filmGenre": "terror",
    "filmStreaming": "hbo max"
  },

]

//filmes e streaming mais votados
const votingMovies = (films, votes) => {

  const mappedFilms = films.map(film => {
    const filteredFilms = votes.filter(vote => {
      return vote.filmTitle === film.title && vote.filmStreaming === film.streaming;
    });

    return {
      titleAndStreaming: `${film.title} | ${film.streaming}`,
      vote: filteredFilms.length
    }
  });

  const sortedfilms = mappedFilms.sort((a, b) => b.y - a.y);

  return sortedfilms.slice(0, 8);
}

//votação das plataformas
const getStreamingData = (votes) => {

  const streamings = ['star', 'hbo max', 'youtube', 'netflix', 'amazon'];

  const votesStreaming = streamings.map(streaming => {
    const filteredFilm = votes.filter(vote => {
      return streaming === vote.filmStreaming;
    });

    return filteredFilm.length;
  });

  return {
    streaming: streamings,
    votesStreaming
  };
}


console.log('Votação (Filmes) ----------------------------');
console.log(votingMovies(filmsList, votesList));

console.log('Votação (Plataformas) --------------------------');
console.log(getStreamingData(votesList));
