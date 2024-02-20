import React from "react";
import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import data from "../MOCK_DATA.json";
import List from "./List";

function Search() {
  const [queryText, setQueryText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sName, setSName] = useState(false);
  const [sTag, setSTag] = useState(false);
  const [range, setRange] = useState(50);

  useEffect(() => {
    if (!queryText) {
      setSearchResults([]);
      return;
    }

    const selectedKeys = ["title"];
    if (sName) selectedKeys.push("authorName");
    if (sTag) selectedKeys.push("tag");

    const fuse = new Fuse(data, {
      keys: selectedKeys,
      threshold: range / 100,
    });

    let result = fuse.search(queryText, { limit: 10 });

    result = result.map((item, index) => {
      return {
        id: index + 1,
        title: item.item.title,
        authorName: item.item.authorName,
        authorRating: item.item.authorRating,
        tag: item.item.tag,
      };
    });

    setSearchResults(result);
  }, [queryText, sName, sTag, range]);

  return (
    <div className="container">
      {/* Search */}
      <div className="row justify-content-center">
        <div className="col-4 mt-5">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Search
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="here :p"
              value={queryText}
              onChange={(e) => setQueryText(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Search options */}
      <div className="row px-md-5 mx-md-5 mt-3">
        <div className="col-5 d-flex flex-row">
          <label for="customRange2" className="form-label me-4">
            Threshold
          </label>

          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            id="customRange2"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        </div>

        <div className="col-7">
          <div className="row justify-content-end">
            <div className="form-check col-3">
              <input
                className="form-check-input"
                type="checkbox"
                value={sName}
                onChange={(e) => setSName(!sName)}
                id="checkName"
              />
              <label className="form-check-label" for="checkName">
                Author Name
              </label>
            </div>

            <div className="form-check col-3">
              <input
                className="form-check-input"
                type="checkbox"
                value={sTag}
                onChange={(e) => setSTag(!sTag)}
                id="checkTag"
              />
              <label className="form-check-label" for="checkTag">
                Tag
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Search results */}
      <div className="row justify-content-center">
        <div className="mt-5 col-10">
          {searchResults.length !== 0 && <List list={searchResults} />}
        </div>
      </div>
    </div>
  );
}

export default Search;
