import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState("Ralf");
  function handleChangeUser(newUser) {
    setUser(newUser);
  }
  return (
    <>
      <h1>Unsere tolle Movie App</h1>
      <Component user={user} onChangeUser={handleChangeUser} {...pageProps} />
    </>
  );
}
