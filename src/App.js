import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import UserTable from "./Kanbas/users/table";
import Signin from "./Kanbas/users/signin";
import Signup from "./Kanbas/users/signup";

function App() {
  return (
<HashRouter>
  <div>
    <Routes>
      <Route path="/"         element={<Navigate to="/Labs"/>}/>
      <Route path="/Labs/*"   element={<Labs/>}/>
      <Route path="/hello"    element={<HelloWorld/>}/>
      <Route path="/kanbas/*" element={<Kanbas/>}/>
      <Route path="/admin/users" element={<UserTable />} />
      <Route path="/Account/signin"         element={<Signin />}/>
      <Route path="/Account/signup"         element={<Signup />}/>



    </Routes>
  </div>
</HashRouter>
  );
}
export default App;



