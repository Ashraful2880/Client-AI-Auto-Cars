import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import useServices from '../../Hooks/UseService';
import Car from '../Car/Car';

const Explore = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const carPerPage = 6;
    const pagesVisited = pageNumber * carPerPage;
    const [cars] = useServices();

    const pageCount = Math.ceil(cars.length / carPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    };

    return (
        <div className="pt-5" style={{ minHeight: "90vh" }}>
            <h2 className="text-danger pt-4 fw-bold"> Awesome Car Collections </h2>
            <p className="mb-5 text-secondary fw-bold fs-5"> We are The Leading Auto Car Company With <br /> The World-Wide Reputation </p>
            {cars?.length > 0 ?
                <div className="container row mx-auto mb-4">
                    {cars?.slice(pagesVisited, pagesVisited + carPerPage)?.map((car) => <Car key={car?._id} car={car} />)}
                    <ReactPaginate
                        previousLabel={<i className="fas fa-arrow-left"></i>}
                        nextLabel={<i className="fas fa-arrow-right"></i>}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div> :
                <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-danger text-center d-block" role="status">
                    </div>
                </div>
            }
        </div>
    );
};

export default Explore;