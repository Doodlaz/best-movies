import Movies from '../../../../src/components/Dashboard/Movies'

const MoviesRoutes = [
  {
    name: 'Movies',
    path: '/movies',
    permission: 1,
    component: Movies,
  },
  // {
  //   name: 'Single movies',
  //   path: '/movies/:id',
  //   permission: 1,
  //   component: MoviesSingle,
  // },
]

export default MoviesRoutes
