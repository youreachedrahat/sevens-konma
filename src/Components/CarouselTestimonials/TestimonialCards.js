
import Slider from './Carousel';
function TestimonialCards() {


  const slideData = [
    {
      index: 0,
      headline: 'In-Play betting',
      para: 'Better Live Betting Experience',
    },
    {
      index: 1,
      headline: 'In The Wilderness',
      para: 'Check Every Update For Your Favourite Sports',
      src: '/live.gif',
    },
    {
      index: 2,
      headline: 'Geniebet',
      para: 'Create Your Own Script For The Game',
    },
    {
      index: 3,
      headline: ' ',
      button: ' ',
    },
  ];



  return (
   <>
   <div className='overhidden'>

     <Slider heading="Testimonial Slider" slides={slideData} />;

   </div>

   </>
  );
}

export default TestimonialCards;
