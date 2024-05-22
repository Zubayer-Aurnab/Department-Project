import Footer from "@/Components/Shared/Footer/Footer";
import NavBar from "@/Components/Shared/Nav/NavBar";

const page = () => {
  return (
    <div className="bg-[#FFF0F0]  ">
      <NavBar />
      <div className=" px-3 lg:px-0 lg:w-4/5 mx-auto lg:h-[60vh]">
        <h1 className="text-4xl lg:text-4xl  pt-10  mb-10 font-bold text-center text-[#342E5C] ">
          About Us
        </h1>
        <div className="text-[#342E5C]">
          <p className="text-justify tracking-widest text-xl font-semibold">
            <span className="text-4xl font-semibold">PSY 10</span>
            is for the energetic 10th batch of Tejgaon College's Psychology
            department! Driven by a collective curiosity about the human mind,
            we're more than just classmates – we're a psychology family. This
            website is our creation, a virtual space built just for our batch.
            It's a place where we can collaborate on projects, share study tips,
            and most importantly, stay connected.
            <br />
            <br />
            We've launched a vibrant website for enhanced communication. This
            platform fosters collaboration, resource-sharing, and mutual support
            among us. Embracing innovation, we unite to enrich our academic
            journey and cultivate a strong community. Together, we leverage
            technology to propel our growth as aspiring leaders in psychology.
            <br />
            <br />
            Driven by our passion for psychology and our desire to make a
            positive impact, we harness the power of technology to enhance our
            educational experience and strengthen our bonds as classmates and
            friends. From organizing study groups to sharing research findings,
            our website serves as a catalyst for collaboration and synergy,
            enriching our learning journey and shaping us into future leaders in
            the field of psychology. Together, as the 10th batch of the
            psychology department at Tejgaon College, we are united in our
            pursuit of knowledge, growth, and excellence.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
