import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import useMovie, { MovieContext } from './useMovie'

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">List</Link>
        <Link to="/add">Add New Movie</Link>
      </header>
    </>
  )
}

const ListPage = () => {
  const { movies } = useMovie()

  useEffect(() => {
    console.log('ListPage mount')

    return () => {
      console.log('ListPage unmount')
    }
  }, [])

  return (
    <>
      <h1>Movies</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(({ id, title, genre, release_date }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{genre}</td>
              <td>{release_date}</td>
              <td>
                <button type="button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

const AddPage = () => {
  const { movies, dispatch } = useMovie()

  /** @type {React.MutableRefObject<null | HTMLFormElement>} */
  const formRef = useRef(null)
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')

  useEffect(() => {
    console.log('AddPage mount')

    return () => {
      console.log('AddPage unmount')
    }
  }, [])

  /** @type {React.FormEventHandler<HTMLFormElement>} */
  const onSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: 'ADD',
      movie: {
        id,
        title,
        genre,
        release_date: releaseDate,
      },
    })

    formRef.current?.reset()
  }
  console.log('리렌더링')

  return (
    <>
      <h1>Create Movie</h1>
      <form onSubmit={onSubmit} ref={formRef}>
        <input
          type="number"
          placeholder="Input movie id"
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Input movie title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Input movie genre"
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />
        <label htmlFor="release_date">출시일 : </label>
        <input
          type="date"
          id="release_date"
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </>
  )
}

function App() {
  const { movies, dispatch } = useMovie()

  return (
    <MovieContext.Provider value={movies}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" Component={ListPage} />
            <Route path="/add" Component={AddPage} />
          </Routes>
        </div>
      </BrowserRouter>
    </MovieContext.Provider>
  )
}

export default App
