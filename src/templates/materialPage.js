import React, { useState, useRef } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/breadcrumb";
import { toLowerKebabCase } from "../utils/helpers";
import { FaGlobe } from "react-icons/fa";
import { GiStoneStack } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";

const MaterialsPage = ({ pageContext }) => {
  const { name, category, color, image, origin_country } = pageContext;
  const formRef = useRef(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRegion, setFormRegion] = useState("north");
  const [formResponse, setFormResponse] = useState(null);

  const handleFormSubmit = (e, material) => {
    e.preventDefault();
    const data = {
      material: material,
      name: formName,
      reply_to: formEmail,
      region: formRegion
    };
    var xhr = new XMLHttpRequest();
    xhr.open(formRef.current.method, formRef.current.action, true);
    xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        // The form submission was successful
        formRef.current.reset();
        setFormResponse("Thanks for the message. I’ll be in touch shortly.");
      } else {
        // The form submission failed
        setFormResponse("Something went wrong");
        console.error(JSON.parse(response.target.response).message);
      }
    };
  };

  return (
    <Layout customClassName="material-page">
      <SEO title={`${name} | ${category}`} />
      <Breadcrumb
        parentPage={toLowerKebabCase(category)}
        isMaterial={true}
        currentPage={toLowerKebabCase(name)}
      />
      <h1 className="material-page__title">{name}</h1>
      <div
        className="material-page__image"
        style={{ backgroundImage: `url(${image.url})` }}
      />
      <section className="material-page__information">
        <div className="material-page__item">
          <GiStoneStack />
          <h2>{category}</h2>
        </div>
        {color && (
          <div className="material-page__item">
            <IoIosColorPalette />
            <h2>{color}</h2>
          </div>
        )}
        <div className="material-page__item">
          <FaGlobe />
          <h2>{origin_country}</h2>
        </div>
      </section>
      <section className="material-page__enquiry">
        <h2 className="material-page__enquiry-title">Make an enquiry</h2>
        <div>
          <form
            ref={formRef}
            action="https://5ahkwodbme.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer"
            method="post"
            onSubmit={e => handleFormSubmit(e, name)}
          >
            <div className="form-group">
              <label for="name">Name</label>
              <input
                value={formName}
                type="text"
                className="form-control"
                id="name"
                onChange={e => setFormName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                value={formEmail}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={e => setFormEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label for="exampleFormControlSelect1">Region</label>
              <select
                value={formRegion}
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={e => setFormRegion(e.target.value)}
              >
                <option value="north">North</option>
                <option value="midlands">Midlands</option>
                <option value="south-east">South East</option>
                <option value="south-west">South West</option>
                <option value="scotland">Scotland</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary material-page__form-submit"
            >
              Submit
            </button>
            {formResponse && <span>{formResponse}</span>}
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default MaterialsPage;
