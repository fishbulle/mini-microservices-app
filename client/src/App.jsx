import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import PostCreate from './PostCreate'
import PostList from './PostList'

function App() {

  return (
    <>
      <div>
        <h1 className="text-center text-uppercase fw-bold">Blog App</h1>
      </div>
      <PostCreate />
      <PostList />
    </>
  )
}

export default App