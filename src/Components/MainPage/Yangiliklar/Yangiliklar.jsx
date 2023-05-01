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
import CircularProgress from '@mui/material/CircularProgress';
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
  const [Journaldata, setJournaldata] = useState([])
  const [Arxivdata, setArxivdata] = useState([])
  const [number, setnumber] = useState([])
  const [page, setPage] = useState(1)
  const [countPage , setCountPage] = useState(0)
  let location = useLocation()
  useEffect(() => {
      setCountPage(100) 
      axios.get(`${process.env.REACT_APP_API}/api/pagination?page=${page}&search=Yangiliklar`)
      .then((ress) => {
        setYangiliklardata(ress.data.results)
      })
      axios.get(`${process.env.REACT_APP_API}/api/pagination?page=${page}&search=Maqolalar`)
      .then((ress) => {
        setMaqolalardata(ress.data.results)
      })
      axios.get(`${process.env.REACT_APP_API}/api/pagination?${page}&search=Arxiv`)
      .then((ress) => {
        setArxivdata(ress.data.results)
      })
      axios.get(`${process.env.REACT_APP_API}/api/pagination?${page}&search=Jurnaldan`)
      .then((ress) => {
        setJournaldata(ress.data.results)
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
      </Box>
      <TabPanel value={location.state.id } index={0}>
        <div className="container new__full mt-4">
          <h2 className='text-center mb-4 categoryTitlename'>Yangiliklar</h2>
          <div className="row">
            {
              (Maqolalardata.length>0)?
              Yangiliklardata.map((e, i) => {
                return (
                  <>    
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                       <Link to={`/news/${e.id}`} state={Yangiliklardata[i]} className='titlenews'> 
                      <div data-aos="zoom-in" className="new__card">
                        <div className='new__img_div me-3'>
                          <img className='new__img' src={e.profile} alt="" />
                        </div>
                        <div>
                          <h6 className="titlenews">{e.title}</h6>
                          <div><button className='new__btn'>{e.category.name}</button><span className='new__data'>{((e.created_at).toString()).slice(0,10)} | {((e.created_at).toString()).slice(11,16)}</span></div>
                        </div>
                      </div>
                       </Link>
                    </div>
                  </>
                )
              })
              :
              <div className='text-center'>
                < CircularProgress/>
              </div>
            }
          </div>
        </div>
        <Pagination page={page} onChange={handleChangePage}  count={countPage} color="primary" />
      </TabPanel>
      <TabPanel value={location.state.id } index={1}>
        <div className="container new__full mt-4">
        <h2 className='text-center mb-4 categoryTitlename'>Maqolalar</h2>
          <div className="row">
            {
              (Maqolalardata.length >0)?
             
              Maqolalardata.map((e, i) => {
                return (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                    <Link to={`/news/${e.id}`} state={Maqolalardata[i]} className="titlenews">
                      <div data-aos="zoom-in" className="new__card">
                        <div className='new__img_div me-3'>
                          <img className='new__img' src={e.profile} alt="" />
                        </div>
                        <div>
                          <h6 className="titlenews">{e.title}</h6>
                          <div><button className='new__btn'>{e.category.name}</button><span className='new__data'>{((e.created_at).toString()).slice(0,10)} | {((e.created_at).toString()).slice(11,16)}</span></div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </>
                )
              })
              :
              <div className='text-center'>
                 < CircularProgress/>
              </div>
            }
          </div>
        </div>
        <Pagination page={page} onChange={handleChangePage}  count={countPage} color="primary" />
      </TabPanel>
      <TabPanel value={location.state.id } index={2}>
        <div className="container new__full mt-4">
        <h2 className='text-center mb-4 categoryTitlename'>Jurnaldan</h2>
          <div className="row">
            {
              (Maqolalardata.length>0)?
              Journaldata.map((e, i) => {
                return (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                    <Link to={`/news/${e.id}`} state={Journaldata[i]} className="titlenews">
                      <div data-aos="zoom-in" className="new__card">
                        <div className='new__img_div me-3'>
                          <img className='new__img' src={e.profile} alt="" />
                        </div>
                        <div>
                          <h6 className="titlenews">{e.title}</h6>
                          <div><button className='new__btn'>{e.category.name}</button><span className='new__data'>{((e.created_at).toString()).slice(0,10)} | {((e.created_at).toString()).slice(11,16)}</span></div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </>
                )
              })
              :
              <div className='text-center'>
                < CircularProgress/>
              </div>
            }
          </div>
        </div>
        <Pagination page={page} onChange={handleChangePage}  count={countPage} color="primary" />
      </TabPanel>
      <TabPanel value={location.state.id } index={3}>
        <div className="container new__full mt-4">
        <h2 className='text-center mb-4 categoryTitlename'>Arxiv</h2>
          <div className="row">
            {
              (Maqolalardata.length>0)?
              Arxivdata.map((e, i) => {
                return (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                    <Link to={`/news/${e.id}`} state={Arxivdata[i]} className="titlenews">
                      <div data-aos="zoom-in" className="new__card">
                        <div className='new__img_div me-3'>
                          <img className='new__img' src={e.profile} alt="" />
                        </div>
                        <div>
                          <h6>{e.title}</h6>
                          <div><button className='new__btn'>{e.category.name}</button><span className='new__data'>{((e.created_at).toString()).slice(0,10)} | {((e.created_at).toString()).slice(11,16)}</span></div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </>
                )
              })
              :
              <div className='text-center'>
                < CircularProgress/>
              </div>
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