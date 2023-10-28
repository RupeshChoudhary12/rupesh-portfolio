import React, { useEffect } from "react";
import Aos from "aos";
import "../css/project.css";

const Project = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="myskils">
        <div className="about" data-aos="flip-right">
          <h1 className="me">MY PROJECT</h1>
          <h2 className="ee">MY PROJECT</h2>
        </div>
      </div>

      <div className="h">
        <h1>HTML PROJECT</h1>
      </div>

      <div className="project" data-aos="flip-right">
        <div className="procard" >
          <div className="pro">
            <span>
              <button className="codee">
                <a href="https://github.com/RupeshChoudhary12/apple.git">
                  CLICK CODE
                </a>
              </button>
              <button className="clickk">
                <a
                  href="https://rupeshchoudhary12.github.io/apple/
"
                >
                  CLICK LIVE
                </a>
              </button>
            </span>
          </div>
        </div>
        <div className="procarda">
          <div className="pro">
            <span>
              <button className="codee">
                <a href="https://github.com/RupeshChoudhary12/Amzone-prime-video.git">
                  CLICK CODE
                </a>
              </button>
              <button className="clickk">
                <a href="https://rupeshchoudhary12.github.io/Amzone-prime-video/">
                  CLICK LIVE
                </a>
              </button>
            </span>
          </div>
        </div>
        <div className="procardb">
          <div className="pro">
            <span>
              <button className="codee">CLICK CODE</button>
              <button className="clickk">CLCIK LIVE</button>
            </span>
          </div>
        </div>
      </div>

      {/* ///JAVASCRIPT PROJECT */}
      <div className="h">
        <h1>JAVASCRIPT PROJECT</h1>
      </div>

      <div className="project">
        <div className="procardc">
          <div className="pro">
            <span>
              <button className="codee">
                <a href="https://github.com/RupeshChoudhary12/qr-code.git">
                  CLICK CODE
                </a>
              </button>
              <button className="clickk">
                <a href="https://rupeshchoudhary12.github.io/qr-code/">
                  CLICK LIVE
                </a>
              </button>
            </span>
          </div>
        </div>
        <div className="procardd">
          <div className="pro">
            <span>
              <button className="codee">
                <a href="https://github.com/RupeshChoudhary12/qoute.git">
                  CLICK CODE
                </a>
              </button>
              <button className="clickk">
                <a href=" https://rupeshchoudhary12.github.io/qoute/">
                  CLICK LIVE
                </a>
              </button>
            </span>
          </div>
        </div>
        <div className="procarde">
          <div className="pro">
            <span>
              <button className="codee">
                <a href="https://github.com/RupeshChoudhary12/wether.git">
                  CLICK CODE
                </a>
              </button>
              <button className="clickk">
                <a
                  href="https://rupeshchoudhary12.github.io/wether/
"
                >
                  CLICK LIVE
                </a>
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="h">
        <h1>REACT JS PROJECT</h1>
      </div>

      <div className="project">
        <div className="procardf">
          <div className="pro">
            <span>
              <button className="codee">
                <a href="https://github.com/RupeshChoudhary12/paratha.git">
                  CLICK CODE
                </a>
              </button>
              <button className="clickk">
                <a href="https://paratha.vercel.app/">CLICK LIVE</a>
              </button>
            </span>
          </div>
        </div>
        <div className="procardg">
          <div className="pro">
            <span>
              <button className="codee">
                <a href="https://github.com/RupeshChoudhary12/feedback.git">
                  CLICK CODE
                </a>
              </button>
              <button className="clickk">
                <a href=" https://rupeshchoudhary12.github.io/feedback/">
                  CLICK LIVE
                </a>
              </button>
            </span>
          </div>
        </div>
        <div className="procardh">
          <div className="pro">
            <span>
              <button className="codee">
                <a href="https://github.com/RupeshChoudhary12/fake-store.git">
                  CLICK CODE
                </a>
              </button>
              <button className="clickk">
                <a href="https://rupeshchoudhary12.github.io/fake-store/">
                  CLICK LIVE
                </a>
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* ///JAVASCRIPT PROJECT */}
      <div className="h">
        <h1>BACKEND PROJECT</h1>
      </div>

      <div className="project">
        <div className="aprocard">
          <div className="pro">
            <span>
              <button className="codee">CLCIK CODE</button>
              <button className="clickk">CLCIK LIVE</button>
            </span>
          </div>
        </div>
        <div className="bprocard">
          <div className="pro">
            <span>
              <button className="codee">CLICK CODE</button>
              <button className="clickk">CLICK LIVE</button>
            </span>
          </div>
        </div>
      </div>

      {/* REACT PROJECT */}
    </>
  );
};

export default Project;
