import Actors from '../../../../src/components/Pages/Actors'
import ActorsSingle from '../../../../src/components/Pages/Actors/Single'

const ActorsRoutes = [
  {
    name: 'Actors',
    path: '/actors',
    permission: 1,
    component: Actors,
  },
  {
    name: 'Single actors',
    path: '/actors/:id',
    permission: 1,
    component: ActorsSingle,
  },
]

export default ActorsRoutes
