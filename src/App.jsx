import './App.css'

function App() {

  return (
    <>
      <div>
        Welcome back User
      </div>
      <table>
        <thead>
          <tr>
            <th>Book name</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Book cover</th>
            <th>Borrowed?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foundation's Edge</td>
            <td>Isaac Asimov</td>
            <td>9780553293388</td>
            <td><img src="https://upload.wikimedia.org/wikipedia/en/c/cb/IsaacAsimov_Foundation%27sEdge.jpg" height={100} alt="Fundation's Edge" /></td>
            <td>No</td>
          </tr>
          <tr>
            <td>Foundation an Earth</td>
            <td>Isaac Asimov</td>
            <td>9780553587579</td>
            <td><img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Foundation_and_Earth_%28book_cover%29.jpg" height={100} alt="Fundation's Edge" /></td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
