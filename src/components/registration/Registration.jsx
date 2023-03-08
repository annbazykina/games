/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import { useUser } from '../../hooks/useUser';
import { Button } from '../button/Button';
import './registration.css';
import { useEffect, useState } from 'react';

export const Registartion = () => {
    const { name, deposit, logo } = useSelector(state => state.user);
    const { handleChangeLogo, handleChange, handleStartBtn } = useUser();
    const [error, setError] = useState({
        inputName: false,
        inputDeposit: false,
    });

    return (
        <div className="app">
            
            <div className="registrationWrapper">
                <div className="registartion">
                    <h1>Привіт &#128075;! Давай пограємо?</h1>
                    <form className="registartionForm">
                        <label htmlFor="inputLogo" className="labelLogo">{logo ? 'Логотип завантажен' : 'Ваш логотип'}</label>
                        <input 
                            className="input"
                            accept="image/*"
                            id="inputLogo"
                            value=''
                            type="file"
                            name="logo"
                            onChange={handleChangeLogo()}
                        />
                        <label htmlFor="inputName"></label>
                        <input 
                            required
                            className={`input ${error.inputName ? 'error' : ''}`}
                            name="name"
                            type="text" 
                            id="inputName"
                            placeholder="Ваше ім'я"
                            value={name}
                            onChange={handleChange('userName')}
                            
                        />
                        <label htmlFor="inputDeposit"></label>
                        <input 
                            required
                            min="1" 
                            step="1"
                            className={`input ${error.inputDeposit ? 'error' : ''}`}
                            name="deposit"
                            type="number" 
                            id="inputDeposit"
                            placeholder="Ваш депозит"
                            value={deposit}
                            onChange={handleChange('deposit')}
                            
                        />
                        <Button 
                        title={'Почати'} 
                        classBtn={"btn btnRegistration"} 
                        handleButton={handleStartBtn}
                        // disabled={ deposit <= 0 || logo === null || name === "" || deposit === "" ? "disable" : null }
                        
                        />
                    </form>
                    
                </div>
            </div>   

        </div>
        
    );
};


