import BookAMeeting from "../ActionButton";
import Container from "../Container";
const heroBg = {
  backgroundImage:
    "url('./herobg.png')",

  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  layout:"fill"
};

const Hero = () => {
  return (
    <section style={heroBg} className="flex items-center text-white px-8 min-h-[450px] lg:min-h-[720px]">
      <Container>

       <div className="w-full lg:w-5/12 flex flex-col ">
          <h1 className="text-white capitalize mb-3 text-4xl font-bold leading-snug sm:text-[40px] lg:text-[42px] xl:text-[48px]">
            Your Website&apos;s Essence Captured in One Headline
          </h1>
          <p className="mb-8 max-w-5/12 text-base text-white">
            The featured post section description is a succinct follow-up to a compelling headline. Keep it brief, straightforward, and pointedly descriptive.
          </p>

          <div className="flex flex-col items-center py-3 space-y-3 sm:space-x-4 lg:space-y-0 md:flex-row justify-center lg:justify-start ">
            <BookAMeeting title="Read More >" link={`/register`} /> 
          </div>


        </div>
      </Container>
    </section>
  );
}


export default Hero;