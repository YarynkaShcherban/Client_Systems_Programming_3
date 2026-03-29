import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
        <header className="header-bar">
            <div className="logo">bookstore</div>
            <div className="auth-nav">
                <Link to="/register" className="btn-outline">Зареєструватись</Link>
                <Link to="/login" className="btn-primary" style={{ width: 'auto' }}>Увійти</Link>
            </div>
        </header>

        <div className="main-layout">
            <aside className="sidebar">
                <nav>
                    <div className="sidebar-title">Меню</div>
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-item">
                            <Link to="/home" className="sidebar-nav-link">Каталог</Link>
                        </li>
                        <li className="sidebar-nav-item">
                            <Link to="/home" className="sidebar-nav-link">Адреси книгарень</Link>
                        </li>
                    </ul>

                    <div className="sidebar-title" style={{ marginTop: '30px' }}>Особисте</div>
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-item">
                            <Link to="/home" className="sidebar-nav-link">Бажанки</Link>
                        </li>
                        <li className="sidebar-nav-item">
                            <Link to="/home" className="sidebar-nav-link">Покупки</Link>
                        </li>
                        <li className="sidebar-nav-item">
                            <Link to="/users" className="sidebar-nav-link">Користувачі (Адмін)</Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main className="content-area">
                <h1>Вітаємо у нашій книгарні</h1>
                <p>Оберіть розділ у меню зліва, щоб почати перегляд.</p>

                <div className="section-divider" />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '20px',
                }}
                >
                    <div className="user-card-detail" style={{ margin: 0, padding: '20px' }}>
                        <h3>Новинки</h3>
                        <p>Тут скоро з'являться найновіші надходження нашого каталогу.</p>
                    </div>
                    <div className="user-card-detail" style={{ margin: 0, padding: '20px' }}>
                        <h3>Акції</h3>
                        <p>Слідкуйте за нашими спеціальними пропозиціями для постійних клієнтів.</p>
                    </div>
                </div>
            </main>
        </div>
    </>
);

export default Home;
