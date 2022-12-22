import {db} from "../firebase-config";

//These all are the inbuild methods of firebase to do CRUD operations
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";

//Collection reference
const bookCollectionRef = collection(db, "books");
class BookDataService{
    addBook = (newBook) => {
        console.log('newBook', newBook);
        return addDoc(bookCollectionRef, newBook);
    }

    updateBook = (id, updatedBook) => {
        //Get the book with same id to be updated
        const bookDoc = doc(db, "books", id);
        return updateDoc(bookDoc, updatedBook);
    }

    deleteBook = (id) => {
        //Get the book with same id to be deleted
        const bookDoc = doc(db, "books", id);
        return deleteDoc(bookDoc);
    }

    getAllBooks = () => {
        //Get all the documents from the collection
        return getDocs(bookCollectionRef);
    }

    getBook = (id) => {
        const bookDoc = doc(db, "books", id);
        return getDoc(bookDoc);
    }
}

export default new BookDataService();