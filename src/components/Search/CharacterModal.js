import { useEffect, useState } from "react";
import { API_KEY } from "../../App";
import HomeModal from "../UI/HomeModal";
import classes from "./CharacterModal.module.css";
import ModalItem from "./ModalItem";

const CharacterModal = (props) => {
  const [modalData, setModalData] = useState(null);
  console.log(props);
  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams();
      params.append("apikey", API_KEY);
      const response = await fetch(props.data.path + "?" + params);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      setModalData(data);
    };
    fetchData();
  }, []);

  return (
    <HomeModal onClose={props.onClose}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>
            {props.data.name} | {props.data.type}
          </h1>
        </div>
        <div className={classes.body}>
          {modalData &&
            modalData.data.results.map((result) => {
              return <ModalItem data={result} />;
            })}
        </div>
      </div>
    </HomeModal>
  );
};

export default CharacterModal;
