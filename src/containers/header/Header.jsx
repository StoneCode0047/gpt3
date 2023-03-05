import "./header.css";
import People from "../../assets/people.png";
import AI from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding " id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something Amazing With GPT-3 OpenAI
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum et
          illo iusto accusantium nemo laudantium! Quisquam, amet? Ipsam,
          molestias dolor. Aspernatur, cupiditate dolore exercitationem ducimus
          accusamus ullam possimus fuga voluptatum.
        </p>

        <div className="gpt3__header-content_input">
          <input type="email" placeholder="Youe Email Address" id="" />
          <button type="button"> Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={People} alt="people" />
          <p>1600+ people requested access a visit in the last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-img">
        <img src={AI} alt="Ai" />
      </div>
    </div>
  );
};

export default Header;
