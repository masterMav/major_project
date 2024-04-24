import React from "react";
import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import data from "../PROBLEMSET.json";
import ListProblems from "./ListProblems";

function ProblemSearch() {
  const [queryText, setQueryText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [range, setRange] = useState(50);

  useEffect(() => {
    if (!queryText) {
      setSearchResults([]);
      return;
    }

    const selectedKeys = ["name"];

    const fuse = new Fuse(data, {
      keys: selectedKeys,
      threshold: range / 100,
    });

    let result = fuse.search(queryText, { limit: 10 });

    result = result.map((item, index) => {
      return {
        id: index + 1,
        name: item.item.name,
        rating: item.item.rating,
        tag: item.item.tags[0],
        link: `https://codeforces.com/problemset/problem/${item.item.contestId}/${item.item.index}`
      };
    });

    setSearchResults(result);
  }, [queryText, range]);

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
      </div>

      {/* Search results */}
      <div className="row justify-content-center">
        <div className="mt-5 col-10">
          {searchResults.length !== 0 && <ListProblems list={searchResults} />}
        </div>
      </div>
    </div>
  );
}

export default ProblemSearch;
