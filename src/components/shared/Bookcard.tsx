import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

interface IBookCardProps {
    book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div
            key={book.bookId}
            className="card bg-base-100 rounded-2xl overflow-hidden border border-slate-300"
        >
            <figure className="bg-slate-100 p-8 relative h-52">
                <Image
                    src={book.image}
                    alt="book cover"
                    width={400}
                    height={800}
                    className="w-full h-52 object-contain"
                />
            </figure>

            <div className="card-body gap-3">
                <div className="flex flex-wrap gap-2">
                    <span className="badge bg-emerald-50 text-emerald-500  border-none px-3 py-3 text-xs font-semibold tracking-wide">
                        {book.tags[0]}
                    </span>
                    <span className="badge bg-emerald-50 text-emerald-500  border-none px-3 py-3 text-xs font-semibold tracking-wide">
                        {book.tags[1]}
                    </span>
                </div>

                <h2 className="card-title font-serif text-2xl font-bold text-slate-900 leading-snug">
                    {book.bookName}
                </h2>

                <p className="text-slate-400 text-sm">By : {book.author}</p>

                <hr className="border-dashed border-slate-200 my-1" />

                <div className="flex items-center justify-between pt-1">
                    <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                        {book.category}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-slate-900">
                        {book.rating}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="w-5 h-5 text-amber-400"
                        >
                            <path d="M12 2l2.9 6.6L22 9.3l-5 4.7 1.4 7-6.4-3.6L5.6 21 7 14l-5-4.7 7.1-.7L12 2z" />
                        </svg>
                    </span>
                </div>
                <Link href={`/books/${book.bookId}`}>
                    <button
                        type="button"
                        className="btn w-full mt-2 bg-slate-900 text-white rounded-lg py-3 text-sm font-semibold tracking-wide hover:bg-slate-800 transition-colors"
                    >
                        View details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;
