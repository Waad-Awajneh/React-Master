import { Button, Checkbox, Label, Modal, Radio, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handelOpenFormModel } from "../../Reducers/modalReducer";

export default function FormConnectModal() {


   const dispatch = useDispatch();

  const { openFormModal } = useSelector((state) => state.ModalReducer);



  return (
    <React.Fragment>
      <Modal 
        show={openFormModal} size="lg"  position="center" popup={true} onClose={() => dispatch(handelOpenFormModel())}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Message Vendor
            </h3>
            <div className=" xss:cover:w-[48%]  xss:cover:inline-block  xss:cover:mr-[2%] block  "  >
              <div className="mb-2 block ">
                <Label htmlFor="flName" value="First and Last Name" />
              </div>
              <TextInput
                id="flName"
                placeholder="First Last"
                required={true}
              />
                
            </div>
            <div  className=" xss:cover:w-[47%]  xss:cover:inline-block block">
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone Number" />
              </div>
              <TextInput
                id="phone"
                placeholder="07xxxxxxxx"
                required={true}
              />
            </div>
            <div className=" xss:cover:w-[48%]  xss:cover:mr-[2%] xss:cover:inline-block  block" >
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@gmail.com"
                required={true}
              />
            </div>
            <div className=" xss:cover:w-[48%]  xss:cover:mr-[2%] xss:cover:inline-block  block" >
              <div className="mb-2 block">
                <Label htmlFor="address" value="Your address" />
              </div>
              <TextInput
                id="address"
                placeholder="Amman , Jordan "
                required={true}
              />
            </div>
            <div className=" xss:cover:w-[47%]  xss:cover:inline-block  block" >
              <div className="mb-2 block">
                <Label htmlFor="date" value="Event Date" />
              </div>
              <TextInput id="date" type="date" required={true} />
            </div>

            <div id="textarea">
  <div className="mb-2 block">
    <Label
      htmlFor="comment"
      value="Your message"
    />
  </div>
  <Textarea
    id="comment"
    placeholder="  Leave a message..."
    required={true}
    rows={4}
  />
</div>

<fieldset
  className="flex gap-4"
  id="radio"
>
  <legend>
Preferred contact method
  </legend>
  <div className="flex items-center gap-2">
    <Radio
      id="phoneR"
      name="phoneR"
      value="phoneR"
      defaultChecked={false}
    />
    <Label htmlFor="phoneR">
    Phone
    </Label>
  </div>
  <div className="flex items-center gap-2">
    <Radio
      id="email"
      name="email"
      value="email"
      defaultChecked={false}
    />
    <Label htmlFor="email">
     Email
    </Label>
  </div>
  <div className="flex items-center gap-2">
    <Radio
      id="video"
      name="video"
      value="video"
      defaultChecked={false}
    />
    <Label htmlFor="united-state">
  Video Chat
    </Label>
  </div>
  </fieldset>
     
            <div className="w-full">
              <Button 
             >Send</Button>


             
            </div>
   
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
