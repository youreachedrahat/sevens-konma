import "./Section2.css";
const Section2 = () => {
  return (
    <div className="section-2 max-sm:text-left max-sm:h-auto max-sm:w-[100%] max-sm:p-5 max-sm:pb-10">
      <div className="section-21 sm:gap-0 max-sm:w-[100%] max-sm:h-auto">
        <div className="section2top max-sm:w-[100%] max-sm:h-auto">
          <div className="cta max-sm:w-[100%] max-sm:h-auto">
            <p className="book-your-demo-today  max-sm:pr-5 max-sm:pl-0">
              <span className="book-your-demo-today1 max-sm:text-[48px] max-sm:h-auto max-sm:leading-7 sm:text-7xl">
                <b className=" max-sm:ml-0 max-sm:w-[90%]">Book Your Demo Today!</b>
                <span>{` `}</span>
                <p className="book-your-demo-today">&nbsp;</p>
              </span>
            </p>
            <p className="whatsapp-us-on-44-7537-180047">
              <span className="whatsapp-us-on-44-7537-1800471 max-sm:leading-9">
                <span>
                  <span className="max-sm:text-[24px]">WhatsApp Us on </span>
                </span>
                <span className="span max-sm:block">
                  <b className="b max-sm:text-[28px] max-sm:h-auto">+44 7537 180047</b>
                  <span className="b">{` `}</span>
                </span>
              </span>
            </p>
          </div>
          <div className="section2top-child max-sm:text-center" />
        </div>
        <div className="section2text1 max-sm:w-auto max-sm:h-auto">
          <p className="book-your-demo-today sm:text-[25px] max-sm:text-center max-sm:mx-auto">
            <b>Why should you choose Sevens Gaming? </b>
          </p>
          <p className="book-your-demo-today">&nbsp;</p>
        </div>
        <div className="section2text2 max-sm:flex-col max-sm:gap-20">
          <div className="text1 max-sm:text-[25px] max-sm:text-center max-sm:mx-auto">
            <p className="book-your-demo-today">
              <b>40+</b>
            </p>
            <p className="satisfied-clients">satisfied clients</p>
          </div>
          <div className="text2 max-sm:text-[25px] max-sm:text-center max-sm:mx-auto">
            <p className="book-your-demo-today">
              <span>
                <span> Integrated with</span>
              </span>
            </p>
            <p className="top-gaming-providers">
              <span>
                <span>{` `}</span>
                <b>top gaming providers</b>
              </span>
            </p>
          </div>
          <div className="text3 max-sm:text-[25px] max-sm:text-center max-sm:mx-auto">
            <span>
              <b>6+</b>
            </span>
            <span className="years-of-expertise">
              <span>{` `}</span>
              <span>years of expertise</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
