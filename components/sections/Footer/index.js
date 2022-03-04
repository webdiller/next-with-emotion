import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__list">
                    <p className="footer__list-title">О нас</p>
                    <Link><a href="#" className="footer__list-item">Наши возможности</a></Link>
                    <Link><a href="#" className="footer__list-item">Наша история</a></Link>
                    <Link><a href="#" className="footer__list-item">Что делает нас уникальными</a></Link>
                    <Link><a href="#" className="footer__list-item">Отзывы</a></Link>
                    <Link><a href="#" className="footer__list-item">Свяжитесь с нами</a></Link>
                </div>

                <div className="footer__list">
                    <p className="footer__list-title">Наши услуги</p>
                    <Link><a href="#" className="footer__list-item">Похороны</a></Link>
                    <Link><a href="#" className="footer__list-item">Кремация</a></Link>
                    <Link><a href="#" className="footer__list-item">Прощание</a></Link>
                    <Link><a href="#" className="footer__list-item">Поминки</a></Link>
                    <Link><a href="#" className="footer__list-item">Памятники</a></Link>
                </div>

                <div className="footer__list">
                    <Link><a href="#" className="footer__list-item">Венки/цветы</a></Link>
                    <Link><a href="#" className="footer__list-item">Транспортные услуги</a></Link>
                    <Link><a href="#" className="footer__list-item">Прижизненный договор</a></Link>
                    <Link><a href="#" className="footer__list-item">Дополнительные услуги</a></Link>
                </div>

                <div className="footer__list">
                    <p className="footer__list-item">
                        Телевизорная 1 строение 10 <br />
                        г.Красноярск, 660028
                    </p>
                    <Link><a href="#" className="footer__list-item">Телефон: 2560540</a></Link>
                    <Link><a href="#" className="footer__list-item">8 (902) 926-97-03</a></Link>
                    <Link><a href="#" className="footer__list-item"
                    >Email: ritualnaya24@gmail.com</a
                    >
                </div>
            </div>
        </footer>
    )
}
