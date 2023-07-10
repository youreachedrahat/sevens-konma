import "./Faqs.css";
import BasicAccordion from "../../Components/Accordian";
const Faqs = () => {
  return (
    <div className="faqs max-sm:w-full  pl-14 max-sm:p-0 max-sm:pb-8  pb-52 relative">
      <b className="faqs1 max-sm:w-full max-sm:text-[54px] max-sm:text-center text-[72px] max-sm:p-4 ">FAQs</b>
      <BasicAccordion/>
      {/* <div className="faqImage max-sm:w-full absolute bottom-0"> */}
      <img className="faq-icon max-sm:w-auto sm:p-[20px] max-sm:h-[220px] max-sm:pb-0 absolute right-0 bottom-0" alt="" src="/faq.png" />
      {/* </div> */}
    </div>
  );
};

export default Faqs;
