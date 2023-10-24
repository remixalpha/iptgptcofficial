import React from "react";

function index() {
  function clearLocalStorage() {
    window.localStorage.clear();
    window.location.reload();
  }
  return (
    <div>
      <button onClick={() => clearLocalStorage()}>clear</button>
    </div>
  );
}

export default index;
