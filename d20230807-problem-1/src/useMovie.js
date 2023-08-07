import { createContext, useContext, useReducer } from 'react'

/**
 * @typedef {{
 *   id: number
 *   title: string
 *   genre: string
 *   release_date: string
 * }} Movie
 */

/**
 * @type {React.Context<Movie[]>}
 */
export const MovieContext = createContext([])
/** @type {React.Context<React.DispatchWithoutAction | null>} */
export const DispatchContext = createContext(null)

const useMovie = () => {
  const [, dispatch] = useReducer(
    /**
     * @param {Movie[]} state
     * @param {{
     *   type: 'ADD' | 'DELETE'
     *   movie: Movie
     * }}
     */
    (state, { type, movie }) => {
      console.log(state)
      switch (type) {
        case 'ADD':
          return state.concat(movie)
        case 'DELETE':
          return state
        default:
          return state
      }
    },
    [
      {
        id: 1,
        title: 'Movie 1',
        genre: 'Drama',
        release_date: '2022-08-01',
      },
    ],
  )
  const movies = useContext(MovieContext)

  return { movies, dispatch }
}

export default useMovie
