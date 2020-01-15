import Movies from '../../../../src/components/Pages/Movies'
import MovieSingle from '../../../../src/components/Pages/Movies/Single'

const MoviesRoutes = [
  {
    name: 'Movies',
    path: '/movies',
    permission: 1,
    component: Movies,
  },
  {
    name: 'Single movies',
    path: '/movies/:id',
    permission: 1,
    component: MovieSingle,
  },
]

export default MoviesRoutes
