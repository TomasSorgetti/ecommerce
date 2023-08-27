import axios from "axios";
import { useEffect,useState } from "react"
const Profile = () => {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState({})
    console.log(user);
    useEffect(() => {
        if (typeof token === "string") {
            try {
                const URL = "http://localhost:3001/user";
                const res = async () => {
                    await axios.get(URL, {
                      headers: {
                        authorization: token,
                      },
                    }).then((response) => {
                        if (response.status !== 200) throw "Error fetching user data"
                        setUser(response.data)
                    })
                }
                res()
            } catch (error) {
                console.log(error);
            }
        }
    },[token])
  return (
    <div>
      <h1>
        {user.name} {user.lastname}
      </h1>
      <h3>{user.email}</h3>
      <h4>{user.role}</h4>
    </div>
  );
}

export default Profile