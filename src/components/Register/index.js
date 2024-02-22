import Button from "../Button";
import Input from "../Input";
import "./Register.css";
import Title from "../Title";
import { IoArrowBackOutline } from "react-icons/io5";
import RegisterLink from "../RegisterLink";


export default function Register() {
  return (
    <section className="register">
      <form>
        <RegisterLink url="/">
          <IoArrowBackOutline className="back" size={40} color="#00FFFF" />
        </RegisterLink>
        <Title>
          {" "}
          <h1> Register in our website </h1>{" "}
        </Title>
        <Input
          require={true}
          label="Type the username"
          placeholder="Username"
        />
        <Input
          require={true}
          label="create a password"
          placeholder="Password"
        />
        <Input
          require={true}
          label="Verify your password"
          placeholder="Password"
        />
        <Button>Register</Button>
      </form>
    </section>
  );
}
