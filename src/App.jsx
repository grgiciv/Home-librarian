import './App.css'
import { Book } from './components/Book'

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
          <Book bookName="Foundation's Edge" bookAuthor="Isaac Asimov" bookISBN="9780553293388" bookCover="https://upload.wikimedia.org/wikipedia/en/c/cb/IsaacAsimov_Foundation%27sEdge.jpg" isBorrowed="Yes" />
          <Book bookName="Foundation an Earth" bookAuthor="Isaac Asimov" bookISBN="9780553587579" bookCover="https://upload.wikimedia.org/wikipedia/en/e/eb/Foundation_and_Earth_%28book_cover%29.jpg" isBorrowed="No"/>
        </tbody>
      </table>
    </>
  )
}

export default App
