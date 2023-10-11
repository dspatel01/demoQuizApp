import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
    return (
        <>


            <div className="card">
                <div className="card-item">
                    <div className="exam-title">
                        <h2> Progamming</h2>
                    </div>
                    <div className="test-items">

                        <ul>
                            <Link to="/HtmlQuestion">
                                <li>Html</li>
                            </Link>
                            <Link to="/cssQuestion">
                                <li>CSS</li>
                            </Link>
                            <Link to="/javaQuestion">
                                <li>Java</li>
                            </Link>
                            <Link to="/javascriptQuestion">
                                <li>Javascript</li>
                            </Link>
                            <Link to="/phpQuestion">
                                <li>Php</li>
                            </Link>
                            <Link to="/sqlQuestion">
                                <li>Sql</li>
                            </Link>

                        </ul>
                    </div>
                </div>
                {/* 
                    <div className="card-item">
                        <div className="exam-title">
                            <h2>General Knowledge</h2>
                        </div>
                        <div className="test-items">
                            <ul>
                            <a href="/"> <li>Test 1</li></a>
                            <a href="/"> <li>Test 2</li></a>
                            <a href="/"> <li>Test 3</li></a>
                            </ul>
                        </div>
                    </div>

                    <div className="card-item">
                        <div className="exam-title">
                            <h2>Math</h2>
                        </div>
                        <div className="test-items">
                            <ul>
                            <a href="/"> <li>Test 1</li></a>
                            <a href="/"> <li>Test 2</li></a>
                            <a href="/"> <li>Test 3</li></a>
                            </ul>
                        </div>
                    </div>

                    <div className="card-item">
                        <div className="exam-title">
                            <h2>Science</h2>
                        </div>
                        <div className="test-items">
                            <ul>
                            <a href="/"> <li>Test 1</li></a>
                            <a href="/"> <li>Test 2</li></a>
                            <a href="/"> <li>Test 3</li></a>
                            </ul>
                        </div>
                    </div>

                    <div className="card-item">
                        <div className="exam-title">
                            <h2>Reasining</h2>
                        </div>
                        <div className="test-items">
                            <ul>
                            <a href="/"> <li>Test 1</li></a>
                            <a href="/"> <li>Test 2</li></a>
                            <a href="/"> <li>Test 3</li></a>
                            </ul>
                        </div>
                    </div> */}
            </div>

        </>
    )
}

export default Home