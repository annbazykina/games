import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout.jsx';
import { Registartion } from './components/registration/Registration.jsx';
import { HomeGames } from './components/games/HomeGames.jsx';
import { NoPage } from './components/NoPage.jsx';
import { GamePage } from './components/games/GamesPage.jsx';
import './App.css';
import { WinOrLose } from './components/winLose/WinOrLose.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
            
                <Route path="/" element={ <Registartion /> } />
                <Route path="/games" element={ <Layout /> } >
                    <Route path="/games" element={<HomeGames />} />
                    <Route path="/games/:gamePage" element={<GamePage />}/>
                </Route>
                <Route path="/winlose" element={ <WinOrLose /> }/>
                <Route path="*" element={<NoPage />}/>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
