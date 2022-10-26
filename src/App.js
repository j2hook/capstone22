// import './App.css';
// import React from 'react';
// import { Unity, useUnityContext } from "react-unity-webgl";

// function App() {

//   const { unityProvider } = useUnityContext({
//     loaderUrl: "unity_build/Snake/Build/Snake.loader.js",
//     dataUrl: "unity_build/Snake/Build/Snake.data",
//     frameworkUrl: "unity_build/Snake/Build/Snake.framework.js.",
//     codeUrl: "unity_build/Snake/Build/Snake.wasm",
//     webglContextAttributes: {
//       preserveDrawingBuffer: true,
//     },
//   });

//   return (
//     <div>
//     <h1>react test</h1>
//     <Unity unityProvider={unityProvider} />
//     </div>
//   );
// }

import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "unity_build/Snake3/Build/Snake3.loader.js",
    dataUrl: "unity_build/Snake3/Build/Snake3.data",
    frameworkUrl: "unity_build3/Snake/Build/Snake3.framework.js.",
    codeUrl: "unity_build/Snake3/Build/Snake3.wasm",
  });
  return (
    <Fragment>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
    </Fragment>
  );
}


export default App;