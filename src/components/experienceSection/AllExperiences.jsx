import SingleExperience from "./SingleExperience";

const experiences = [
  {
    job: "Game Programming Instructor",
    company: "Game Development Club",
    date: "Oct 2024 - Mar 2025",
    responsibilities: [
      "Taught basic and intermediate game development using Unity and C#.",
      "Guided students in creating 2D and 3D game projects from concept to prototype.",
    ],
  },
  {
    job: "Coordinator Website",
    company: "Starlight UMN 2025",
    date: "Feb 2025 - Sep 2025",
    responsibilities: [
      "Designed and developed a full-stack web application using PHP, JavaScript, and MongoDB.",
      "Implemented RESTful APIs for data retrieval and manipulation.",
    ],
  },
  {
    job: "Laboratory Assistant",
    company: "Universitas Multimedia Nusantara",
    date: "Feb 2025 - Jun 2025",
    responsibilities: [
      "Assisted students with lab equipment and practice sessions.",
      "Maintained laboratory tools and materials in good condition.",
      "Supported lecturers in preparing practical activities.",
    ],
  },
  {
    job: "President",
    company: "Digital Interaction Community",
    date: "Apr 2025 - Apr 2026",
    responsibilities: [
      "Led a student organization focused on digital technology and innovation.",
      "Established partnerships with other student organizations and external tech communities.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
      {experiences.map((experience, index) => (
        <SingleExperience key={index} experience={experience} index={index} />
      ))}
    </div>
  );
};

export default AllExperiences;
