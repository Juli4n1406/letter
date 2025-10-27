import React, { useState } from "react";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const onEnvelopeClick = () => setIsOpen(!isOpen);

  const onLetterClick = (e) => {
    e.stopPropagation();
    if (isOpen) {
      setShowLetter(true);
    }
  };

  const closeAll = () => {
    setIsOpen(false);
    setShowLetter(false);
  };

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
          background: url("https://i.postimg.cc/xjPW48wc/hinh.png") repeat;
          background-size: 220px 220px;
          background-position: center;
          padding: 24px;
          position: relative;
          filter: brightness(1.02);
        }

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

        .letter-content {
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
          line-height: 1.6;
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
          .letter-content {
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
          <div className="letter" onClick={onLetterClick}>
            <div>To: Minh Phương</div>
          </div>
        </div>
      </div>

      {showLetter && (
        <div className="letter-content" role="dialog" aria-modal="true">
          <div className="close-x" onClick={closeAll}>
            ×
          </div>
          <div className="lang-body">
            <h3 style={{ marginTop: 0 }}>Gửi Minh Phương</h3>
            <p>
            <s>
Hiện tại là 11:35 PM ngày 20/10/2025. Anh mới code xong cái web này và đang vắt chân lên trán chưa biết viết gì :))). Lúc đầu anh định tặng em ngày 20 cơ và cái này không có trong kế hoạch đâu, nhưng rồi nghĩ lại ngày 20 thì ko có cớ gì gặp em cả nên thui ngày 21 đưa vậy :)). Nghĩ lại thấy có nhiều thứ muốn viết nên làm cái web nàyy. Lúc viết a hơi bùn ngủ nghĩ gì viết đó thoi nên câu văn hơi lủng củng có rì em đọc đỡ nhaa hihi. Giờ nhìn lại anh mới để ý anh biết em mới hơn 1 tháng thui mà mình đi với nhau k bt bao nhiêu lần rùi, đi làm CLB rồi đi ăn đi học bài, đi mà ngày nào không thấy em là lại thấy thiêu thiếu🥲.  Lần đầu gặp em anh không thấy có gì đặc biệt đâu, chỉ thấy đi trễ thôi :)). Nhưng rồi dần dà anh có một cảm giác đặc biệt hơn dành cho em, có lẽ là từ ngày hội việc làm anh đã thích em mất rồi🫠. Anh viết ra những điều này chỉ để cho em biết thôi, anh không muốn tạo áp lực gì cho em nên em có thể trả lời anh hay không cũng được. Trước khi viết anh cũng chuẩn bị tâm lý rùi nếu em đọc xong mà không muốn nói chuyện với anh nữa thì cũng không sao đâu😌. Viết tới đây cũng dài rùi anh xin phép đi ngủ nhen, hẹn gặp lại em sauu. Cám ơn em đã dành thời gian đọc một chút tâm tư cụa anh 🥰
            </s>
              <br />
              <s>
Update 21/10 : Sáng anh dậy không nổi nên không đến đưa cho em được 🥲. Anh xin lỗi rấc nhìu. Mai em thi vật lý thì chúc em thi tốt nhen và cũng chúc mừng em vượt qua đợt thi đầu tiên ở đại học 🥰, phía trước vẫn sẽ còn nhiều thử thách nữa nhưng anh tin em sẽ vượt qua được thoii 🤗. Update chút vại thui hẹn gặp em ngày maii nhaa. Pái paii
              </s>
              <br />
              <br />
              <s>
              (Một ngày nào đó trong quá khứ)
              </s>
              <br />
              <s>
              Nếu một ngày nào đó em quay lại đây, đọc được dòng này thì hãy nhớ rằng ngoài kia vẫn có người luôn dõi theo em và sẽ luôn sẵn sàng giúp em khi em cần nhé 🥰. Anh thích em nhiều hơn em nghĩ đó 🤭
              </s>
              <br />
              <br />
              <span style={{ fontFamily: "Times New Roman, serif" }}>Oct 27 2025 - 01:41:23</span>
              <br />
              <span style={{ fontFamily: "Times New Roman, serif" }}>Anh xin lỗi em thời gian qua anh đã làm phiền em nhiều rồi. Cám ơn em nhé.</span>
              <br />
              <span style={{ fontFamily: "Times New Roman, serif" }}>Bái bai.</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
