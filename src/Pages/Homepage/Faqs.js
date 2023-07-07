import "./Faqs.css";
import BasicAccordion from "../../Components/Accordian";
const Faqs = () => {
  return (
    <div className="faqs max-sm:w-full">
      <b className="faqs1 max-sm:w-full max-sm:text-[54px] text-[72px]">FAQs</b>
      <BasicAccordion/>
      <div className="faqImage max-sm:w-full">
      <img className="faq-icon max-sm:w-auto max-sm:h-[300px]" alt="" src="/faq@2x.png" />
      </div>
    </div>
  );
};

export default Faqs;
