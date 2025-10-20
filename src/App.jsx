import React, { useEffect, useState } from "react";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);

  const onEnvelopeClick = () => setIsOpen(!isOpen);
  const closeAll = () => {
    setIsOpen(false);
    setShowLangMenu(false);
    setSelectedLang(null);
  };

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => setShowLangMenu(true), 2000);
    } else {
      setShowLangMenu(false);
      setSelectedLang(null);
    }
    return () => timer && clearTimeout(timer);
  }, [isOpen]);

  const handleLangSelect = (lang) => setSelectedLang(lang);

  return (
    <div className="page-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

        .page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          /* --- ✨ ĐÂY LÀ DÒNG ĐÃ THAY ĐỔI --- */
          background: url("/hinh.png") repeat;
          background-size: 220px 220px;
          background-position: center;
          padding: 24px;
          position: relative;
          filter: brightness(1.02);
        }

        /* ... (phần code còn lại giữ nguyên) ... */

        .envlope-wrapper {
          --envelope-width: clamp(220px, 70vw, 280px);
          --envelope-height: calc(var(--envelope-width) * 0.642);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #envelope {
          position: relative;
          width: var(--envelope-width);
          height: var(--envelope-height);
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          margin: auto;
          background: linear-gradient(145deg, #d2b48c, #c3a179);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(90, 60, 30, 0.4);
        }

        .front {
          position: absolute;
          width: 0;
          height: 0;
          z-index: 3;
        }

        .flap {
          border-left: calc(var(--envelope-width) / 2) solid transparent;
          border-right: calc(var(--envelope-width) / 2) solid transparent;
          border-bottom: calc(var(--envelope-height) * 0.455) solid transparent;
          border-top: calc(var(--envelope-height) * 0.545) solid #c19a6b;
          transform-origin: top;
          pointer-events: none;
          filter: brightness(0.95);
        }

        .pocket {
          border-left: calc(var(--envelope-width) / 2) solid #d2b48c;
          border-right: calc(var(--envelope-width) / 2) solid #d2b48c;
          border-bottom: calc(var(--envelope-height) / 2) solid #bfa178;
          border-top: calc(var(--envelope-height) / 2) solid transparent;
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
        }

        .letter {
          position: relative;
          background-color: #fffaf0;
          width: 90%;
          margin: auto;
          height: 90%;
          top: 5%;
          border-radius: 6px;
          box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.15);
          font-family: 'Dancing Script', cursive;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: clamp(1rem, 4vw, 2rem);
        }

        .open .flap {
          transform: rotateX(180deg);
          transition: transform 0.4s ease, z-index 0.6s;
          z-index: 1;
        }

        .close .flap {
          transform: rotateX(0deg);
          transition: transform 0.4s 0.6s ease, z-index 1s;
          z-index: 5;
        }

        .open .letter {
          transform: translateY(calc(var(--envelope-height) * -0.6));
          transition: transform 0.4s 0.6s ease, z-index 0.6s;
          z-index: 2;
        }

        .close .letter {
          transform: translateY(0px);
          transition: transform 0.4s ease, z-index 1s;
          z-index: 1;
        }

        .lang-menu {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw;
          max-width: 600px;
          height: 70vh;
          max-height: 600px;
          background: rgba(255, 255, 255, 0.97);
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          font-family: 'Dancing Script', cursive;
          color: #5a3c1e;
          z-index: 10;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: fadeIn 0.4s ease;
          padding: 4vw;
          font-size: clamp(1.2rem, 3.8vw, 2rem);
          backdrop-filter: blur(4px);
        }

        .close-x {
          position: absolute;
          right: 14px;
          top: 8px;
          font-size: clamp(2rem, 5vw, 3rem);
          cursor: pointer;
          font-weight: bold;
        }

        .lang-body {
          flex: 1;
          overflow-y: auto;
          text-align: left;
          font-size: clamp(1.2rem, 3.5vw, 1.8rem);
          padding: 1vw;
        }

        .lang-actions {
          display: flex;
          justify-content: center;
          gap: 3vw;
          padding: 2vw;
          flex-wrap: wrap;
        }

        .btn {
          background-color: #b9975b;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 1.2vw 4vw;
          cursor: pointer;
          font-size: clamp(1.3rem, 3.5vw, 2rem);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          font-family: 'Dancing Script', cursive;
        }

        .btn:hover {
          background-color: #a47c48;
        }

        .cursor-pointer {
          cursor: pointer;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) translateY(6px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) translateY(0);
          }
        }

        @media (max-width: 500px) {
          .lang-menu {
            width: 90vw;
            height: 75vh;
            font-size: clamp(1.4rem, 4vw, 1.8rem);
          }
        }
      `}</style>

      <div className="envlope-wrapper cursor-pointer" onClick={onEnvelopeClick}>
        <div id="envelope" className={isOpen ? "open" : "close"}>
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            {!selectedLang && <div>To: Minh Phương</div>}
          </div>
        </div>
      </div>

      {showLangMenu && (
        <div className="lang-menu" role="dialog" aria-modal="true">
          <div className="close-x" onClick={closeAll}>
            ×
          </div>
          <div className="lang-body">
            {!selectedLang && (
              <div style={{ textAlign: "center" }}>
                <div style={{ marginBottom: 20 }}>
                  Please choose / Vui lòng chọn
                </div>
                <div className="lang-actions">
                  <button
                    className="btn"
                    onClick={() => handleLangSelect("en")}
                  >
                    English
                  </button>
                  <button
                    className="btn"
                    onClick={() => handleLangSelect("vi")}
                  >
                    Tiếng Việt
                  </button>
                </div>
              </div>
            )}
            {selectedLang === "en" && (
              <div>
                <h3 style={{ marginTop: 0 }}>Dear Jane Doe</h3>
                <p style={{ lineHeight: 1.6 }}>
                  The quick brown fox jumps over the lazy dog. This letter now
                  scales beautifully with your screen ✨
                </p>
              </div>
            )}
            {selectedLang === "vi" && (
              <div>
                <h3 style={{ marginTop: 0 }}>Gửi Jane Doe</h3>
                <p style={{ lineHeight: 1.6 }}>
                  Đây là nội dung thư — và bảng thư này giờ sẽ tự co giãn theo
                  màn hình 💖
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
