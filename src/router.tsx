import { BrowserRouter, Routes, Route } from "react-router-dom";
import MswPage from "./stories/MswPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MswPage />} />
            </Routes>
        </BrowserRouter>
    );
};