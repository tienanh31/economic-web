import { Outlet } from "react-router-dom"
import Header from "../user/partials/Header"
import Footer from "../user/partials/Footer"
import Navbar from "../user/partials/Navbar"
import LoadingState from "../user/partials/LoadingState"

const UserLayout = () => {
  return (
    <>
    <LoadingState/>
        <Header />
        <Navbar/>
        <main className="main">
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default UserLayout