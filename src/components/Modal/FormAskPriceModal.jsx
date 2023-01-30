import {
  Button,
  Label,
  Modal,
  Radio,
  Textarea,
  TextInput,
} from "flowbite-react";
import React from "react";
import { MdFace } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { handelOpenPriceModel } from "../../Reducers/modalReducer";
import InputFiled from "../inputFiled";

export default function FormAskPriceModal() {
  const dispatch = useDispatch();

  const { openFormPriceModal } = useSelector((state) => state.ModalReducer);

  return (
    <React.Fragment>
      <Modal
        show={openFormPriceModal}
        size="lg"
        position="center"
        popup={true}
        onClose={() => dispatch(handelOpenPriceModel())}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Edit User Data
            </h3>

            <InputFiled
              placeholder={"First Name "}
              type={"text"}
              icon={"MdFace"}
              name="name"
            />
            <InputFiled
              placeholder={"Email "}
              type={"email"}
              icon={"AiTwotoneMail"}
              name="email"
            />

            <InputFiled
              placeholder={"Address"}
              type={"text"}
              icon={"HiLocationMarker"}
              name="address"
            />
            <InputFiled
              placeholder={"Phone Number"}
              type={"text"}
              icon={"MdPhoneIphone"}
              name="phone_number"
            />

            <span className=" mb-3 w-full p-1 rounded-lg bg-white hover:bg-lnav flex items-center justify-center  duration-200 group">
              <MdFace className="text-2xl group-hover:text-white m-2" />
              <select
                className="border-0 px-2 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                aria-label="Default select example"
                style={{ transition: "all .15s ease" }}
                name="gender"
              >
                <option defaultValue="Female">Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </span>

            <InputFiled
              placeholder={"Password "}
              type={"password"}
              icon={"RiLockPasswordFill"}
              name="password"
            />

            <div className="w-full">
              <Button>Send</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
