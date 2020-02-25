import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/breadcrumb";
import { toLowerKebabCase } from "../utils/helpers";
import { FaGlobe } from "react-icons/fa";
import { GiStoneStack } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";

const MaterialsPage = ({ pageContext }) => {
  const { name, category, color, image, origin_country } = pageContext;
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
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group mb-4">
              <label for="exampleFormControlSelect1">Region</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>North</option>
                <option>Midlands</option>
                <option>South East</option>
                <option>South West</option>
                <option>Scotland</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary material-page__form-submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default MaterialsPage;
