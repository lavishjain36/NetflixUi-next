import Navbar from "./Navbar";


const Layout=({chidren})=>{
    return(
    <div>
        <Navbar/>
        <main>
            {chidren}
        </main>
    </div>
    )
 
}

export default Layout;