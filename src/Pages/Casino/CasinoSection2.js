import "./CasinoSection2.css";
import loading from "../../assets/loading.gif"
const CasinoSection2 = () => {
  return (
    <div className="casinosection2 max-sm:px-0">
      <div className="casinossection-2 max-sm:w-auto max-sm:h-auto">
        <div className="casino2top  max-sm:flex-col max-sm:pt-0 max-sm:gap-0 max-sm:justify-center max-sm:items-center">
          <b className="title2indigo max-sm:w-auto max-sm:h-auto max-sm:pt-10 max-sm:text-center max-sm:px-25">
            Casino Provider Integrations
          </b>
          <img
            className="casinoimage1-icon max-sm:static max-sm:h-auto max-sm:w-[300px]"
            alt=""
            src={loading}
          />
        </div>
        <div className="textindigo1 max-sm:w-auto max-sm:h-auto max-sm:px-10 max-sm:align-justify max-sm:tracking-tighter">
          We have established partnerships with the top providers in the
          industry, such as Evolution Gaming, 7Mojos, VIVO Gaming, and Ezugi, to
          provide our players with the best possible gaming experiences. These
          providers are known for their exceptional quality and their ability to
          create games that are immersive and engaging, while also offering a
          range of betting limits to accommodate players of all levels. Our
          Integration Process Integrating live casino games into our platform
          involves working closely with our provider partners to ensure that our
          players can seamlessly access and enjoy these games. Our integration
          process is designed to be fast and reliable, ensuring that our players
          can get started playing their favorite games quickly and easily. We
          use the latest technologies to ensure that our games are secure and
          reliable, giving our players the confidence to play and win.
        </div>
      </div>
    </div>
  );
};

export default CasinoSection2;
