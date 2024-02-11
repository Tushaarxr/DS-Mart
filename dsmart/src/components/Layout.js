import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Helmet } from 'react-helmet' //for adding seo in webpage
import { ToastContainer } from 'react-toastify';//notifaction
import 'react-toastify/dist/ReactToastify.css';



const Layout = ({ children, title, description, keywords }) => {
    return (
        <div>
            <Helmet>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <title>{title}</title>



            </Helmet>



            <Navbar />
            <main style={{ minHeight: "150vh" }}>
                <ToastContainer/>
                {children}
            </main>


            <Footer />

        </div>
    )
}

Layout.defaultProps = {
    title: "DS Mart-The Lowest Price Super Bazzar",
    description: "DBMS project",
    keywords: "Grocery"


}

export default Layout
