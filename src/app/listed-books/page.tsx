"use client";

import BookCard from "@/components/shared/Bookcard";
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext);
    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
    console.log("readbooks", readBooks, "wishlist", wishlist);
    console.log(sortBy, "sortBy");

    return (
        <div className="container mx-auto py-[20px]">
            <h2 className="my-4 text-4xl bg-amber-100 py-16 font-bold text-center rounded-2xl">
                Listed Books
            </h2>
            <div className=" text-center">
                <select
                    defaultValue="Pick a Runtime"
                    className="select select-success   text-zinc-700 font-semibold"
                >
                    <option
                        disabled={true}
                        onChange={(e) =>
                            setSortBy(
                                e.target.value as "rating" | "pages" | "year",
                            )
                        }
                    >
                        Sort By
                    </option>
                    <option value={"rating"}>Rating</option>
                    <option value={"pages"}>Number of pages</option>
                    <option value={"year"}>Publisher year</option>
                </select>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Read Books (${readBooks.length})`}
                />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-[25px]">
                    {readBooks.length > 0 ? (
                        readBooks.map((book: IBook) => {
                            return (
                                <ListedBooksCard
                                    key={book.bookId}
                                    book={book}
                                />
                            );
                        })
                    ) : (
                        <p className="text-center text-gray-500 ">
                            No books read yet.
                        </p>
                    )}
                </div>

                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Wishlist Books (${wishlist.length})`}
                    defaultChecked
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {wishlist.length > 0 ? (
                        wishlist.map((book: IBook) => {
                            return (
                                <ListedBooksCard
                                    key={book.bookId}
                                    book={book}
                                />
                            );
                        })
                    ) : (
                        <p className="text-center text-gray-500 ">
                            No wishlist books yet.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
