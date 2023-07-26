import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = lazy(() => import('./Login'))

const RoutesComponent = () => (
    <Router>
        <Suspense fallback={<div className="d-flex justify-content-center pt-5"> <CircularProgress/> </div>}>
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* Adicione outras rotas aqui, se necessário */}
            </Routes>
        </Suspense>
    </Router>
);

export default RoutesComponent;