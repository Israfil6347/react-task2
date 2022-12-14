import React from "react";
import ReactDOM from "react-dom";

export default function LoginProtal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-slate-200">
        <div className="fixed top-32 left-48 bg-white p-48 z-10 transform -translate-x-20 -translate-y-20">
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
