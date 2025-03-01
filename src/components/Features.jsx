const features = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Cover Letter Generation",
    description: "Create personalized cover letters that match job descriptions, powered by AI.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a4 4 0 00-8 0v2M3 13h18M5 16h14M9 19h6" />
      </svg>
    ),
    title: "AI recommendations job from your resume And generation motivation cover letter from job description",
    description: "Practice and refine your interview skills with real-time AI feedback.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l4-4 4 4m0-8l-4 4-4-4" />
      </svg>
    ),
    title: "chatboot respond you from your pdf",
    description: "Get a detailed analysis and personalized improvement recommendations.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: " AI Text Summarizer",
    description: "Ensure your resume meets today's hiring standards with AI-driven checks.",
  },
];

function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-700 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Optimize Your Job Search with AI</h2>
        <p className="text-center text-gray-200 mb-12">
          Our platform offers AI-driven features to help you craft applications, prepare for interviews, and impress recruiters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-purple-800 rounded-lg shadow-md text-center hover:bg-purple-600 transition duration-300">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
