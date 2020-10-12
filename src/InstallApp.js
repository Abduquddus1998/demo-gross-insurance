import React, { useState, useEffect } from "react";

const InstallApp = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = () => {
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <React.Fragment>
      <button
        className="link-button"
        aria-label="Install app"
        title="Install app"
        onClick={onClick}
      >
        Install
      </button>
    </React.Fragment>
  );
};

export default InstallApp;
