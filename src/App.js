import Booklist from './components/Booklist';
// import Button from './components/Button';
import Header from './components/Header';
import "./index.css"
 
import BookContextProvider from './context/BookContext';
// import BookDeets from './components/BookDeets';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <img src='unnamed.png' alt='cats' />
      <BookContextProvider> 
         <Header />
         <Booklist />
         <BookForm />
      </BookContextProvider>
      {/* <Button /> */}
    </div>
  );
}

export default App;
