import Navbar from "./commonuse/Navbar";
import Footer from "./commonuse/Footer";
import "../index.css"; // Link your CSS
import { useContext, useState } from "react";
import { Contextpro } from "../Context";

const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "₹299",
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: "₹450",
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    title: "Ikigai",
    author: "Francesc Miralles",
    price: "₹300",
    img: "https://m.media-amazon.com/images/I/81QpkIctqPL.jpg",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: "₹399",
    img: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    price: "₹350",
    img: "https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: "₹420",
    img: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: "₹370",
    img: "https://m.media-amazon.com/images/I/71sBtM3Yi5L.jpg",
  },
  {
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    price: "₹280",
    img: "https://m.media-amazon.com/images/I/71l-KvTtmeL.jpg",
  },
  {
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    price: "₹210",
    img: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
  },
  {
    title: "You Can Win",
    author: "Shiv Khera",
    price: "₹199",
    img: "https://m.media-amazon.com/images/I/81vxWpY5rZL.jpg",
  }
];

function Product() {

  const { addToCart,cartItems } = useContext(Contextpro)

  function alertPassing(){
    alert("Item Successfully added in Cart")
  }

  return (
    <div className="product-page">
      <Navbar cartItems={cartItems} />
      <h1 className="page-title">Books Collection</h1>
      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" >
            <img src={book.img} alt={book.title} />
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p className="price">{book.price}</p>
            <button className="buy-btn" onClick={() =>{addToCart(book);alertPassing()} } >Add Cart</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Product;
