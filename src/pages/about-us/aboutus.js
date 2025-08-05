import React from "react";
import Head from "next/head";
import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import Meta from "../../component/Meta";

function AboutFinnovationz() {
  return (
    <>
      <Head>
        <Meta />
        <title>About Finnovationz | IKASHI FINTECH PRIVATE LIMITED</title>
      </Head>
   
      <section style={{ backgroundColor: "#fff", padding: "40px 0" }}>
        <div
          className="container"
          style={{
            maxWidth: "950px",
            margin: "0 auto",
            padding: "0 20px",
            lineHeight: "1.8",
            fontSize: "1.05rem",
            color: "#333",
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "left",
              color: "#000",
            }}
          >
            About Finnovationz
          </h1>

          <p style={{ marginBottom: "20px" }}>
            <strong>Finnovationz</strong> was founded in <strong>2014</strong> with a simple vision to make financial
            education accessible, practical, and easy to understand for everyone.
            What started as a mission to simplify stock market concepts has now
            grown into a trusted educational platform for thousands of learners
            across India.
          </p>

          <p style={{ marginBottom: "20px" }}>
            We are proud to share that <strong>Finnovationz</strong> is operated by{" "}
            <strong>IKASHI FINTECH PRIVATE LIMITED</strong>, a legally registered
            educational company. Our focus is on providing <strong>educational content only</strong>, and we do{" "}
            <strong>not</strong> offer investment advice, trading tips, or any financial
            products.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Our content — whether it's courses, videos, webinars, or workshops — is
            designed by industry experts who believe in learning through real-world
            examples and practical insights. From basics of stock markets to
            personal finance, we aim to create financially aware individuals who can
            take informed decisions.
          </p>
        </div>
      </section>
      <Brokerfooter />
    </>
  );
}

export default AboutFinnovationz;
