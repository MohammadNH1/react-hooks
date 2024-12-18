import { useContext } from "react";
import { UserContext, UserContextProvider } from "../context/user";
const User = () => {
  const { userData, setUserData } = useContext(UserContext);

  const handleChange = (e: any) => {
    const formValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserData({ ...userData, [e.target.name]: formValue });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("userData", userData);
    setUserData({
        name:'',
        age:0,
        prof:'',
        IsMarried:false
        
    })
  };
  return (
    <>
      <div>
        <h4>Users</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={userData.name}
          placeholder="Enter your name..."
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="number"
          name="age"
          value={userData.age}
          placeholder="Enter your age..."
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="prof"
          value={userData.prof}
          placeholder="Enter your profession..."
        />{" "}
        <br />
        <input onChange={handleChange} type="checkbox" name="IsMarried" />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export const UserContent = () => {
  return (
    <>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  );
};
