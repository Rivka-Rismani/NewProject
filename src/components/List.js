import React, { useEffect, useState } from 'react'
import { getAllData } from '../services/ApiService'
import Navbar from '../components/Navbar'
import Card from './Card'
const List = () => {

    const [data, setData] = useState(getAllData())
    const [game, setGame] = useState([])
    const [movie, setMovie] = useState([])
    const [series, setSeries] = useState([])
    const [view, setView] = useState(true)

    useEffect(() => {
        let demoGame = []
        let demoMovie = []
        let demoSeries = []
        getAllData().map((item) => {
            if (item.Type === "movie") demoMovie.push(item)
            else if (item.Type === "game") demoGame.push(item)
            else
                demoSeries.push(item)
        })
        setMovie(demoMovie)
        setSeries(demoSeries)
        setGame(demoGame)
    }, [])
    const changeView = () => {
        setView(!view)
    }
    return (
        <>

            <div clss='container'>
                <div className='row mt-5 mb-5'>
                    <Navbar setData={setData} items={data}></Navbar>
                </div>
                <div className='row'>
                    <div className='col-2'>  <ul className="list-group">
                        <li onClick={() => setData(game)} className="list-group-item">game({game.length})</li>
                        <li onClick={() => setData(movie)} className="list-group-item">movie({movie.length})</li>
                        <li onClick={() => setData(series)} className="list-group-item">series({series.length})</li>
                    </ul>
                        <button type="button" className="btn btn-secondary mt-5" onClick={changeView}>Change view button</button>
                    </div>


                    <div className='col-10'>
                        <div className="container px-4 mt-4">
                            <div className="row gx-5 pb-5">
                                {
                                    data && view === false ?
                                        data.map((item,i) => {
                                            return (
                                                <div className='col-6 mb-3'key={i}>
                                                    <Card  item={item}></Card></div>
                                            )
                                        })
                                        :
                                        data.map((item,i) => {
                                            return (
                                                <div className='col-8 mb-3 'key={i}>
                                                    <Card  item={item}></Card></div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>


    )
}

export default List

