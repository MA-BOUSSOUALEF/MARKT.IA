function Pricing() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">Choose Your Plan</h2>
      <div className="flex justify-center space-x-6 mt-10">
        <div className="p-6 bg-white shadow-md rounded-lg w-64">
          <h3 className="text-xl font-bold">Basic</h3>
          <p className="text-gray-600 mt-2">$40 / month</p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Get Started
          </button>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg w-64">
          <h3 className="text-xl font-bold">Premium</h3>
          <p className="text-gray-600 mt-2">$60 / month</p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
