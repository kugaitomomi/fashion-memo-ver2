import axios from "axios";
import { useEffect, useState } from "react";

function Upload() {
  const [pic, setPic] = useState();
  const [allPics, setAllPics] = useState([]);
  useEffect(() => {
    getAllPics();
  }, [allPics]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pic", pic);
    await axios
      .post("http://localhost:5000/addPicture", formData)
      .then(getAllPics())
      .catch((error) => console.log(error.message));
  };
  const handleChange = (e) => {
    setPic(e.target.files[0]);
  };

  const getAllPics = async () => {
    await axios
      .get("http://localhost:5000/pictures")
      .then((res) => setAllPics(res.data))
      .catch((error) => console.log(error.message));
  };

  const handleDelete = async (name) => {
    await axios
      .delete("http://localhost:5000/delete", {
        data: { name: name },
      })
      .then(getAllPics())
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="app">
      <h1 className="title">My closet</h1>
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <input type="file" onChange={handleChange} />
          <button className="uploadButton">upload</button>
        </form>
      </div>
      <div className="imgsContainer">
        {allPics &&
          allPics.map((p) => (
            <div className="imgItem" key={p.name}>
              <img className="img" src={p.url} alt="" />
              <button
                className="imgButton"
                onClick={() => handleDelete(p.name)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Upload;