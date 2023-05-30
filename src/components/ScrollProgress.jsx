import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const ScrollProgress = () => {
  useEffect(() => {
    const calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(#cc7f03 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    // Membersihkan event handler saat komponen di-unmount
    return () => {
      window.onscroll = null;
      window.onload = null;
    };
  }, []);

  return (
    <div>
      {/* Kode HTML untuk elemen scroll progress */}
      <div id="progress"></div>
      <span id="progress-value"></span>
    </div>
  );
};

export default ScrollProgress;
