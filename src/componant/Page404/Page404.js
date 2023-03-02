import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div style={{ backgroundColor: "#002431", height: "100vh", width: "100%" }} className="text-secondary d-flex align-items-center justify-content-center">
            <div>

                <h1 style={{ fontSize: "50px", textAlign: "center" }}><span>O</span>ops <br /> Page not found <br /> 404 <br />
                    <Link style={{ fontSize: "24px" }} to='/'>Back to home</Link></h1>

            </div>
        </div>
    );
};

export default Page404; <h1>This is 404 page</h1>