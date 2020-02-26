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
  const [formDimensions, setFormDimensions] = useState([]);
  const [formRegion, setFormRegion] = useState("north");
  const [formResponse, setFormResponse] = useState(null);

  const handleFormSubmit = (e, material, category) => {
    e.preventDefault();
    const dimensionsString = () => {
      const strings = formDimensions.map(
        dim => `${dim.width}m x ${dim.length}m \n`
      );
      return strings.join().replace(/,/g, "");
    };
    console.log(dimensionsString());
    const data = {
      category: category,
      material: material,
      dimensions: dimensionsString(),
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

  const addDimension = ({ width, length }) => {
    const newDimensions = [...formDimensions, { width: width, length: length }];
    setFormDimensions(newDimensions);
  };

  const removeDimension = index => {
    const newDimensions = [...formDimensions];
    newDimensions.splice(index, 1);
    setFormDimensions(newDimensions);
  };

  const renderDimension = (dimension, index, removeDimension) => {
    return (
      <div
        key={index}
        className="material-page__added-dimension alert alert-light"
        role="alert"
      >
        <span>
          {dimension.length}m x {dimension.width}m
        </span>
        <button
          className="material-page__delete-dimension btn btn-primary"
          onClick={() => removeDimension(index)}
        >
          -
        </button>
      </div>
    );
  };

  const DimensionsForm = ({ addDimension }) => {
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      if (!width || !length) return;
      addDimension({ width: width, length: length });
      setLength("");
      setWidth("");
    };

    return (
      <div className="material-page__add-dimension">
        <div className="input-group">
          <input
            placeholder="Length"
            type="text"
            className="input"
            value={length}
            onChange={e => setLength(e.target.value)}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              m
            </span>
          </div>
        </div>
        <div className="input-group">
          <input
            placeholder="Width"
            type="text"
            className="input"
            value={width}
            onChange={e => setWidth(e.target.value)}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              m
            </span>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="material-page__submit-dimension btn btn-primary"
        >
          +
        </button>
      </div>
    );
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
            onSubmit={e => handleFormSubmit(e, name, category)}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={formName}
                type="text"
                className="form-control"
                id="name"
                onChange={e => setFormName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputEmail">Email address</label>
              <input
                value={formEmail}
                type="email"
                className="form-control"
                id="InputEmail"
                onChange={e => setFormEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputDimensions">Dimensions</label>
              {formDimensions &&
                formDimensions.map((dimension, i) =>
                  renderDimension(dimension, i, removeDimension)
                )}
              <DimensionsForm addDimension={addDimension} />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="SelectRegion">Region</label>
              <select
                value={formRegion}
                className="form-control"
                id="SelectRegion"
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
