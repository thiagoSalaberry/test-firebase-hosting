import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Layout } from "../components/layout";
import { SearchPage } from "../pages/search";
import { ProductPage } from "../pages/product";
export function ChallengeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/search/:query" element={<SearchPage />} />
                <Route path="/item/:id" element={<ProductPage />} />
            </Route>
        </Routes>
    )
}