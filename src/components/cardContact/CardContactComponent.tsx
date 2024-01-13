import { FC, useState } from "react";
// import ModalGarantie from "../../pages/car/detailedCar/component/ModalGarantie";
import { routes } from "@/utils/routes";
import Link from "next/link";
import Icons from "../assets/Icons";
import styles from "./CardContactComponentStyles.module.scss";

const CardContactComponent: FC<{}> = () => {
  const [showGaratieModal, setShowGarantieModal] = useState(false);
  const [srvCode, setSrvCode] = useState("");
  return (
    <div className={`bg_black ${styles.card_contact}`}>
      <div className="left_line left_line_blue_neon text-white">Hablemos</div>
      <h4 className="text-white">¿Necesitas asesoría? </h4>
      <a
        href="tel:573018063302"
        className="d-flex align-items-center pe-4 mt-3"
      >
        <Icons.Phone width={80} />
        <span className="text-white ps-1">
          Si tienes alguna pregunta <br />
          (+57) 301 8063302
        </span>
      </a>
      <div></div>
      <div>
        <Link
          href={routes.contact.relativePath}
          className="btn btn_orange mt-4"
        >
          CONTACTA A UN ASESOR <Icons.Contact />{" "}
        </Link>
      </div>
      <button
        className="btn btn_cyan my-1 me-3 btn-detailed-car mt-3"
        onClick={() => {
          setSrvCode("1002");
          setShowGarantieModal(true);
        }}
      >
        COMPRA TU SEGURO
      </button>
      <button
        className="btn btn_cyan my-1 me-3 btn-detailed-car mt-3"
        onClick={() => {
          setSrvCode("1003");
          setShowGarantieModal(true);
        }}
      >
        ADQUIERE TU GARANTIA
      </button>
      {/* {showGaratieModal && (
                <ModalGarantie
                    id={"185"}
                    close={() => setShowGarantieModal(false)}
                    carValue={100000}
                    SrvCode={srvCode}
                />
            )} */}
    </div>
  );
};

export default CardContactComponent;
