import "./Form.css";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";

export default function Form() {
  return (
    <section className="form">
      <form>
        <Title>
          <h1> LOGIN </h1>
        </Title>
        <Input require={true} label="User" placeholder="Username" />
        <Input require={true} label="Password" placeholder="Password" />
        <Button>Get in!</Button>
      </form>
    </section>
  );
}
