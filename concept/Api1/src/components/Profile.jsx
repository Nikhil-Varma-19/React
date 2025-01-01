import UserContext from "../context/UserContext"
import { useContext } from "react"

const Profile = () => {
    const {user} =useContext(UserContext)

  if(!user) return(
    <div className="mt-10">
        <h1>Please Login </h1>
    </div>
  )
  else return(
      <div className="mt-10  ">
        <h1>Welcome <h2>{user.username}</h2></h1>
      </div>
   )
}

export default Profile
