import Button from '@/components/atoms/buttons/button';
import { Cross, Eye, Menu } from '@/components/atoms/icons';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { BiBlock } from 'react-icons/bi'
import { Slide, ToastContainer, toast } from 'react-toastify';


const Table = (props) => {

    function handleOnRefresh() {
        props.onRefresh();
    }

    const notify = () => {
        toast.success('User has blocked successfully', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [menu, setMenu] = useState(false)

    const [viewRequest, setViewRequest] = useState(null)
    useEffect(() => {
        function handleKeyPress(event) {
            if (event.key === 'Escape') {
                setViewRequest(false)
            }
        }

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const handleBan = () => {
        notify()
        handleClose()
    }

    const handleBanUserShow = () => {
        handleShow()
        setMenu(false)
      }

    return <>
        <table>
            <thead>
                <tr>
                    {props.columns.map((column, i) => { return <th key={i}>{column.title}</th> })}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/* { props.data.map( ( item , i ) => { return <tr>
                    <td>{item.email}</td>
                </tr> } ) } */}
                <tr>
                    <td> Mohamed Reda </td>
                    <td> MohamedReda@dipdux.com </td>
                    <td> 01140073412 </td>
                    <td> Active </td>
                    <td> 9 months ago </td>
                    <td className='tableMenu' >
                        <button onClick={() => { menu ? setMenu(false) : setMenu(true) }} >
                            <Menu />
                        </button>
                        {menu &&
                            <div className="menu" >
                                <button onClick={() => { setViewRequest(true); setMenu(false) }} ><Eye /> View </button>
                                <button onClick={ () => { handleBanUserShow() } } className='delete'> <BiBlock /> Block </button>
                            </div>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
        <div className={`newSide ${viewRequest && 'active'}`} >
            <div className='modalHead' >
                <h6> Mohamed Reda </h6>
                <button onClick={() => setViewRequest(false)}><Cross /></button>

            </div>
        </div>

        {viewRequest &&
            <div className="newSideOverlay" onClick={() => setViewRequest(false)}></div>
        }

        <Modal centered show={show} onHide={handleClose}>
            <Modal.Body>
                <div className="modalHead">
                    <h6> Block User </h6>
                    <button onClick={handleClose}><Cross /></button>
                </div>
                <div className="modalBody">
                    <h5> Block User "Mohamed Reda" ! </h5>
                    <p>Are you sure to Block this User?</p>
                </div>
                <div className="modalFooter">
                    <Button onClick={handleBan} danger> block </Button>
                    <Button onClick={handleClose} cancel>Cancel</Button>
                </div>
            </Modal.Body>
        </Modal>
        <ToastContainer
            transition={Slide}
        />
    </>
}

export default Table