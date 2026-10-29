"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
    const { readBooks, setReadBooks } = useContext(BooksContext);

    const handleReadBook = () => {
        console.log(
            " The current book related object in the array is ... ",
            book,
        );
        setReadBooks([...readBooks, book]);
        toast.success(`You've read ${book.bookName}`);
    };
    return (
        <button
            type="button"
            onClick={() => handleReadBook()}
            className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
            Read
        </button>
    );
};

export default ReadButton;
