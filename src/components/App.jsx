
import UserRoutes from "./UseRoustes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SelectIsLoadingUserStatus } from "redux/auth/authSelector";
import { current } from "redux/auth/authOperation";
function  App() {

  const dispatch = useDispatch();
  const isLoadingUser = useSelector(SelectIsLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);


  return (<div
    style={{
      height: '100vh',
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      
      color: '#010101'
    }}
  >
    {isLoadingUser ? <p>....Loading</p> :
      <UserRoutes />}
   
  </div>)
}
export default App;