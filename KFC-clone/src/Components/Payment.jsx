import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles/Cart.module.css";
import Bux from "./Bux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const { price } = useSelector((store) => store.cart);
  const gst1 = (price / 100) * 5;
  const gst2 = ((price - gst1) / 100) * 5;
  const hs = 35;
  const navigate = useNavigate();

  const cancelRef = React.useRef();
  return (
    <div>
      <hr style={{ marginTop: "20px" }} />
      <div className={styles.container}>
        <div className={styles.bars}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
            alt=""
          />
          <h1 className={styles.heading}>Check Out</h1>
        </div>
      </div>
      <div className={styles.lastname}>
        <div style={{ width: "65%" }}>
          <div className={styles.checkOutCompo}>
            <div className={styles.CheckOutheading}>
              <h2 className={styles.CheckOutheading2}>
                DELIVERY INFO
              </h2>
            </div>
            <div className={styles.checkOutBody}>
              <div>
                <div className={styles.resdEVIVERY}>
                  <img
                    src="https://online.kfc.co.in/static/media/LocationOn.f57c1dfd.svg"
                    alt=""
                  />
                  <div style={{ display: "flex" }}>
                    {" "}
                    <span className={styles.boldfont1}>
                      EAT MORE-{" "}
                    </span>
                    <span className={styles.boldfont1}>
                      Delhi
                    </span>
                  </div>
                </div>
                <div
                  className={styles.inputAndLableCheckOut}
                >
                  <label
                    className={styles.smallFontDF1}
                    htmlFor=""
                  >
                    Full Address
                  </label>
                  <input
                    placeholder="Apartment, suite, unit, building, floor"
                    className={styles.inputAddress}
                    type="text"
                  />
                </div>
                <div className={styles.deliveryTime}>
                  <img
                    src="https://online.kfc.co.in/static/media/WatchLater.3ca73ea2.svg"
                    alt=""
                  />
                  <span className={styles.boldfont1}>
                    Today
                  </span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className={styles.checkOutCompo}>
            <div className={styles.CheckOutheading}>
              <h2 className={styles.CheckOutheading2}>
                DELEVERY <br /> OPTIONS
              </h2>
            </div>
            <div className={styles.radioA}>
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
              />
              <label
                className={styles.smallFontDF}
                for="html"
              >
                Leave at my door
              </label>
              <br />
              <span className={styles.smallFontDF1}>
                To protect you and our team, we practice
                contactless delivery. Your driver will leave
                the order at your door, knock, step away,
                and wait at a safe distance for you to
                collect your food.
              </span>
              <br />
              <input
                style={{ marginTop: "20px" }}
                type="radio"
                id="css"
                name="fav_language"
                value="Hand it to me"
              />
               {" "}
              <label
                className={styles.smallFontDF}
                for="css"
              >
                Hand it to me
              </label>
            </div>
          </div>
          <br />
          <div className={styles.checkOutCompo}>
            <div className={styles.CheckOutheading2}>
              <h2 className={styles.CheckOutheading2}>
                PAYMENT
              </h2>
              <Box
                ref={finalRef}
                tabIndex={-1}
                aria-label="Focus moved to this box"
              ></Box>

              <Button
                style={{
                  backgroundColor: "#f8f7f5",
                  textDecoration: "underline",
                }}
                mt={4}
                onClick={onOpen}
              >
                Add Payment Method
              </Button>
              <Modal
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Payment Methods</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box>
                      <Box className={styles.lastRadioKing}>
                        <input
                          type="radio"
                          id="css"
                          name="fav_lang"
                          value="CSS"
                        />
                         {" "}
                        <label for="css">
                          COD (cash on delivery)
                        </label>
                        <br /> {" "}
                      </Box>
                      <Box className={styles.lastRadioKing}>
                        <input
                          type="radio"
                          id="javascript"
                          name="fav_lang"
                          value="JavaScript"
                        />
                         {" "}
                        <label for="javascript">UPI</label>
                      </Box>
                    </Box>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={onClose}
                    >
                      Save
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
        <div style={{ width: "25%" }}>
          <div className={styles.priceCompo}>
            <div className={styles.cartOffer}>
              <div className={styles.cartOfferLink}>
                <img
                  className={styles.cartOfferIcon}
                  src="https://online.kfc.co.in/static/media/Offers_Coupon_Icon.72b94c41.svg"
                  alt=""
                />
                <span className={styles.cartOfferText}>
                  Apply Offers & Deals
                </span>
              </div>
              <button className={styles.cartOfferBtn}>
                View All
              </button>
            </div>
            <div className={styles.cartOfferSum}>
              <div className={styles.sub}>
                <div className={styles.Sum}>Subtotal</div>
                <div className={styles.Amo}>₹ {price}</div>
              </div>
              <div className={styles.sub}>
                <div className={styles.Sum}>GST</div>
                <div className={styles.Amo}>
                  ₹ {Math.floor(gst2)}
                </div>
              </div>
              <div className={styles.sub}>
                <div className={styles.Sum}>
                  Restaurant Handling (Incl. Taxes)
                </div>
                <div className={styles.Amo}>₹ {hs}</div>
              </div>
            </div>

            <Bux />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
