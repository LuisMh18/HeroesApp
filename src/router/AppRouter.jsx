import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path = "login" element={ <LoginPage /> } />
        <Route path = "/*" element={ <HeroesRoutes /> } /> {/*Cualquier ruta que no sea login nos va a levar al archivo de rutas de Heroes */}
      </Routes>
    </>
  )
}

