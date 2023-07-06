import "./CasinoSection1.css";
import HorizontalRule from "../../Components/HorizontalRule"

const CasinoSection1 = () => {
  return (
    <div className="casinosection1">
      <div className="casinosection-1">
      <div className="casinoTop">
        <div className="rectangle">
          <b className="title max-sm:h-auto max-sm:text-center max-sm:text-4xl" >{`Online Live Casino Games Integrations`}</b>
        </div>
      <HorizontalRule/>
        
      </div>
       
        <div className="text-white max-sm:w-auto max-sm:h-auto max-sm:pl-7 max-sm:pr-7 max-sm:text-justify">
          <p className="at-sevens-gaming">{`At Sevens Gaming, we offer the best in online gaming experiences through our partnerships with the top providers in the industry. `}</p>
          <p className="at-sevens-gaming">
            <span>{`Our live casino gaming services provide you with access to the latest and greatest in online gaming experiences. Our platform offers a range of games from `}</span>
            <b className="blackjack">blackjack</b>
            <span className="blackjack">{`, `}</span>
            <b className="blackjack">roulette</b>
            <span className="blackjack">{`, and `}</span>
            <b className="blackjack">baccarat</b>
            <span className="blackjack">{` to newer games like `}</span>
            <b className="blackjack">Monopoly Live</b>
            <span className="blackjack">{` and `}</span>
            <b className="blackjack">Dream Catcher</b>
            <span className="blackjack">{`. We also offer popular Indian games like `}</span>
            <b className="blackjack">teen patti</b>
            <span className="blackjack">{`, `}</span>
            <b className="blackjack">andar-bahar</b>
            <span className="blackjack">{`, `}</span>
            <b className="blackjack">bollywood stars</b>
            <span className="blackjack">{`, `}</span>
            <b className="blackjack">jhandi munda</b>
            <span className="blackjack">{` and much more. Our services are designed to be easy to use and accessible from any device, allowing you to enjoy the gaming experience wherever you are. `}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CasinoSection1;
