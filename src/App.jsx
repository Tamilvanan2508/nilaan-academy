import { useState, useEffect } from "react";
import classroomImage from "./assets/na-classroom.jpg";
import successImage from "./assets/na-success.jpg";

export default function App() {
  // State for scroll-to-top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Effect to handle scroll event for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="font-sans">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#ffaa33] text-[#ffffff] p-3 rounded-full shadow-lg z-50 hover:bg-[#ff9900] transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      {/* Updated header with navy background and logo styling */}
      <header className="flex justify-between items-center px-8 py-4 shadow bg-[#1a1f4d] text-white">
        <div className="flex items-center">
          <div className="mr-3 hidden md:block">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img
                src={successImage}
                alt="Classroom"
                className="rounded-full"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold">NILAAN ACADEMY</h1>
        </div>
        <nav className="space-x-4 md:space-x-6">
          <a
            href="#home"
            className="hover:text-[#ffaa33] hidden md:inline-block"
          >
            Home
          </a>
          <a
            href="#courses"
            className="hover:text-[#ffaa33] hidden md:inline-block"
          >
            Courses
          </a>
          <a
            href="#about"
            className="hover:text-[#ffaa33] hidden md:inline-block"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-[#ffaa33] hidden md:inline-block"
          >
            Contact
          </a>
          <button className="bg-[#ffaa33] text-[#ffaa33] px-4 py-2 rounded font-semibold hover:bg-[#ff9900] transition">
            Join Now
          </button>
        </nav>
      </header>

      {/* Hero section with updated colors and tagline */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center px-8 py-16 bg-gradient-to-r from-[#ffaa33] to-[#ff9900]"
      >
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-extrabold text-[#1a1f4d]">
            ADMISSIONS OPEN NOW
          </h2>
          <h3 className="text-2xl font-bold text-white">
            LEARN - GROW - SUCCEED
          </h3>
          <p className="text-lg text-white">
            Offline Classes And Online Courses - Making Learning Convenient and
            Fun!
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-[#1a1f4d] text-white px-6 py-3 rounded text-lg font-semibold hover:bg-blue-800 transition">
              Get Started
            </button>
            <button className="bg-white text-[#ffaa33] px-6 py-3 rounded text-lg font-semibold border-2 border-[#1a1f4d] hover:bg-gray-100 transition">
              15% OFF
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={classroomImage}
            alt="Classroom"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Our services section with updated design and fixed text visibility */}
      <section className="text-center py-16 bg-white">
        <h3 className="text-3xl font-bold mb-8 text-[#1a1f4d]">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
          <div className="bg-[#1a1f4d] text-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">TNPSC</h4>
            <p className="text-sm">GROUP - 1/2 & 2A/4</p>
            <div className="mt-4 flex justify-center">
              <svg
                className="w-6 h-6 text-[#ffaa33]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="bg-[#1a1f4d] text-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">TNUSRB</h4>
            <p className="text-sm">Sub Inspector & Police Constable</p>
            <div className="mt-4 flex justify-center">
              <svg
                className="w-6 h-6 text-[#ffaa33]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="bg-[#1a1f4d] text-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">SSC</h4>
            <p className="text-sm">Staff Selection Commission Exam</p>
            <div className="mt-4 flex justify-center">
              <svg
                className="w-6 h-6 text-[#ffaa33]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="bg-[#1a1f4d] text-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">RRB</h4>
            <p className="text-sm">Railway Recruitment Exam</p>
            <div className="mt-4 flex justify-center">
              <svg
                className="w-6 h-6 text-[#ffaa33]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Courses section with updated pricing and improved visibility */}
      <section id="courses" className="py-16 px-8 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-10 text-[#1a1f4d]">
          Browse Our Courses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TNPSC courses */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#1a1f4d] text-white p-4">
              <h4 className="text-xl font-bold text-center">TNPSC</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-gray-800">GROUP 1</h5>
                  <div className="text-right">
                    <p className="font-bold text-[#ffaa33]">₹20,000</p>
                  </div>
                </div>
              </div>
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-gray-800">GROUP 2</h5>
                  <div className="text-right">
                    <p className="font-bold text-[#ffaa33]">₹18,000</p>
                  </div>
                </div>
              </div>
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-gray-800">GROUP 4</h5>
                  <div className="text-right">
                    <p className="font-bold text-[#ffaa33]">₹15,000</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center bg-gray-100 p-2 rounded text-sm text-gray-800 font-medium">
                COMPLEMENTARY ONLINE CLASSES FOR ALL GROUP
              </div>
            </div>
          </div>

          {/* TNUSRB courses */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#1a1f4d] text-white p-4">
              <h4 className="text-xl font-bold text-center">TNUSRB</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-gray-800">SI</h5>
                  <div className="text-right">
                    <p className="font-bold text-[#ffaa33]">₹18,000</p>
                  </div>
                </div>
              </div>
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-gray-800">P.C</h5>
                  <div className="text-right">
                    <p className="font-bold text-[#ffaa33]">₹15,000</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center bg-gray-100 p-2 rounded text-sm text-gray-800 font-medium">
                COMPLEMENTARY ONLINE CLASSES FOR ALL GROUP
              </div>
            </div>
          </div>

          {/* SSC and RRB courses */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#1a1f4d] text-white p-4">
              <h4 className="text-xl font-bold text-center">Other Exams</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-gray-800">SSC</h5>
                  <div className="text-right">
                    <p className="font-bold text-[#ffaa33]">₹18,000</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-gray-800">RRB</h5>
                  <div className="text-right">
                    <p className="font-bold text-[#ffaa33]">₹18,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-[#1a1f4d] text-center">
            About Nilaan Academy
          </h3>

          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              <img
                src={successImage}
                alt="Success"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="md:w-1/2 space-y-4">
              <h4 className="text-2xl font-semibold text-[#1a1f4d]">
                Our Mission
              </h4>
              <p className="text-gray-700">
                At Nilaan academy, Our mission is to empower and guide aspirants
                of Tamil Nadu competitive examinations, including TNPSC, through
                high-quality, accessible, and result-oriented coaching. We are
                committed to nurturing talent, building confidence, and
                fostering academic excellence. By providing well-structured
                study materials, expert mentorship, and regular assessments, we
                aim to help students realize their full potential and achieve
                success in government exams. Our ultimate goal is to contribute
                to the development of a knowledgeable, responsible, and
                service-minded generation for Tamil Nadu.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#ffaa33] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <marquee direction="up" className="max-h-40">
                <h4 className="text-xl font-semibold mb-2 text-[#1a1f4d]">
                  Benefits
                </h4>
                <p className="text-gray-700">
                  We provide quality coaching classes "Success Made
                  Simple & Affordable."
                </p>

                <h4 className="text-xl font-semibold mb-2 text-[#1a1f4d] mt-8">
                  நன்மைகள்
                </h4>
                <p className="text-gray-700">
                  "வெற்றி எளிமையாகவும் மலிவாகவும்" தரமான பயிற்சி வகுப்புகளை
                  நாங்கள் வழங்குகிறோம்
                </p>
              </marquee>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#ffaa33] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <marquee direction="up" className="max-h-40">
                <h4 className="text-xl font-semibold mb-2 text-[#1a1f4d]">
                  Expert Faculty
                </h4>
                <p className="text-gray-700">
                  Our faculty team consists of highly qualified and experienced
                  educators who specialize in TNPSC and other competitive exams.
                  They simplify complex topics, provide exam-focused strategies,
                  and guide every student with dedication and care to ensure
                  success.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-[#1a1f4d] mt-8">
                  அறிஞர் பேராசிரியர்கள்
                </h4>
                <p className="text-gray-700">
                  எங்கள் ஆசிரியர்கள் TNPSC மற்றும் போட்டித் தேர்வுகளில் சிறந்த
                  அனுபவம் பெற்றவர்கள். கடினமான தலைப்புகளை எளிமையாகக்
                  கற்றுத்தருவதில் நிபுணத்துவம் பெற்றவர்கள். தேர்வுக்கு தேவையான
                  திறன்கள் மற்றும் வழிகாட்டல்களை மாணவர்களுக்கு முழுமையாக
                  வழங்குகிறார்கள்
                </p>
              </marquee>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#ffaa33] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
              </div>
              <marquee direction="up" className="max-h-40">
                <h4 className="text-xl font-semibold mb-2 text-[#1a1f4d]">
                  Comprehensive Resources
                </h4>
                <p className="text-gray-700">
                  We provide well-structured study materials, updated notes,
                  previous year question papers, and practice tests – everything
                  you need for complete TNPSC exam preparation in one place.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-[#1a1f4d] mt-8">
                  முழுமையான படிப்புப் பொருட்கள்
                </h4>
                <p className="text-gray-700">
                  TNPSC தேர்வுக்கான அனைத்து தேவைகளையும் பூர்த்தி செய்யும்
                  வகையில் எங்கள் படிப்புப் பொருட்கள் திட்டமிடப்பட்டவை – நூல்கள்,
                  குறிப்பு குறிப்புகள், கடந்த வருட கேள்விகள், பயிற்சி தேர்வுகள்
                  அனைத்தும் ஒரே இடத்தில்!
                </p>
              </marquee>
            </div>
          </div>

          <div className="bg-[#1a1f4d] text-white p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl font-semibold mb-4 text-center">
              Our Commitment to Excellence
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-xl font-semibold mb-2 text-[#ffaa33]">
                  Student-Centric Approach
                </h5>
                <p>
                  We believe in personalized attention and maintain a favorable
                  teacher-student ratio to address individual learning needs and
                  challenges.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2 text-[#ffaa33]">
                  Updated Curriculum
                </h5>
                <p>
                  Our curriculum is regularly updated to reflect the latest exam
                  patterns, syllabus changes, and trends in question papers to
                  give our students a competitive edge.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2 text-[#ffaa33]">
                  Mentorship Program
                </h5>
                <p>
                  Each student is assigned a mentor who provides guidance,
                  motivation, and support throughout their preparation journey.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2 text-[#ffaa33]">
                  Technology Integration
                </h5>
                <p>
                  We leverage digital tools and online resources to enhance
                  learning experiences and provide flexibility to our students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special features section with academy highlights */}
      <section className="bg-[#ffaa33] py-16 text-[#1a1f4d] px-8">
        <h3 className="text-3xl font-bold mb-8 text-center">
          What Makes Us Special
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <ul className="space-y-4 text-left text-lg list-none">
              {[
                "100+ tests with discussion",
                "Complete study materials",
                "Daily Class handouts",
                "Special focus on mental ability class and general tamil",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#ffaa33] mt-1.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <ul className="space-y-4 text-left text-lg list-none">
              {[
                "Regular mentorship from experts",
                "Flexible learning options",
                "Affordable pricing with discounts",
                "Personalized guidance, expert teaching, and affordable excellence",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#ffaa33] mt-1.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 px-8 text-center bg-white">
        <h3 className="text-3xl font-bold mb-8 text-[#1a1f4d]">
          What Our Students Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <blockquote className="bg-gray-100 p-6 rounded-xl text-lg italic shadow-md text-gray-700">
            "The faculty members are highly knowledgeable and supportive. They
            provide clear explanations and smart strategies that helped me
            understand complex topics easily."
            <br />
            <span className="font-semibold mt-4 block text-[#1a1f4d]">
              – Vidhya
            </span>
          </blockquote>
          <blockquote className="bg-gray-100 p-6 rounded-xl text-lg italic shadow-md text-gray-700">
            "The regular tests, study materials, and personalized guidance
            played a key role in boosting my confidence."
            <br />
            <span className="font-semibold mt-4 block text-[#1a1f4d]">
              – Rajesh
            </span>
          </blockquote>
        </div>
      </section>

      {/* Contact section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-[#1a1f4d] to-[#2a3060] text-white py-16 px-8"
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[20px] font-semibold mb-4">Our Address</h4>
              <p className="mb-2 text-[17px]">
                1st Floor no, 2/161, Vengaivasal Main Road,
              </p>
              <p className="mb-2 text-[17px]">
                Opp to EB Office, Santhosapuram,
              </p>
              <p className="mb-4 text-[17px]">
                Sembakkam, Chennai, Tamil Nadu - 600 073
              </p>

              <h4 className="text-[20px] font-semibold mb-4 mt-6">
                Contact Information
              </h4>

              <a
                href="tel:+916382313042"
                className="mb-2 flex items-center hover:text-[#535bf2]! transition text-white! text-[17px]"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                +91 63823 13042
              </a>

              <a
                href="mailto:academynilaan@gmail.com"
                className="mb-2 flex items-center hover:text-[#535bf2]! transition text-white! text-[17px]"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                academynilaan@gmail.com
              </a>

              <a
                href="https://www.nilaanacademy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 flex items-center hover:text-[#535bf2]! transition text-white! text-[17px]"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                www.nilaanacademy.in
              </a>

              <a
                href="https://maps.app.goo.gl/GiYJN1uxxehhPAQAA?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 flex items-center hover:text-[#535bf2]! transition text-white! text-[17px]"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Google Maps & Reviews
              </a>

              <a
                href="https://www.instagram.com/nilaan_academy"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 flex items-center hover:text-[#535bf2]! transition text-white! text-[17px]"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <g transform="translate(2,2)">
                    <path d="M8 0C5.75 0 5.5.01 4.625.048 3.75.088 3.13.23 2.625.437c-.527.215-.975.5-1.42.945C.76 1.827.475 2.275.26 2.8.052 3.3-.088 3.92-.05 4.8.01 5.67 0 5.94 0 8c0 2.06.01 2.33.05 3.2.038.88.18 1.5.387 2 .215.527.5.975.945 1.42.445.445.893.73 1.42.945.5.207 1.12.349 2 .387C5.67 15.99 5.94 16 8 16s2.33-.01 3.2-.05c.88-.038 1.5-.18 2-.387.527-.215.975-.5 1.42-.945.445-.445.73-.893.945-1.42.207-.5.349-1.12.387-2 .04-.87.05-1.14.05-3.2 0-2.06-.01-2.33-.05-3.2-.038-.88-.18-1.5-.387-2-.215-.527-.5-.975-.945-1.42-.445-.445-.893-.73-1.42-.945-.5-.207-1.12-.349-2-.387C10.33.01 10.06 0 8 0zm0 1.44c2.015 0 2.26.008 3.057.045.737.035 1.138.157 1.403.26.353.136.605.3.87.565.265.265.43.517.565.87.103.265.225.666.26 1.403.037.797.045 1.042.045 3.057s-.008 2.26-.045 3.057c-.035.737-.157 1.138-.26 1.403a2.32 2.32 0 0 1-.565.87 2.32 2.32 0 0 1-.87.565c-.265.103-.666.225-1.403.26-.797.037-1.042.045-3.057.045s-2.26-.008-3.057-.045c-.737-.035-1.138-.157-1.403-.26a2.32 2.32 0 0 1-.87-.565 2.32 2.32 0 0 1-.565-.87c-.103-.265-.225-.666-.26-1.403C1.448 10.26 1.44 10.015 1.44 8s.008-2.26.045-3.057c.035-.737.157-1.138.26-1.403.136-.353.3-.605.565-.87.265-.265.517-.43.87-.565.265-.103.666-.225 1.403-.26C5.74 1.448 5.985 1.44 8 1.44zM8 3.9a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2zm0 6.76a2.66 2.66 0 1 1 0-5.32 2.66 2.66 0 0 1 0 5.32zm3.82-6.93a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z" />
                  </g>
                </svg>
                nilaan_academy
              </a>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-[#1a1f4d]">
                Send Us a Message
              </h4>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-2 border rounded h-24"
                  ></textarea>
                </div>
                <button className="bg-[#ffaa33] text-white px-6 py-2 rounded font-semibold hover:bg-[#ff9900] transition w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with updated branding */}
      <footer className="bg-[#1a1f4d] text-white py-10 px-8">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
          <div>
            <h4 className="text-xl font-semibold flex items-center">
              <span className="mr-2 bg-white text-[#1a1f4d] w-8 h-8 rounded-full flex items-center justify-center">
                N
              </span>
              Nilaan Academy
            </h4>
            <p className="text-[#ffaa33] font-semibold">
              LEARN - GROW - SUCCEED
            </p>
            <p className="mt-2">+91 63823 13042</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6 md:mt-0">
            <div className="space-y-2">
              <h5 className="font-semibold">Quick Links</h5>
              <a href="#home" className="block hover:text-[#ffaa33]">
                Home
              </a>
              <a href="#courses" className="block hover:text-[#ffaa33]">
                Courses
              </a>
              <a href="#about" className="block hover:text-[#ffaa33]">
                About
              </a>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold">Exams</h5>
              <a href="#" className="block hover:text-[#ffaa33]">
                TNPSC
              </a>
              <a href="#" className="block hover:text-[#ffaa33]">
                TNUSRB
              </a>
              <a href="#" className="block hover:text-[#ffaa33]">
                SSC / RRB
              </a>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold">Connect</h5>
              <a href="#" className="block hover:text-[#ffaa33]">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-[#ffaa33]">
                Terms of Service
              </a>
              <a href="#contact" className="block hover:text-[#ffaa33]">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800">
          <p className="text-sm text-center">
            &copy; 2025 Nilaan Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
