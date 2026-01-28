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
  ]; // Replace with your real images

  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <div className="fadeIn" >
          <div style={{fontSize:"40px",fontWeight:"bold"}}>Transforming Spaces Beautifully</div>
            <p>Professional paving, hybrid surfaces, and artificial grass solutions.</p>
            <a href="#services" className="button">Explore Services</a>
          </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <h3>{s.name}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section>
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-grid">
          {portfolio.map((img, i) => (
            <img key={i} src={img} alt={`Project ${i+1}`} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2 className="section-title">About Us</h2>
        <p>
          We are experts in permeable paving, hybrid surfaces, and artificial grass. 
          Our goal is to transform outdoor spaces into beautiful, functional areas that last. 
          Quality, durability, and aesthetics are at the core of everything we do.
        </p>
      </section>

      {/* Footer */}
      <footer>
        &copy; 2026 Your Company Name. All rights reserved.
      </footer>

    </div>
  );
}
