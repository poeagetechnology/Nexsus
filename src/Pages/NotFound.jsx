import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NotFound() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/${query.toLowerCase().replace(/\s+/g, "")}`);
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-4 sm:px-6">
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/2 h-64 w-64 sm:h-[420px] sm:w-[420px]
                        -translate-x-1/2 rounded-full bg-indigo-200/30 blur-[120px]" />
        <div className="absolute bottom-24 left-1/4 h-52 w-52 sm:h-[320px] sm:w-[320px]
                        rounded-full bg-cyan-200/30 blur-[120px]" />
      </div>

      <div className="w-full max-w-3xl text-center">

        <div className="text-[96px] sm:text-[120px] lg:text-[160px]
                        font-extrabold leading-none tracking-tight text-slate-200">
          404
        </div>

        <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl
                       font-bold tracking-tight text-slate-900">
          This page doesn’t exist
        </h1>

        <p className="mt-4 sm:mt-5 max-w-xl mx-auto
                      text-base sm:text-lg text-slate-600">
          The link may be broken or the page was removed.
          Let’s get you back where you belong.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-8 sm:mt-10 flex justify-center"
        >
          <div className="flex w-full max-w-md sm:max-w-lg
                          overflow-hidden rounded-xl sm:rounded-2xl
                          border border-slate-200 bg-white/80
                          backdrop-blur-xl shadow-lg">
            <input
              type="text"
              placeholder="Search pages…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4
                         text-slate-800 placeholder-slate-400
                         focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 sm:px-8 text-xs sm:text-sm
                         font-semibold uppercase tracking-[0.25em]
                         text-white bg-gradient-to-r
                         from-indigo-600 to-cyan-500
                         hover:opacity-90 transition"
            >
              Search
            </button>
          </div>
        </form>

        <div className="mt-10 sm:mt-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em]
                        text-slate-400 mb-4 sm:mb-6">
            Popular pages
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <QuickLink label="Home" onClick={() => navigate("/")} />
            <QuickLink label="Services" onClick={() => navigate("/services")} />
            <QuickLink label="Projects" onClick={() => navigate("/projects")} />
            <QuickLink label="Contact" onClick={() => navigate("/contact")} />
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center
                       px-8 sm:px-12 py-3 sm:py-4 rounded-xl
                       bg-slate-900 text-white
                       text-xs sm:text-sm font-semibold
                       uppercase tracking-[0.35em]
                       hover:bg-slate-800 transition"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}

function QuickLink({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-xs sm:text-sm uppercase tracking-[0.25em]
                 text-slate-600 hover:text-slate-900 transition"
    >
      {label}
    </button>
  );
}
