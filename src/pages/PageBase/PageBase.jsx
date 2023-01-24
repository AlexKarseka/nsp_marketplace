import React from "react";
import PropTypes from 'prop-types';
import Header from "./components/Header";
import Footer from "./components/Footer";

const PageBase = ({children}) => {
    return (
        <div>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

PageBase.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageBase;
