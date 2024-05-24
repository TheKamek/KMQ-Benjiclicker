import React, { useState, useEffect } from "react";
import "./Github.css";

const Github = () => {
  const [inputValue, setInputValue] = useState("TheKamek");
  const [inputValue2, setInputValue2] = useState("TheKamek");
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${inputValue2}`
        );
        const result = await response.json();
        const result2 = await fetch(
          `https://api.github.com/users/${inputValue2}/repos`
        );
        const repos = await result2.json();
        setData2(repos);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (inputValue2) {
      fetchData();
    }
  }, [inputValue2]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue2(inputValue);
  };

  return (
    <div className="main">
      <h1>Github-Lookup</h1>
      <div className="input-container">
        <input
          type="text"
          className="round-input"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="round-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="stats-container">
        {data && (
          <div className="github-data">
            <div className="profileTop">
              <img
                className="profileIMG"
                src={data.avatar_url}
                alt="Users profile pic"
              ></img>

              <span style={{ display: "block" }}>Name: {inputValue2}</span>
              <span style={{ display: "block" }}>Company: {data.company}</span>
              <span style={{ display: "block" }}>
                Twitter:{" "}
                {data.twitter_username ? `@${data.twitter_username}` : "N/A"}
              </span>
              <span style={{ display: "block" }}>
                Bio: {data.bio ? data.bio : "N/A"}
              </span>
              <span style={{ display: "block" }}>
                Followers: {data.followers}
              </span>
              <span style={{ display: "block" }}>
                Following: {data.following}
              </span>
              <span style={{ display: "block" }}>
                Public Repos: {data.public_repos}
              </span>
            </div>
            <div className="repos">
              <h2>Repositories</h2>
              {data2.map((repo) => (
                <div key={repo.id} className="repo">
                  <span style={{ display: "block" }}>
                    {"Name: " + repo.name}
                  </span>
                  <span style={{ display: "block" }}>
                    {"Created at: " + repo.created_at}
                  </span>
                  <span style={{ display: "block" }}>
                    {"Updated at: " + repo.updated_at}
                  </span>
                  <a href={repo.html_url}>{"Link:" + repo.name}</a>
                  <span style={{ display: "block" }}>
                    ----------------------------------------
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Github;
