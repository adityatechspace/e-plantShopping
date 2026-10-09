import React from "react";
export default function AboutUs() {
  return (
    <main className="content-page about-page">
      <p className="eyebrow">OUR ROOTS, OUR PURPOSE</p>
      <h1>Welcome to Paradise Nursery</h1>
      <p className="lead">Paradise Nursery helps you bring the calm and beauty of nature into everyday life.</p>
      <div className="about-grid">
        <div className="about-image" role="img" aria-label="Sunlight falling across a collection of green houseplants" />
        <div className="about-copy">
          <h2>A little greener, every day</h2>
          <p>We believe every home can feel more alive with the right plant. Our collection is thoughtfully curated for first-time plant parents and lifelong leaf lovers alike.</p>
          <p>From resilient, low-maintenance favorites to statement-making tropical foliage, we make it easier to find a plant that fits your space and your routine.</p>
          <div className="value-row"><span>01</span><div><strong>Thoughtfully chosen</strong><p>Plants picked for beauty, character, and everyday living.</p></div></div>
          <div className="value-row"><span>02</span><div><strong>Here to help you grow</strong><p>Simple guidance to help your green companions thrive.</p></div></div>
        </div>
      </div>
    </main>
  );
}
