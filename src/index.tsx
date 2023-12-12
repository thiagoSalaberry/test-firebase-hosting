import React, {useEffect, useState, Suspense} from 'react';
import {createRoot} from "react-dom/client";
import {RecoilRoot} from "recoil";
import { ChallengeRoutes } from './router/router';
import { BrowserRouter } from 'react-router-dom';
import { SearchForm } from './components/search-form';
const app = document.querySelector(".app")!;
const root = createRoot(app);
root.render(
    //El componente RecoilRoot nos indica que todo lo que esté dentro de su nodo recibirá átomos (una parte del state pensado para un dato)
    <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <ChallengeRoutes></ChallengeRoutes>
            </BrowserRouter>
        </Suspense>
    </RecoilRoot>
);