import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from './Card'
import { useSelector } from 'react-redux';


const Pagination = ({ itemsPerPage }) => {


    const getAllProducts = useSelector((state)=> state.allProduct.value)

    const items = getAllProducts;

    function Items({ currentItems }) {
        return (
            <>
                <div className='flex flex-wrap justify-between gap-6'>
                    {currentItems &&
                        currentItems.map((items,id) => (
                            <Card
                                key={id}
                                img={items.thumbnail}
                                discount={items.discountPercentage}
                                heading={items.title}
                                price={items.price}
                                prev={Math.floor(items.price / (1 - items.discountPercentage / 100))}
                                rating={items.rating}
                                review={items.reviews[0].rating}
                            />
                        ))}
                </div>
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                className="flex items-center space-x-2.5 mt-10"
                breakLabel="..."
                nextLabel=""
                previousLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                pageClassName="px-6.25 py-.5 border bg-black text-white cursor-pointer"
            />
        </>
    );
}

export default Pagination