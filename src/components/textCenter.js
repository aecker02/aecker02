import React from "react";

const TextCenter = ({ title, copy }) => {
  return (
    <section className="text-center">
      <div className="text-center__inner">
        {title && <h2 className="text-center__title">{title}</h2>}
        <p className="text-center__copy">{copy}</p>
      </div>
    </section>
  );
};

export default TextCenter;
