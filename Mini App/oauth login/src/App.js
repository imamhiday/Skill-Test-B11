
import { useEffect, useState } from 'react';
import './App.css';
import jwtDecode from 'jwt-decode';

function App() {
  const [user, setUser] = useState({});
 
  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: "+ response.credential );
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;

  }

  useEffect(() =>{
    /* global google */
    google.accounts.id.initialize({
      client_id : "582461155163-8hjm38rotec84f3jo2dp77lhd42snfue.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    { theme: "outline", size: "large" }
    );

  },[])


  google.accounts.id.prompt();
// jika tidak ada pengunjung/user masuk akan manmpilkan tombol sign in
// jika ada user/pengguna maka akan menampilkan tombol sign out

  return (
    <div className="App">
      <div id="signInDiv"> </div>
      { Object.keys(user).length !==0 && 
        <button onClick={(e) => handleSignOut(e) }>Sign Out</button>
      }
      
      { user &&
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>  
           }
    </div>
  );
}

export default App;
