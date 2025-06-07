import { createContext } from "react";

const UserContext = createContext({
  defaultName: "userName",
  userId: null,
  DOB: null,
});

export default UserContext;

//! to create a context ( context data can be accessible from anywhere from react app ) : createContext()
