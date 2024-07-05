import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";
import Btn from "../Btn";
import { Link } from "react-router-dom";

const ProjectBid = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  return (
  <>
  <div
    className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full cursor-pointer"
    onClick={() => setShow(true)}
  >
    Bid for Project
  </div>
  <Modal shouldShow={show} onClose={onClose}>
    <div className="h-auto md:h-[20rem] rounded-4xl px-4 md:px-[10rem] mt-16">
      <h1 className="text-center text-3xl mb-4">Payment for Bidding</h1>
      <h3 className="text-center mb-6">
        In order to bid, a payment of $20 must be paid.
      </h3>
      <div className="flex items-center justify-center">
        <Link to="/paymentgateway">
          <button
            className="px-8 py-2 mt-4 md:mt-6 bg-[#5D6AA8] text-white font-bold rounded-full hover:bg-white hover:text-[#5D6AA8] hover:border-[#5D6AA8] hover:border"
            onClick={onClose}
          >
            Pay Now
          </button>
        </Link>
      </div>
    </div>
  </Modal>
</>

  );
};

export default ProjectBid;
