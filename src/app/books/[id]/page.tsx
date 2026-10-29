import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import { Suspense } from "react";
import BooksLoading from "@/app/books/loading";

interface IBooksDetailsProps {
    params: Promise<{ id: string }>;
}
// function that didn't work out
// const GetBooks = async ({ params }: IBooksDetailsProps) => {
//     const { id } = await params;
//     const res = await fetch(`http://localhost:3000/booksData.json/${id}`);
//     const books = await res.json();
//     return <div>Book length :{books.length}</div>;
// };

/* Main Function*/

const BooksDetailsPage = async ({ params }: IBooksDetailsProps) => {
    const { id } = await params;

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
        );
        const books = await res.json();
        console.log("API responded with:books", books);
        const book = books.find(
            (item: IBook) => String(item.bookId) === String(id),
        );
        console.log("Extracted single array from books:", book);
        if (!book) {
            return <div>Book not found</div>;
        }
        return (
            <div>
                <article className="grid grid-cols-1 mb-25 overflow-hidden  bg-white font-sans text-gray-800 border-b border-zinc-200 md:grid-cols-2">
                    {/* Book Cover */}
                    <div className="flex min-h-[350px] items-center justify-center bg-gray-100 p-8 md:min-h-[470px]">
                        <Image
                            src={book.image}
                            // loading="eager"
                            width={600}
                            height={800}
                            alt={`Cover of ${book.image}`}
                            className="max-h-[420px] w-auto max-w-full rounded-sm object-contain shadow-lg"
                        />
                    </div>

                    {/* Book Details */}
                    <div className="flex flex-col p-6 sm:p-8">
                        <h1 className="font-serif text-3xl font-bold leading-tight text-gray-900">
                            {book.bookName}
                        </h1>

                        <p className="mt-2 text-sm text-gray-600">
                            By : {book.author}
                        </p>

                        <div className="my-4 border-y border-gray-200 py-3">
                            <p className="text-sm">{book.category}</p>
                        </div>

                        {/* Review */}
                        <div className="text-sm leading-6 text-gray-500">
                            <p>
                                <span className="font-bold text-gray-900">
                                    Review :{" "}
                                </span>
                                {book.review}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="mt-5 flex flex-wrap items-center gap-2">
                            <span className="mr-1 text-sm font-bold text-gray-900">
                                Tag
                            </span>

                            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                                #YoungAdult
                            </span>
                            {/* //   ))} */}
                        </div>

                        <div className="my-5 border-t border-gray-200" />

                        {/* Additional Information */}
                        <dl className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-3 text-sm">
                            <dt className="text-gray-500">Number of Pages:</dt>
                            <dd className="font-semibold text-gray-900">
                                {book.totalPages}
                            </dd>

                            <dt className="text-gray-500">Publisher:</dt>
                            <dd className="text-right font-semibold text-gray-900">
                                {book.publisher}
                            </dd>

                            <dt className="text-gray-500">
                                Year of Publishing:
                            </dt>
                            <dd className="font-semibold text-gray-900">
                                {book.yearOfPublishing}
                            </dd>

                            <dt className="text-gray-500">Rating:</dt>
                            <dd className="font-semibold text-gray-900">
                                {book.rating}
                                <span className="ml-1 text-yellow-500">★</span>
                            </dd>
                        </dl>

                        {/* Action Buttons */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            <ReadButton book={book} />

                            <WishlistButton book={book} />
                        </div>
                    </div>
                </article>
            </div>
        );
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};

const DynamicPage = async ({ params }: IBooksDetailsProps) => {
    return (
        <>
            <Suspense fallback={<BooksLoading />}>
                <BooksDetailsPage params={params} />
                {/* <GetBooks params={params} /> */}
            </Suspense>
        </>
    );
};

export default DynamicPage;
