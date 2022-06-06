import React from "react";
import homeImg from './images/homeImg.webp';
import img1 from './images/img1.png';
import img3 from './images/img3.png';
import img2 from './images/img2.jpg';
import './home.css';
import Box from '@mui/material/Box';
import icon from './images/icon.jpg';
import download from './images/download.jfif';
import dp from './images/dp.svg';

const Home = () => {
    return (

        <>

            {/* Front Section */}
            <Box sx={{ backgroundImage: `url(${dp})`, height: "720px", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="showcase">
                    <div className="showcase-overlay">
                        <h1>Welcome to BlogSite</h1>
                        <h2>Anything that adds value to the readers life  </h2>
                    </div>
                </div>
            </Box>

            {/* Div Titles Section */}

            <section className="courses" id="courses">

                <h1 className="section-desc">HOW TO WRITE A GOOD BLOG POST</h1>

                <div className="row">

                    <div className="column" style={{ backgroundColor: "#E0E0E0",  textAlign:"center" }}>
                        <img src={img1} />
                        <h2>CONTENT IS KEY</h2>
                        <p>
                            First Things First: Know Your Audience. Knowing your audience is essential to writing good blogs.Spend The Time to Craft
                            Great Topics. Make Your Hook Captivating. Organize Your Blogs to Make Them More Readable.
                        </p>
                    </div>

                    <div className="column" style={{ backgroundColor: "#E0E0E0",  textAlign:"center" }} >
                        <img src={img2} />
                        <h2>DESIGN IS IMPORTANT</h2>
                        <p>
                            One of the most important elements of a blog design is readability. Make sure that the you write clear cut things in good font Size and
                            with relatable and interesting images that you choose have sufficient contrast.
                        </p>
                    </div>

                    <div className="column" style={{ backgroundColor: "#E0E0E0",  textAlign:"center" }}>
                        <img src={img3}  />
                        <h2>"CRISP & CLEAR" METHOD</h2>
                        <p>
                            Clear, well-structured content makes for a good user experience. If content's
                            badly written or badly structured, it lets down your design. Be selective. Think about what your audience needs or wants to know.
                        </p>
                    </div>

                </div>
            </section>

            <div style={{ height: "40px", textAlign: "center" ,}}>
                <div style={{marginTop:"25px"}}>
                    © 2022 Copyright:<a className='text-dark' href='#'>Diksha Sharma</a>
                </div>
            </div>

        </>
    );
}

export default Home;


















/*

            <section className='destinations' style={{ padding: "20px", textAlign: "center" }}>
                <h3 style={{ color: "#049ac8", fontSize: "30px", padding: "10px", textAlign: "center" }}>HOW TO WRITE A GOOD BLOG POST</h3>

                <div className='grid' style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                    <div className='main' style={{
                        backgroundColor: "#f1f1f1", margin: "30px", padding: "20px", borderRadius: "10px", height: "400px",
                        width: "300px"
                    }}>
                        <img src={img1} alt='destination-1' style={{padding:"5px" , borderRadius: "10px", height: "200px", width: "300px" }} />
                        <h3>CONTENT IS KEY</h3>
                        <p>
                        First Things First: Know Your Audience. Knowing your audience is essential to writing good blogs.
Spend The Time to Craft Great Topics. Make Your Hook Captivating. Organize Your Blogs to Make Them More Readable.
                        </p>
                    </div>

                    <div className='main' style={{
                        backgroundColor: "#f1f1f1", margin: "30px", padding: "20px", borderRadius: "10px", height: "400px",
                        width: "300px"
                    }}>

                        <img src={img2} alt='destination-2' style={{padding:"5px" , borderRadius: "10px", height: "200px", width: "300px" }} />
                        <h3>DESIGN IS IMPORTANT</h3>
                        <p>
                        One of the most important elements of a blog design is readability. Make sure that the you write clear cut things in good font Size and
                         with relatable and interesting images that you choose have sufficient contrast.
                        </p>
                    </div>

                    <div className='main' style={{
                        backgroundColor: "#f1f1f1", margin: "30px", padding: "20px", borderRadius: "10px", height: "400px",
                        width: "300px"
                    }}>
                        <img src={img3} alt='destination-3' style={{ borderRadius: "10px", height: "200px", width: "300px",padding:"5px" }} />
                        <h3>"CRISP & CLEAR" METHOD</h3>
                        <p>Clear, well-structured content makes for a good user experience. If content's
                             badly written or badly structured, it lets down your design. Be selective. Think about what your audience needs or wants to know.

                        </p>
                    </div>

                </div>
                </section>







*/