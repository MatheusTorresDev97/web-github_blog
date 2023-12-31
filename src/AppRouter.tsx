import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Blog } from "./pages/Blog";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Blog />} />
            </Route>
        </Routes>
    )
}