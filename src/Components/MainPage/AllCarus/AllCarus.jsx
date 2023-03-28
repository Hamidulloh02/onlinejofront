import React from 'react'
import { useState,useEffect } from 'react'
import NewsCarus from '../NewsCarusel/NewsCarus'
import NewCarusMobile from "../NewsCarusel/NewCarusMobile"
import axios from 'axios'
//import Css
import "./allCarus.css"

function AllCarus() {
    const [dataAll,setdataAll] = useState([])
    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/api")
        .then((res) => {
            setdataAll(res.data)
        })

    },[])
    {
        var YangilikFilter = dataAll.filter(news => { return (news.category.name === "Yangiliklar") });
        var ArxivFilter = dataAll.filter(news => { return (news.category.name === "Arxiv") });
        var JurnalsahifalaridaFilter = dataAll.filter(news => { return (news.category.name === "Jurnal sahifalarida") });
        var MaqolalarFilter = dataAll.filter(news => { return (news.category.name === "Maqolalar") });
      }
  console.log(dataAll)
  return (
    <>
    <div className='allCarusDekstop'>
        <NewsCarus data={YangilikFilter} title={"Yangiliklar"}/>
        <NewsCarus data={MaqolalarFilter} title={"Maqolalar"}/>
        <NewsCarus data={JurnalsahifalaridaFilter} title={"Jurnal sahifalarida"}/>
        <NewsCarus data={ArxivFilter} title={"Arxiv"}/>
    </div>    
    <div className='allCarusMobile'>
        <NewCarusMobile data={dataAll}/>
    </div>
    </>

  )
}

export default AllCarus