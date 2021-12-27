import React, { useState, useEffect } from 'react';
import KeyboardArrowRightSharpIcon from '@material-ui/icons/KeyboardArrowRightSharp';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import { Button } from 'react-bootstrap';

const Pagination = ({ pages, setCurrentPage }) => {
    // const [numOfPages, setNumOfPages] = useState([])
    // useEffect(() => {
    //     const numOfPages = [];
    //     for (let i = 0; i < totalItems / itemsPerPage; i++) {
    //         numOfPages.push(i + 1)
    //     }
    //     setNumOfPages(numOfPages)
    // }, [totalItems, itemsPerPage])


    const numOfPages = [];
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage])


    return (
        <div className="clearfix">
            <ul className="pagination">
                {/* {numOfPages.map((i) => {
                    return <li key={i} className="page-item disabled"><button onClick={() => setCurrentPage(i)}>{i}</button></li>
                })} */}
                <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`} style={{ marginRight: "10px" }}>
                    <Button onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)} className="page-link {`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}" style={{ height: "38px", width: "85px" }} data-toggle="modal">Previous</Button>
                </li>



                {
                    numOfPages.map((page, index) => {
                        return (
                            <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}><Button className="page-link" onClick={() => setCurrentButton(page)}>{page}</Button> </li>
                        )
                    })
                }


                <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'}`} style={{ marginLeft: "10px" }}>
                    <Button onClick={() => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)} className="page-link {`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'}`}" style={{ height: "38px", width: "85px" }} data-toggle="modal">Next</Button>
                </li>


            </ul>
        </div >
    )
}

export default Pagination;