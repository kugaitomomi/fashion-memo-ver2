// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../FirebaseConfig.js";

// const Register = () => {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");

//     /* ↓関数「handleSubmit」を定義 */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//     } catch(error) {
//       alert("正しく入力してください");
//     }
//   };

//   return (
//     <>
//       <h1>新規登録</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>メールアドレス</label>
//           <input
//             name="email"
//             type="email"
//             defaultValue={registerEmail}
//             onChange={(e) => setRegisterEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>パスワード</label>
//           <input
//             name="password"
//             type="password"
//             defaultValue={registerPassword}
//             onChange={(e) => setRegisterPassword(e.target.value)}
//           />
//         </div>
//         <button>登録する</button>
//       </form>
//     </>
//   );
// };

// export default Register;