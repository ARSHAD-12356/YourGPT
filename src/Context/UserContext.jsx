import React, { createContext } from "react";
import run from "../../gemini";
export const dataContext = createContext();

function UserContext({ children }) {
  async function sent() {
    await run("Hello"); // Pass the prompt to the run function
  }
  const data = {
    sent,
  };

  return (
    <>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </>
  );
}

export default UserContext;
