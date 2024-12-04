import Footer from "../components/Foot";

export default function Business_feel_insecure() {
    return (
        <div>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-0 lg:py-0 gap-8 lg:gap-0">
            {/* Left content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Business feeling insecure?
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                We've got you covered with tailored cybersecurity solutions to protect and strengthen your operations.
              </p>
              <button className="inline-flex items-center justify-center px-24 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
                Request a Demo
                <img src="/assets/Vector.png" className="pl-1" />
              </button>
            </div>
            
            {/* Right image */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[100%]">
                <img
                  src="/assets/Photo.png" // Path to your image
                  alt="Person with a turquoise coffee cup"
                  className="object-cover w-full h-full rounded-lg" // Ensure the image covers the space properly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    )
  }

