import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const data = useContext(UserContext);

  return (
    <div>
      <h1 className="font-bold text-3xl m-2 p-2">
        Welcome to Contact page, from here u can able to Reach us!
      </h1>
      <form>
        <input
          type="text"
          className="m-3 p-3 border border-solid border-e-black"
          placeholder="E-mail"
        ></input>
        <input
          type="text"
          className="m-3 p-3 border border-solid border-e-black"
          placeholder="Leave Your Message here!"
        ></input>

        <button
          type="submit"
          className="m-3 p-3 border border-solid border-e-black rounded-2xl cursor-pointer"
          onClick={() => {
            alert(
              "You will get a reply from our team side shortly, thank you for your patience "
            );
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
