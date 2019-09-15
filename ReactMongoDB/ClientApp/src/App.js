import React from 'react';
//import { Route } from 'react-router';
import Layout from './components/Layout';
//import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Author from './components/Pages/Author';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

export default () => (
    <Router>
        <PageWrapper>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/authors" component={Author} />
        </PageWrapper>
    </Router>
);
