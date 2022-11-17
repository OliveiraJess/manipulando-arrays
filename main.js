//lista de filmes e seus streaming
const filmsList = [{
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
const votesList = [{
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
  {
    "filmTitle": "o exorcista",
    "filmGenre": "terror",
    "filmStreaming": "youtube"
  },
  {
    "filmTitle": "o orfanato",
    "filmGenre": "terror",
    "filmStreaming": "youtube"
  },

]

//filmes e streaming mais votados

const votingMovies = (films, votes) => {

  const mappedFilms = films.map(film => {
    const filteredFilms = votes.filter(item => {
      return item.filmTitle === film.title && item.filmStreaming === film.streaming;
    });

    return {
      title: `${film.title} | ${film.streaming}`,
      votes: filteredFilms.length,
    }

  });

  const sortedfilms = mappedFilms.sort((a, b) => b.votes - a.votes);

  return sortedfilms.slice(0, 8);

}

//votação das plataformas
let votesStreaming;
const streamings = ['star', 'hbo max', 'youtube', 'netflix', 'amazon'];

const getStreamingData = (votes) => {

  votesStreaming = streamings.map(streaming => {
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

votingMovies(filmsList, votesList);
getStreamingData(votesList);


// filtrando titulos e votos da funcao votingMovies
const titlesFilterVotingMovies = votingMovies(filmsList, votesList).map((item) => {
  return item.title;
});

const votesFilterVotingMovies = votingMovies(filmsList, votesList).map((item) => {
  return item.votes;
});

// console.log('Votação RESULTADOOOO ----------------------------');
// console.log(titlesFilterVotingMovies);

// console.log('Votação RESULTADOOOO ----------------------------');
// console.log(votesFilterVotingMovies);


// console.log('Votação (Filmes) ----------------------------');
// console.log(votingMovies(filmsList, votesList));

// console.log('Votação (Plataformas) --------------------------');
// console.log(getStreamingData(votesList));


//chart bar - votação filmes
const context = document.getElementById('chartFilms');
const chartFilms = new Chart(context, {
  type: 'bar',
  data: {
    labels: titlesFilterVotingMovies,
    datasets: [{
      label: 'Votação (Filmes/Plataformas)',
      data: votesFilterVotingMovies,
      backgroundColor: [
        'rgba(18, 10, 143, 0.2)',
        'rgba(0, 100, 0, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(18, 10, 143, 1)',
        'rgba(0, 100, 0, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',

      ],
      borderWidth: 1,
      // hoverBackgroundColor: "rgba(255,99,132,0.4)",
      // hoverBorderColor: "rgba(255,99,132,1)",
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
    // plugins: {
    //   legend: {
    //     display: true,
    //   }
    // }
  }
});

//chart doughnut - votação plataformas
const ctx = document.getElementById('chartStreaming');
const chartStreaming = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: streamings,
    datasets: [{
      label: 'Votação (Plataformas)',
      data: votesStreaming,
      backgroundColor: [
        'rgba(18, 10, 143, 0.2)',
        'rgba(0, 100, 0, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(18, 10, 143, 1)',
        'rgba(0, 100, 0, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',

      ],
      hoverOffset: 4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
    // plugins: {
    //   legend: {
    //     display: true,
    //   }
    // }
  }
});
