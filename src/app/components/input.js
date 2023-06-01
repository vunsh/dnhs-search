import { useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === "") {
      setData("");
      return;
    }

    setLoading(true);
    fetch("/api?q=" + input)
      .then((res) => res.json())
      .then((data) => {
        setData(data.res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-slate-800 w-[80%] border-2 border-gray-300 p-2 rounded-lg mt-44 caret-pink-500/25 bg-gradient-to-r from-green-400/25 via-pink-500/25 to-emerald-500/25"
          placeholder="Search for DNHS data"
          style={{
            boxShadow:
              "0px 0px 60px 2px #064e3b, 0 0 60px 20px #15803d, 0 0 140px 50px #2DD4BE9D",
          }}
          value={input}
          onChange={handleInputChange}
        />
      </form>
      <div className="w-[50%]">
      <p className="text-slate-100 text-2xl font-bold mt-40">Results:</p>
      {loading ? (
        <p className="text-slate-200 text-2xl font-bold mt-4">Loading...</p>
      ) : (
        <p className="text-slate-200 text-2xl font-bold mt-4">{data}</p>
      )}
      </div>
    </div>
  );
}

export default Input;
