import "./Faqs.css";
import BasicAccordion from "../../Components/Accordian";
const Faqs = () => {
  return (
    <div className="faqs max-sm:w-full  pl-14 max-sm:p-0">
      <b className="faqs1 max-sm:w-full max-sm:text-[54px] text-[72px] max-sm:p-4">FAQs</b>
      <BasicAccordion/>
      <div className="faqImage max-sm:w-full">
      <img className="faq-icon mt-[-25%] max-sm:w-auto max-sm:h-[220px] max-sm:pb-0" alt="" src="/faq@2x.png" />
      </div>
    </div>
  );
};

export default Faqs;
