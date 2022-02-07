import React, { useState, useRef, useEffect } from 'react'
import "../styles/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { setAllData } from '../services/ApiService'
import validator from 'validator'
const Card = (props) => {
    const [data, setData] = useState(props.item)
    const value = useRef("")
    useEffect(() => {
        value.current.value = props.item.Title
    }, [])
    const setCard =  () => {
        let card = data
        card = {...props.item}
         setData(card)
    }
    const changeValue=()=>{
        setAllData(  value.current.value)
    }
    return (
        <>
                <div className="p-3 border bg-light rounded-3">
                    <div className='row'>
                        <div className='col-6 rounded-3'>
                            <img className="img-thumbnail rounded-3" onClick={setCard} src={validator.isURL(props.item.Poster)&&props.item.Poster} data-toggle="modal" data-target={`#${props.item.imdbID}`} ></img>
                        </div>
                        <div className='col-4'>
                            <textarea className='mt-3 mb-4' ref={value} onChange={changeValue}></textarea>
                            <div className='mt-5'>{props.item.Year.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</div></div>
                    </div>

                </div>
            {/* modal */}
            <div>
                <div className="modal" id={props.item.imdbID} >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{`${data.Title}(${data.Type})`}</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <img src={data.Poster}></img>
                            </div>
                            <div >
                                imdbID:{data.imdbID}
                            </div>
                            <div>
                                {data.Year.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">back</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card




