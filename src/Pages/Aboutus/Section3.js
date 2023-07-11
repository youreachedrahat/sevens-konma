import "./Section3.css";
const Section3 = () => {
  return (
//     <div className="section-3 max-sm:w-[100%] max-sm:h-auto max-sm:py-10 sm:mx-auto pb-5 md:px-0 lg:px-0  ">
//       <div className="section3frame max-sm:w-[100%] max-sm:h-auto sm:mx-auto lg:mx-0 lg:w-auto lg:h-auto ">
//         {/* <b className="section3top  max-sm:text-center">{`Team `}</b> */}
//         <div className="sectionbody max-sm:w-[100%] max-sm:flex-col-reverse max-sm:h-auto max-sm:p-5 max-sm:items-center md:flex-col md:px-10  md:items-center lg:flex-col xl:flex-row sm:flex-col sm:items-center md:w-auto md:h-auto ">
//           <div className="section3top-parent max-sm:w-[100%] md:w-auto">
//           <b className="section3top max-sm:hidden sm:text-center">Team </b>
//             <div className="section3text max-sm:w-[100%] max-sm:h-auto max-sm:text-[16px] sm:text-[24px]md:px-0">
//               <p className="a-team-of max-sm:w-auto max-sm:h-auto max-sm:text-[16px] max-sm:leading-7 sm:text-[24px] md:px-0 lg:w-auto lg:h-auto ">A team of industry experts started the venture six years ago with a mission to solve the common problems in this industry in a way that they never occur again. And, that vision seems to be coming to life as our complaints department has been almost idle in the last few years. However, the team believes in continuous improvement. Hence, we keep working on innovation and introduce unique features regularly. This has further just solidified our position as the industry leader.</p>
//               {/* <p className="a-team-of">&nbsp;</p> */}
//             </div>
//           </div>
//           <img
//             className="imageteam-icon max-sm:align-center max-sm:w-[100%] max-sm:h-auto"
//             alt=""
//             src="/imageteam@2x.png"
//           />
//           <b className="section3top sm:hidden max-sm:text-center">{`Team `}</b>
//         </div>
//         {/* <div className="container3" /> */}
//       </div>
//     </div>
//   );
// };


<div className='section-3'>
<div className='flex justify-center items-start flex-col max-sm:text-[16px] max-md:px-10 lg:px-20 sm:text-[24px] max-sm:px-10 sm:items-center lg:items-start'>
  <b className=' max-sm:h-auto max-sm:mx-auto max-sm:text-center  max-sm:top-0 sm:text-[44px] max-sm:text-[32px] max-md:px-20 lg:px-10 md:text-[60px]'>
    Team
  </b>
  <div className='flex flex-col-reverse lg:flex-row items-start md:px-10'>
    <div className='lg:mt-12 w-full leading-10 max-sm:leading-7 mt-12'>
    A team of industry experts started the venture six years ago with 
    a mission to solve the common problems in this industry in a way that they never occur again.
    And, that vision seems to be coming to life as our complaints department has been almost idle in the last few years.
    However, the team believes in continuous improvement. Hence, we keep working on innovation and introduce unique features regularly. 
    This has further just solidified our position as the industry leader.
    </div>
    <div className='justify-center items-center flex w-full'>
      <img className='' alt='' src="/imageteam@2x.png"/>
    </div>
  </div>
</div>
<br />
<br />
</div>
);
};




export default Section3;
