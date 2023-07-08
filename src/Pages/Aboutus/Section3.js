import "./Section3.css";
const Section3 = () => {
  return (
    <div className="section-3 max-sm:w-[100%] max-sm:h-auto max-sm:py-10 sm:mx-auto sm:py-0">
      <div className="section3frame max-sm:w-[100%] max-sm:h-auto sm:mx-auto">
        <div className="sectionbody max-sm:w-[100%] max-sm:flex-col-reverse max-sm:h-auto max-sm:p-5 max-sm:items-center sm:mx-auto ">
          <div className="section3top-parent max-sm:w-[100%]">
            <div className="section3text max-sm:w-[100%] max-sm:h-auto max-sm:p-5 max-sm:text-[16px] sm:text-[24px]">
          
              <p className="a-team-of">{`A team of industry experts started the venture six years ago with a mission to solve the common problems in this industry in a way that they never occur again. And, that vision seems to be coming to life as our complaints department has been almost idle in the last few years. However, the team believes in continuous improvement. Hence, we keep working on innovation and introduce unique features regularly. This has further just solidified our position as the industry leader. `}</p>
              {/* <p className="a-team-of">&nbsp;</p> */}
            </div>
          </div>
          <img
            className="imageteam-icon max-sm:align-center max-sm:w-[100%] max-sm:h-auto"
            alt=""
            src="/imageteam@2x.png"
          />
          <b className="section3top sm:hidden max-sm:text-center">{`Team `}</b>
        </div>
        {/* <div className="container3" /> */}
      </div>
    </div>
  );
};

export default Section3;
