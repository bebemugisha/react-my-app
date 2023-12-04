import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'



const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book-1.jpg',
};

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/book-2.jpg'
}


const thirdBook = {
  author: 'R.J.PALACIO',
  title: 'white bird',
  img: './images/book-3.jpg',
}

const BookList = () =>{
    return (
      <section className="booklist">
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            repudiandae inventore eos qui animi sed iusto alias eius ea
            sapiente.
          </p>
          <button>click me</button>
        </Book>
        <Book
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img}
        />

        <Book
          author={thirdBook.author}
          title={thirdBook.title}
          img={thirdBook.img}
        />
      </section>
    )
};

const Book = (props) =>{
  const { img, title, author, children } = props;
    return (
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title} </h2>
        <h4>{author}</h4>
        {children}
      </article>
    )
};




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)

