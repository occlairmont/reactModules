import React from "react";

const JSXRules = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="section-title">JSX</h1>
        <dl>
          <dt>Resemble HTML</dt>
          <dd>It's not. It's actually close to JavaScript.</dd>
          <dt>"React elements"</dt>
          <dd>
            These are used to construct and update the DOM, or what you see on
            the screen.
          </dd>
          <dt>Not required</dt>
          <dd>You can write in vanilla JS, but most same people us JSX.</dd>
        </dl>
      </div>
      <div>
        <NormalComponent />
      </div>
      <hr />
      <div>
        <CreateElementComponent />
      </div>
    </div>
  );
};

export default JSXRules;

const NormalComponent = () => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h1>Normal Functional Component</h1>
      <p>This was constructed with JSX in the return.</p>
      <img src="https://cdn.pixabay.com/photo/2017/09/14/11/06/water-2748638_1280.png" />
    </div>
  );
};

const CreateElementComponent = () => {
  return React.createElement(
    "div",
    { style: { border: "1px solid yellow" } },
    React.createElement("h1", null, "Create Element Component"),
    React.createElement(
      "p",
      null,
      "This was constructed with React Create Element."
    ),
    React.createElement(
      "img",
      {
        src:
          "https://cdn.pixabay.com/photo/2017/09/11/20/48/branches-2740419_1280.png",
      },
      null
    )
  );
};
