import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

interface IListedCardProps {
    book: IBook;
}

const ListedBooksCard = ({ book }: IListedCardProps) => {
    return (
        <div className="card card-side bg-base-100  hover:shadow-xl transition-shadow duration-300 border border-base-300 ">
            <figure className="w-32 sm:w-44 shrink-0 p-3">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={300}
                    height={400}
                    className="h-48 w-full object-contain rounded-lg"
                />
            </figure>

            <div className="card-body p-4 sm:p-6 min-w-0">
                <h2 className="card-title text-lg sm:text-xl">
                    {book.bookName}
                </h2>

                <p className="text-sm text-base-content/70">By {book.author}</p>

                <div className="flex flex-wrap gap-2">
                    <span className="badge badge-primary">{book.category}</span>

                    {book.tags.map((tag) => (
                        <span key={tag} className="badge badge-outline">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-sm line-clamp-2">{book.review}</p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    <span>⭐ {book.rating}</span>
                    <span>{book.totalPages} pages</span>
                    <span>{book.yearOfPublishing}</span>
                </div>

                <p className="text-xs text-base-content/60">
                    Publisher: {book.publisher}
                </p>

                <div className="card-actions justify-end mt-2">
                    <Link
                        href={`/books/${book.bookId}`}
                        className="btn btn-primary btn-sm"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksCard;
