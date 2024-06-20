// import'./App.css';
import Users from './Users';
import Login from "./Login"
const App = () =>{
  const baseurl=process.env.REACT_APP_BASE_URL
  console.log({baseurl})
return(
<div>
{/* <Login></Login> */}
<Users/>
</div>
)
}
export default App;
