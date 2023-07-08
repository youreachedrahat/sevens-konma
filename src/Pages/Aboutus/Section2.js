import "./Section2.css";
const Section2 = () => {
  return (
    <div className="section-2 max-sm:text-left ... max-sm:h-auto max-sm:w-[100%]">
      <div className="section-21 sm:gap-0">
        <div className="section2top">
          <div className="cta">
            <p className="book-your-demo-today">
              <span className="book-your-demo-today1 sm:text-7xl">
                <b>Book Your Demo Today!</b>
                <span>{` `}</span>
              </span>
            </p>
            <p className="whatsapp-us-on-44-7537-180047">
              <span className="whatsapp-us-on-44-7537-1800471">
                <span>
                  <span>{`WhatsApp Us on `}</span>
                </span>
                <span className="span">
                  <b className="b">+44 7537 180047</b>
                  <span className="b">{` `}</span>
                </span>
              </span>
            </p>
          </div>
          <div className="section2top-child max-sm:text-center" />
        </div>
        <div className="section2text1 max-sm:w-auto max-sm:h-auto">
          <p className="book-your-demo-today sm:text-[25px]">
            <b>{`Why should you choose Sevens Gaming? `}</b>
          </p>
          <p className="book-your-demo-today">&nbsp;</p>
        </div>
        <div className="section2text2">
          <div className="text1">
            <p className="book-your-demo-today">
              <b>{`40+ `}</b>
            </p>
            <p className="satisfied-clients">satisfied clients</p>
          </div>
          <div className="text2">
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
          <div className="text3">
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
