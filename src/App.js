import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { uploadFile } from "./services/api";

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState();
  console.log(file);
  const logo =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
      }
    };

    getImage();
  }, [file]);

  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1>Simple file sharing</h1>
        <p>Upload and share the dowmload link</p>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default App;
