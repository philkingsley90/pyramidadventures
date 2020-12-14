import { useHistory } from "react-router-dom";

const Content = () => {
  const history = useHistory();
  history.push("/");

  return null;
};

export default Content;
