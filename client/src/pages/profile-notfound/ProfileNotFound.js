import Button from 'react-bootstrap/Button';
import React from 'react'
import Navbar from "../../components/NavbarLogin/NavbarLogin";
import "./profileNotFound.css";
export default function ProfileNotFound() {
  return (
    <>
    <div className='pnpPage'>
    <Navbar/>
    <div class="mars"></div>
<img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" alt=""/>
<img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor"alt="" />
<p class="title">Oh no!!</p>
<p class="subtitle">
	You’re either misspelling the URL <br /> or requesting a page that's no longer here.
</p>
<div align="center">
	<a href="/home"><Button variant="primary">Back to Home</Button></a>
</div>
<img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" alt="" />
<img src="https://assets.codepen.io/1538474/spaceship.svg" class="spaceship" alt="" />
</div>  
    </>
  )
}

// export default function HomeLogin() {
//   return (
//     <>
      
//    
//     </>
//   );
// }
