import ReactDom from 'react-dom';
import books from './books.js';
import Book from './Book.js';
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book img={book.img} title={book.title} author={book.author} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
