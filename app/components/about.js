const About = () => {
  return (
    <div id="about" className="bg-[#292930] text-white px-4 py-5 md:py-8 relative">
      <p className="text-5xl font-bold mb-12">About us</p>
      <div className="md:h-[450px] mb-5 object-cover flex flex-row justify-end">
        <img src="about.avif" />
      </div>
      <div className="md:absolute md:w-[42%] top-32">
        <p className="text-lg md:text-2xl text-left">
          {" "}
          Megha Enterprises is a 6 years 28 days old Proprietorship Firm <br />
          We specializes in trading industrial hardware and electrical goods,
          including MCBs, MS pipes, SS pipes, and more.
          <br /> Our extensive inventory meets the diverse needs of clients
          across various sectors, ensuring reliability and efficiency in every
          transaction. Trust us for all your industrial hardware and electronics
          needs.
        </p>
      </div>
    </div>
  );
};

export default About;
