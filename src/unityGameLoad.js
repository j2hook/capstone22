import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export function unityGameLoad() {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
      loaderUrl: "unity_build/Snake4/Build/unity.loader.js",
      dataUrl: "unity_build/Snake4/Build/unity_build.data",
      frameworkUrl: "unity_build/Snake4/Build/unity_build.framework.js",
      codeUrl: "unity_build/Snake4/Build/unity_build.wasm",
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