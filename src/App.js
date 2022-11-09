
import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App(name) {

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "unity_build/"+name+"/Build/"+name+".js",
    dataUrl: "unity_build/"+name+"/Build/"+name+".data",
    frameworkUrl: "unity_build/"+name+"/Build/"+name+".framework.js",
    codeUrl: "unity_build/"+name+"/Build/"+name+".wasm",
  });
  console.log(name);
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