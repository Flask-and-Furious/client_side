import { Button, Subtitle, Title } from "../../components";

function Logout() {
  return (
    <>
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle="You have logged out" />
        <Button text="Return Home" nextPage="/" />
      </div>
    </>
  );
}

export default Logout;
