import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the search logic here
    console.log(searchTerm);
  };

  return (
    <form style={{ margin: "0 auto", width: "100%" }} onSubmit={handleSearch}>
      <label
        htmlFor="default-search"
        style={{ display: "none", marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "500", color: "#1f2937" }}
      >
        Search
      </label>
      <div style={{ position: "relative" }}>
        <div style={{ pointerEvents: "none", position: "absolute", inset: "0 0 0 0", display: "flex", alignItems: "center", paddingLeft: "0.75rem" }}>
          <svg
            style={{ height: "1rem", width: "1rem", color: "#6b7280" }}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          style={{
            display: "block",
            width: "100%",
            borderRadius: "0.5rem",
            border: "1px solid #d1d5db",
            backgroundColor: "#ffffff",
            padding: "1rem 1rem 1rem 2.5rem",
            fontSize: "0.875rem",
            color: "#1f2937",
            outline: "none",
            borderColor: "#3b82f6"
          }}
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
