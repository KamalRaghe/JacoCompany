export default function Page() {
  const services = [
    { name: "Permeable Install", description: "Eco-friendly, durable surfaces." },
    { name: "Hybrid Pavement", description: "Pattern asphalt, interlock, or concrete." },
    { name: "Artificial Grass", description: "Low maintenance and realistic turf." },
  ];

  const portfolio = [
    "/images/project1.jpg",
    "/images/project2.jpg",
    "/images/project3.jpg",
    "/images/project4.jpg",
  ]; // You can replace with real images

  return (
    <div className="text-gray-800">

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transforming Spaces Beautifully</h1>
          <p className="text-xl md:text-2xl mb-8">Professional paving, hybrid surfaces, and artificial grass solutions.</p>
          <a
            href="#services"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Portfolio</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {portfolio.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-lg">
                <img src={img} alt={`Project ${i + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            We are experts in permeable paving, hybrid surfaces, and artificial grass. 
            Our goal is to transform outdoor spaces into beautiful, functional areas that last. 
            Quality, durability, and aesthetics are at the core of everything we do.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        &copy; 2026 Your Company Name. All rights reserved.
      </footer>

    </div>
  );
}
