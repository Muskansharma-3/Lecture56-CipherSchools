import { useState } from "react"
import { addBook } from "../apis/book-api";
import { useNavigate } from "react-router-dom";

const BookScreen = () => {

    const [bookToBeAdded, setBookToBeAdded] = useState({
        isbn: "", title: "", author: "", totalQuantity: "", issuedQuantity: "", price: "",
    })

    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(bookToBeAdded);
        await addBook(bookToBeAdded);
        navigate("/");
    }

    const handleInputChange = (e) => {
        setBookToBeAdded({ ...bookToBeAdded, [e.target.name]: e.target.value });
    }

    return (
        <section className="app-section">
            <h1>Add a new book</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>ISBN</label>
                    <input type="text" name="isbn" placeholder="ISBN" value={bookToBeAdded.isbn} onChange={handleInputChange} required={true} />
                </div>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Title" value={bookToBeAdded.title} onChange={handleInputChange} required={true}/>
                </div>
                <div className="field">
                    <label>Author</label>
                    <input type="text" name="author" placeholder="Author" value={bookToBeAdded.author} onChange={handleInputChange} required={true} />
                </div>
                <div className="field">
                    <label>Issued Quantity</label>
                    <input type="number" name="issuedQuantity" placeholder="Issued Quantity" value={bookToBeAdded.issuedQuantity} min={0} onChange={handleInputChange} required={true} />
                </div>
                <div className="field">
                    <label>Total Quantity</label>
                    <input type="number" name="totalQuantity" placeholder="Total Quantity" value={bookToBeAdded.totalQuantity} min={1} onChange={handleInputChange} required={true} />
                </div>
                <div className="field">
                    <label>Price</label>
                    <input type="number" name="price" placeholder="Price" value={bookToBeAdded.price} min={1} onChange={handleInputChange} required={true} />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default BookScreen;