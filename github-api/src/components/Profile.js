import React, { useState } from "react";
import Github from "./github.webp";
import Repos from "./Repos";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <div className="info">
      <div className="card">
        <div>
          <form>
            <div>
              <input
                placeholder="search username here..."
                type="text"
                value={username}
                onChange={onChangeHandler}
              />
            </div>

            <button
              className="search-btn"
              type="submit"
              onClick={submitHandler}
            >
              Search
            </button>
          </form>
        </div>

        <div className="card-header">
          <a href={data.html_url} target="_blank" className="name-link">
            {data.name || data.login || (
              <a
                className="name-link"
                href="https://github.com/home"
                target="_blank"
              >
                Github
              </a>
            )}
          </a>
          <p>
            {!data.avatar_url ? (
              <img className="user-dp" src={Github}></img>
            ) : (
              <img
                className="user-dp"
                src={data.avatar_url}
                alt={data.avatar_url}
              />
            )}
          </p>
        </div>
        <div className="user-info">
          <p>Location: {data.location || "NA"}</p>
          <p> Bio: {data.bio || "NA"}</p>
          <div>
            <p>Following: {data.following || "0"}</p>
          </div>
          <div>
            <p>Followers: {data.followers || "0"}</p>
          </div>
          <div className="Repos">
            <p>Repositories: {data.public_repos || "0"}</p>
          </div>
        </div>
        <Repos repositories={repositories} />
      </div>
    </div>
  );
};
export default Profile;
