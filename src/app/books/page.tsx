import { Suspense } from "react";
import BookCard from "@/components/shared/Bookcard";
import { IBook } from "@/types/books.type";

// const GetBooks = async () => {
//     try {
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
//         );
//         const books = await res.json();
//         // console.log("API responded with:", books);
//         return (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {books.slice(0, 6).map((book: IBook) => {
//                     return <BookCard key={book.bookId} book={book} />;
//                 })}
//             </div>
//         );
//     } catch (error) {
//         console.error("Error fetching books:", error);
//         return [];
//     }
// };

// imported from ChatGPT

const GetBooks = async () => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

        console.log("Environment variable:", baseUrl);

        if (!baseUrl) {
            throw new Error(
                "NEXT_PUBLIC_SERVER_BASE_URL is undefined. Check your .env file.",
            );
        }

        const res = await fetch(`${baseUrl}/booksData.json`);

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }

        const books: IBook[] = await res.json();

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.slice(0, 6).map((book) => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>
        );
    } catch (error) {
        console.error("Error fetching books:", error);

        return <p>Unable to load books.</p>;
    }
};

const Books = async () => {
    return (
        <div className="container mx-auto my-16 px-4">
            <h1 className="text-2xl font-bold text-center mb-5 text-slate-900">
                Books
            </h1>
            <Suspense fallback={<h2>Loading...</h2>}>
                <GetBooks />
            </Suspense>
        </div>
    );
};

export default Books;
