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
        className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full"
        onClick={() => setShow(true)}
      >
        Bid for Project
        {/* <Btn text={"Pay Now"} /> */}
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="h-[20rem] rounded-4xl px-[10rem] mr-14 mt-16 ">
          <h1 className="text-center ml-16 text-3xl ">Payment for Bidding</h1>
          <h3 className="text-center ml-20 mt-5">
            in order to bid, a payment of $20 must be paid
          </h3>
          <div className="flex items-center justify-center mt-11 ml-10">
            <Link to="/paymentgateway">
              <button
                className="px-16 py-2 mt-6 bg-[#5d6aa8e0] mb-6 text-white font-bold rounded-full hover:bg-[#5d6aa8]  hover:border-[#5d6aa8] hover:border text-[#5D6AA8]"
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
