// "use client"

// import React, { useState } from 'react';


// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === '1234') {
//       localStorage.setItem('authenticated', 'true');
//      window.location.href="/admin";
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div>
      
//       <form onSubmit={handleSubmit} className='from'>
//         <div>
//           <label>Username:</label>  <br />
//           <input 
//             type="text" 
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)} 
//             className='form-control mb-4'
//           />
//         </div>
//         <div>
//           <label>Password:</label>  
//           <br />
//           <input 
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             className='form-control mb-4'
//           />
//         </div>
//         <button type="submit" className='btn btn-info mt-3'>Login</button>
//         {error && <p>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;


import React from 'react'

export default function page() {
  return (
    <div>
      
    </div>
  )
}
