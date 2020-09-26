import React from 'react';
import App from './App';
import Types from './type/Types';
import Therapist from './therapist/Therapist';
import Home from './Home';
import WhyTherapy from './WhyTherapy';

const Router = () => {
    if (window.location.pathname.endsWith('/therapist')) {
        return <App><Therapist></Therapist></App>
    }
    
    if (window.location.pathname.endsWith('/types')) {
        return <App><Types></Types></App>
    }

    if (window.location.pathname.endsWith('/whytherapy')) {
        return <App><WhyTherapy></WhyTherapy></App>
    }

    return <App><Home></Home></App>
}

export default Router;