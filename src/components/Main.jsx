// import React, { useContext } from "react";
// import "./Main.css";
// import { assets } from "../assets/assets";
// import { Context } from "../Context/Context";

// const main = () => {

//     const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>Gemini</p>
//         <img src={assets.user_icon} alt="" />
//       </div>
//       <div className="main-container">

//         {!showResult
//         ?<>

// <div className="greet">
//           <p>
//             <span>Hello, BOTT.</span>
//           </p>
//           <p>How can I help you today?</p>
//         </div>
//         <div className="cards">
//           <div className="card">
//             <p>Sugget be....</p>
//             <img src={assets.compass_icon} alt="" />
//           </div>
//           <div className="card">
//             <p>Sugget be....</p>
//             <img src={assets.bulb_icon} alt="" />
//           </div>
//           <div className="card">
//             <p>Sugget be....</p>
//             <img src={assets.message_icon} alt="" />
//           </div>
//           <div className="card">
//             <p>Sugget be....</p>
//             <img src={assets.code_icon} alt="" />
//           </div>
//         </div>
          
//         </>
//         :<div className="result">
//           <div className="result-title">
//             <img src={assets.user_icon} alt="" />
//             <p>{recentPrompt}</p>
//           </div>
//           <div className="result-data">
//             <img src={assets.gemini_icon} alt="" />
//             {loading
//             ?<div className="loader">
//               <hr/>
//               <hr/>
//               <hr/>
//             </div>
//             :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
//               }
            
//           </div>
//         </div>
//         }

        
//         <div className="main-bottom">
//           <div className="search-box">
//             <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here...."></input>
//             <div>
//               <img src={assets.gallery_icon} alt="" />
//               <img src={assets.mic_icon} alt="" />
//               <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
//             </div>
//             <p className="bottom-info"></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default main;



import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../assets/assets";
import { Context } from "../Context/Context";

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="main">
      <div className="nav">
        <p>ChatBot</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, <br/>I am your BOT!</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>What are the best budget-friendly travel destinations for 2025?</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>What are some AI-driven business ideas for the future?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>How do I write a professional email to a potential client?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>What are the best frameworks for web development in 2025?</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className={`search-box ${isFocused ? "focused" : ""}`}>
            <input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here...."
            />
            <div>
              {/* <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" /> */}
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;