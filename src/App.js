import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article className="article">
      <h2 className="article__title">HELLO WORLD</h2>
      <label htmlFor="test">What do you like?</label>
      <input type="text" name="test" id="test" />
      <a href="http://www.wikipedia.de" className="aricle__link">
        Link to Wikipedia
      </a>
    </article>
  );
}
