import React from "react";

const BooksLoading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <p className="text-lg font-semibold text-gray-700">
                    Loading book details...
                </p>
            </div>
        </div>
    );
};

export default BooksLoading;
