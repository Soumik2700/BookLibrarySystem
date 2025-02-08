import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Book from './components/book.jsx'
import BookDetails from './components/Bookdetails.jsx'
import Error from './components/Error.jsx'
import Cart from './components/Cart.jsx'
import AddBook from './components/AddBook.jsx'
import SearchByCategories from './components/SearchByCategories.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: < Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/browse-books",
        element: <BrowseBooks />,
        children: [
          {
            path: "/browse-books/:category",
            element: <SearchByCategories />
          }
        ],
        errorElement: <Error />
      },
      {
        path: "/book",
        element: <Book />
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/add-book",
        element: <AddBook />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
