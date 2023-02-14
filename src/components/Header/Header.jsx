import React from 'react';
import logo from '../../Assets/Img/site-logo.svg';
import search from '../../Assets/Img/search.svg';
import user from '../../Assets/Img/user.svg';
import './Header.scss';

function Header() {
  return (
    <header className='site-header'>
        <div className='container'>
            <div className='header'>
                <a className='header__logo' href='#link'>
                    <img src={logo} alt="site logo" />
                </a>
                <ul className='header__list'>
                    <li className='header__item'>
                        <span className='dicreption'>Tashkent</span>
                    </li>
                    <li className='header__item'>
                        <span className='Kontact'>Контакты</span>
                    </li>
                    <li className='header__item'>
                        <form>
                            <input placeholder='qidirish...' />
                            <img src={search} alt='search'/>
                        </form>
                    </li>
                    <li>
                        <div>
                            <img src={user} alt='user' />
                            <span>Личный кабинет</span>
                        </div>
                    </li>
                    <li>
                        <a href='tel:998912989808'>+(998) 903 17 92 96</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
