import { useState, useEffect } from "react";

const useStatus = () => {
  const [Status, setStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(false);
    });
    window.addEventListener("online", () => {
      setStatus(true);
    });
  }, []);
  return Status;
};

export default useStatus;
