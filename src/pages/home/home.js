import React, { useState } from 'react'
import { Header } from '../../components/header/header'
import { MainPage } from '../../components/mainPage/mainPage'
import SubPage from '../subPage/subPage'

export const Home = () => {
    
    const [page, setPage] = useState('home')
  return (
    <div>
        <Header page={page} setPage={setPage} />
        {CurrentPage(page, setPage)}
    </div>
  )
}


function CurrentPage(page, setPage) {

    switch(page) {
        case "home":
            return <MainPage page={page} setPage={setPage} />;
        case "subPage":
            return <SubPage />;
        default:
            return <MainPage page={page} setPage={setPage} />;
    }
}
