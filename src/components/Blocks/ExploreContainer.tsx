import "./ExploreContainer.scss";
import { Input } from "../Elements/Input";
interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <form  id="container">
      <Input iconURL={"assets/inputs-icon/mail.svg"} altIcon={"iconMail"} placeholder={"Mail"} labelType={"email"} />
      <Input iconURL={"assets/inputs-icon/password.svg"} altIcon={"iconLock"} placeholder={"Mot de passe"} labelType={"password"} />
    </form >
  );
};

export default ExploreContainer;
