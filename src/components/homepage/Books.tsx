import { Suspense } from "react";
import BookCard from "@/components/shared/Bookcard";
import { IBook } from "@/types/books.type";

const GetBooks = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
        );
        const books = await res.json();
        // console.log("API responded with:", books);
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book: IBook) => {
                    return <BookCard key={book.bookId} book={book} />;
                })}
            </div>
        );
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};

const Books = async () => {
    return (
        <div className="container mx-auto my-16 px-4">
            <h1 className="text-4xl font-bold text-center mb-12 text-slate-900">
                Books
            </h1>
            <Suspense fallback={<h2>Loading...</h2>}>
                <GetBooks />
            </Suspense>
        </div>
    );
};

export default Books;
