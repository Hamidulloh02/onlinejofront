import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { Link } from "react-router-dom"
import Stack from '@mui/material/Stack';
import NewPaginator from "../../CommonComponents/Paginator/Pagination"
import "./yangiliklar.css"
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import Fullnews from '../../FullNews/Fullnews';
function TabPanel(props, name) {
  const { children, value, index, ...other } = props;
  let location = useLocation()
  //variable

  return (
    <div
      role="tabpanel"
      // hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);
  const [data, setdata] = useState([])
  const [Yangiliklardata, setYangiliklardata] = useState([])
  const [Maqolalardata, setMaqolalardata] = useState([])
  const [Journaldata, setjournaldata] = useState([])
  const [Arxivdata, setArxivdata] = useState([])
  const [number, setnumber] = useState([])
  const [page, setPage] = useState(1)
  const [countPage , setCountPage] = useState(0)
  let location = useLocation()
  useEffect(() => {
    axios.get("http://localhost:8000/api")
      .then((res) => {
        setdata(res.data)
        var YangilikFilter = res.data.filter(news => { return (news.category.name === "Yangiliklar") });
        var MaqolalarFilter = res.data.filter(news => { return (news.category.name === "Maqolalar") });
        var JurnalsahifalaridaFilter = res.data.filter(news => { return (news.category.name === "Jurnal sahifalarida") });
        var ArxivFilter = res.data.filter(news => { return (news.category.name === "Arxiv") });
        let currentYangilik = []
        let currentMaqola  = []
        let currentJurnal = []
        let currentArxiv = []
        setCountPage(Math.ceil(YangilikFilter.length / 3))
        for(let i=3*page - 3; i<3*page; i++){
          if(YangilikFilter[i]){
            currentYangilik.push(YangilikFilter[i])
            currentMaqola.push(MaqolalarFilter[i])
            currentJurnal.push(JurnalsahifalaridaFilter[i])
            currentArxiv.push(ArxivFilter[i])
          }
        }
        setYangiliklardata(currentYangilik)
        setMaqolalardata(currentMaqola)
        setArxivdata(currentArxiv)
        setjournaldata(currentJurnal)

        // setMaqolalardata(MaqolalarFilter)
      })

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }, [page])
 
  const handleChange = (event, newValue) => {
    setValue(newValue)
  };
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  return (
    <Box sx={{ width: '100%' }} className="news__select_menu">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={location.state.id || value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          className='select__menu'>
          <Tab label={<div className='new__btn'>Yangiliklar</div>} {...a11yProps(0)} />
          <Tab label={<div className='new__btn'>Maqolalar</div>} {...a11yProps(1)} />
          <Tab label={<div className='new__btn'>Jurnal sahifalarida</div>} {...a11yProps(2)} />
          <Tab label={<div className='new__btn'>Arxiv</div>} {...a11yProps(3)} />
          {/* <Tab label={<div className='new__btn'>Navo</div>} {...a11yProps(4)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={location.state.id || value} index={0}>
        <div className="container new__full mt-5">
          <div className="row">
            {
              Yangiliklardata.map((e, i) => {
                return (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                      <div data-aos="zoom-in" className="new__card">
                        <div className='new__img_div me-3'>
                          <img className='new__img' src={e.profile} alt="" />
                        </div>
                        <div>
                          <Link to="/information" state={Yangiliklardata[i]} className="titlenews"><h6>{e.title}</h6></Link>
                          <div><button className='new__btn'>{e.category.name}</button><span className='new__data'>2022-10-17 | 19.43</span></div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
        <Pagination page={page} onChange={handleChangePage}  count={countPage} color="primary" />
      </TabPanel>
      <TabPanel value={location.state.id || value} index={1}>
        <div className="container new__full mt-5">
          <div className="row">
            {
              Maqolalardata.map((e, i) => {
                return (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                      <div data-aos="zoom-in" className="new__card">
                        <div className='new__img_div me-3'>
                          <img className='new__img' src={e.profile} alt="" />
                        </div>
                        <div>
                          <Link to="/information" state={Maqolalardata[i]} className="titlenews"><h6>{e.title}</h6></Link>
                          <div><button className='new__btn'>{e.category.name}</button><span className='new__data'>2022-10-17 | 19.43</span></div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
        <Pagination page={page} onChange={handleChangePage}  count={countPage} color="primary" />
      </TabPanel>
      <TabPanel value={location.state.id || value} index={2}>
        <div className="container new__full mt-5">
          <div className="row">
            {
              Journaldata.map((e, i) => {
                return (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                      <div data-aos="zoom-in" className="new__card">
                        <div className='new__img_div me-3'>
                          <img className='new__img' src={e.profile} alt="" />
                        </div>
                        <div>
                          <Link to="/information" state={Journaldata[i]} className="titlenews"><h6>{e.title}</h6></Link>
                          <div><button className='new__btn'>{e.category.name}</button><span className='new__data'>2022-10-17 | 19.43</span></div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
        <Pagination page={page} onChange={handleChangePage}  count={countPage} color="primary" />
      </TabPanel>
      <TabPanel value={location.state.id || value} index={3}>
        <div className="container new__full mt-5">
          <div className="row">
            {
              Arxivdata.map((e, i) => {
                return (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                      <div data-aos="zoom-in" className="new__card">
                        <div className='new__img_div me-3'>
                          <img className='new__img' src={e.profile} alt="" />
                        </div>
                        <div>
                          <Link to="/information" state={Arxivdata[i]} className="titlenews"><h6>{e.title}</h6></Link>
                          <div><button className='new__btn'>{e.category.name}</button><span className='new__data'>2022-10-17 | 19.43</span></div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
        <Pagination page={page} onChange={handleChangePage}  count={countPage} color="primary" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Hozircha bu sahifa bo`sh
      </TabPanel>
    </Box>
  );
}