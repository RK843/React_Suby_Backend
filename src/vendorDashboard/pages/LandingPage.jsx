import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'




const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showFirm, setShowFirm] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [showLogOut, setShowLogOut] = useState(false);
  const [showFirmTitle, setShowFirmTitle]=useState(true);
  
  useEffect(()=>{
    const loginToken = localStorage.getItem('loginToken');
    if(loginToken){
      setShowLogOut(true);
      setShowWelcome(true);
    }
  },[])

  useEffect(()=>{
    const firmName = localStorage.getItem('firmName');
    const firmId = localStorage.getItem('firmId');
    if(firmName || firmId){
      setShowFirmTitle(false);
      setShowWelcome(true);
    }
  },[])

  const logOutHandler =()=>{
    confirm('Are you sure to logout?')
    localStorage.removeItem("loginToken");
    localStorage.removeItem("firmId");
    localStorage.removeItem("firmName");
    setShowLogOut(false)
    setShowFirmTitle(true)
    setShowWelcome(false)
  }

  const showLoginHandler =()=>{
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowAllProducts(false)
    setShowWelcome(false)
    setShowLogin(true)
  }

  const showRegisterHandler =()=>{
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowAllProducts(false)
    setShowWelcome(false)
    setShowRegister(true)
  }

  const showFirmHandler =()=>{

    if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowProduct(false)
    setShowAllProducts(false)
    setShowWelcome(false)
    setShowFirm(true)
    
  }else{
    alert("please login");
    setShowLogin(true);
  }
  }

  const showProductHandler =()=>{
    if(showLogOut){
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowAllProducts(false)
    setShowWelcome(false)
    setShowProduct(true)
  }else{
    alert("please login");
    setShowLogin(true);
  }
}

  const showAllProductsHandler =()=>{
    if(showLogOut){
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(true)
  }else{
    alert("please login");
    setShowLogin(true);
  }
}
  
  const showWelcomeHandler=()=>{
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowAllProducts(false)
    setShowProduct(false)
    setShowWelcome(true)
  }
  

  return (
    <>
        <section className='landingsection'>
            <NavBar showLoginHandler = {showLoginHandler} showRegisterHandler={showRegisterHandler}
            showLogOut={showLogOut}
            logOutHandler={logOutHandler}/>
            <div className="collectionSection">
            <SideBar showFirmHandler = {showFirmHandler} showProductHandler={showProductHandler} 
            showAllProductsHandler={showAllProductsHandler}
             showFirmTitle={showFirmTitle}/>
            {showFirm && showLogOut && <AddFirm />}
            {showProduct && showLogOut && <AddProduct/> }
            {showWelcome && <Welcome/>}
            {showAllProducts && showLogOut && <AllProducts/>}
            {showLogin && <Login ShowWelcomeHandler={showWelcomeHandler}/>}
            {showRegister &&  <Register showLoginHandler={showLoginHandler}/>}
            </div>
        </section>
    </>
  )
}

export default LandingPage