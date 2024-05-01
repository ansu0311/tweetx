import React, { useEffect, useState } from 'react'
import './Home.scss'
import Navbar from '../../Components/Navbar/Navbar'
import User from './User/User'
import Feed from './Feed/Feed'
import Profile from './Profile/Profile'
import ContentWrapper from '../../Components/ContentWrapper/ContentWrapper'
import { TestData } from '../../Assets/Data/TestData'
import { TestFeed } from '../../Assets/Data/TestFeed'

const Home = ({toggleDarkMode,loggedin}) => {

    const [page,setPage] = useState("feed")
    const [detail,setDetail] = useState(TestData)

    const elementShow = () =>{
        switch(page){
            case "user":
                return <User detail={detail} setDetail={setDetail}/>
            case "feed":
                return <Feed TestFeed={TestFeed}/>
            default:
                return <Profile TestFeed={TestFeed} detail={detail} setDetail={setDetail}/>
        }
    }

    useEffect(() =>{
        elementShow()
    },[page])

  return (
    <>
    <Navbar loggedin={loggedin} toggleDarkMode={toggleDarkMode} setPage={setPage} page={page}/>
    <div className='pageTransition'>
        <ContentWrapper>
            {elementShow()}
        </ContentWrapper>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Home