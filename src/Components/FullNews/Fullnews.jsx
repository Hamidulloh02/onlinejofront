import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { AiOutlineClockCircle } from 'react-icons/ai';
import "./fullnews.css"
import LastNews from '../CommonComponents/Lastnews/LastNews';
//mui
import CircularProgress from '@mui/material/CircularProgress';

//import jsom
import fullmainjson from "./fulmainjson.json"
import axios from 'axios';
import { ChangeCircle } from '@mui/icons-material';
function Fullnews(props) {
  const params = useParams()
  let location = useLocation()

  const [NewsData, setNewsData] = useState({})
  const [isLoading , setLoading] = useState(false)
  const [url, seturl] = useState([])
  let datatime = `${NewsData.created_at}`
  datatime.toString()
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    seturl((window.location.href).slice(27))
    let id = params.id
    if (id == "") {
      id = url
    }
    axios.get(`${process.env.REACT_APP_API}/api/${id}`)
      .then((ress) => {
        setNewsData(ress.data)
        setLoading(true)
      })
      .catch((err)=>{
        setLoading(false)
      })
  }, [params])
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 ">
            {(isLoading)?
              <div>
                <div>
                <h2 className='mt-5 '>{NewsData.title}</h2>
                <p className='mb-3'><AiOutlineClockCircle className='time__icon' />{((datatime)).slice(0, 10)} | {((datatime)).slice(11, 16)}</p>
                 </div>
                <img className='mb-5' src={NewsData.profile} alt="image" />
                <div
                  dangerouslySetInnerHTML={{ __html: NewsData.body }}
                /></div> 
                :
                <div className='text-center mt-5'>
                  < CircularProgress />
                </div>}
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mt-5 pt-5">
            <LastNews data={fullmainjson} />
          </div>
        </div>
      </div>

    </div>
  )

}
export default Fullnews