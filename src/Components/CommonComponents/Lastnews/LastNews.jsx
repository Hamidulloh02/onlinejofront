import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import "./lastnews.css"
import { AiOutlineClockCircle } from 'react-icons/ai';
function LastNews(props) {
    const [array, setarray] = useState([])
    const  [dataFive ,  setdataFive] = useState([])
    let data = []
    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/api")
            .then((res) => {
                // setarray(res.data)
                let currentData = []
                for(let i = 0 ; i<4 ; i++){
                    currentData.push(res.data[i])
                    setdataFive([...currentData])
                }
            })
    }, [])
    return (
        <div>
            <ul className='pages__teatr'>
                <li><h4>{props.data[0].title}</h4></li>
                <hr />
                <li className='text-primary'>{props.data[0].page1}</li>
                <li>{props.data[0].page2}</li>
                <li>{props.data[0].page3}</li>
                <li>{props.data[0].page4}</li>
            </ul>
            <div className='last__news'>
                <h4 className='m-4'>So‘nggi xabarlar</h4>
                <hr />
                <div className="container">
                    {
                        (dataFive.length >0) &&
                        dataFive.map((e,i) => {
                            return(
                                <>
                        <div className="row mt-1 lower__menu__item" key={i}>
                            <div className="col-4">
                                <img className='lest_new_img' src={e.profile} alt="" />
                            </div>
                            <div className="col-8 lastnewsfull">
                                <div>
                                    <p className='last__new_text__corner'><Link to={`/news/${e.id}`} state={dataFive[i]}  className='teatr_page_title'>{e.title}</Link></p>
                                </div>
                                <div>
                                    <AiOutlineClockCircle className='icon' /><span className='last__new_data__corner'>{((e.created_at).toString()).slice(0, 10)} | {((e.created_at).toString()).slice(11, 16)}</span>
                                </div>
                                <div></div>
                            </div>
                        </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LastNews