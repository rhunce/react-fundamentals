import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L._AC_UL200_SR200,200_.jpg',
  title: 'The Midnight Library: A Novel',
  author: 'Matt Haig',
};

const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg',
  title: 'The Four Agreements',
  author: 'Dom Miguel Ruiz',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        reprehenderit numquam reiciendis non fuga qui ullam placeat architecto
        tempore incidunt.
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

function Book({ img, title, author, children }) {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{children}</p>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
