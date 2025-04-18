import { useContext } from "react";
import Chatsection from "./component/ChatSection/Chatsection";
import Sepration from "./component/Sepration/Sepration";
import Sidebar from "./component/Sidebar/Sidebar";
import { dataContext } from "./Context/UserContext";

function App() {
  let data = useContext(dataContext);
  console.log(data);
  return (
    <>
      <Sidebar />
      <Sepration />
      <Chatsection />
    </>
  );
}

export default App;
