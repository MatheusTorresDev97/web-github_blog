import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>

            </Route>
        </Routes>
    )
}