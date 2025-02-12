import React, { useState, useEffect } from "react";
// import eway from "assets/img/payment/eway.png";
// import paypal from "assets/img/payment/paypal.png";
// import mada from "assets/img/payment/mada.png";
// import applepay from "assets/img/payment/applepay.png";
// import visa from "assets/img/payment/visa.png";
// import saudi_logo from "assets/img/payment/saudi_logo.svg";
// import egypt_logo from "assets/img/payment/egypt_logo.svg";
// import palsteen_logo from "assets/img/payment/palsteen_logo.svg";
// import stc from "assets/img/payment/stc.png";
// import maestro from "assets/img/payment/maestro.png";
// import googlepay from "assets/img/payment/google-pay.png";
import payfort from "assets/img/payment/payfort.png";
import bankImg from "assets/img/payment/bank.png";
import school from "assets/img/payment/school.png";
import noData from "assets/img/payment/undraw_no_data_re_kwbl.svg";
import wallet from "assets/img/payment/wallet.svg";
import undrowschool from "assets/img/payment/undrow_school.svg";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SendIcon from "@material-ui/icons/Send";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTransactoinMethode } from "../../action/transactionPay";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useLocation } from "react-router-dom";
import Coupon from "./Coupone";
import { getStaticData } from "../../action/data";
import { getStudents } from "../../action/students";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import SimpleBackdrop from "../Reports/BackDrop/BackDrop";

// sssss test
// ======================================================

// start check radio
const GreenRadio = withStyles({
  root: {
    color: "#a489f4",
    "&$checked": {
      color: purple[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
// end check radio

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formCo: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textRight: {
    right: "15px",
    left: "inherit",
  },
  textCenter: {
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  flexPromo: {
    display: "flex",
    justifyContent: "space-between",
  },
  promoInput: {
    padding: "7px",
    width: "auto",
    borderRadius: "10px !important",
    borderTopLeftRadius: "0 !important",
    borderBottomLeftRadius: " 0 !important",
    background: "#eee",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root2: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  custom_border: {
    position: "relative",
    border: "1px solid #ddd",
    marginTop: window.screen.availWidth < 780 ? "60px" : "20px",
    borderRadius: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
    // display: "flex",
    flexFlow: "column",
  },
  form_padding: {
    padding: "10px 20px",
  },
  custom_img: {
    position: "absolute",
    top: "-45px",
  },
  checkboxStyle: {
    position: "absolute",
    top: "55px",
    left: " 50%",
    transform: "translateX(-50%)",
  },
  justifyContent: {
    justifyContent: "flex-end",
    paddingRight: "30px",
    paddingLeft: "10px",
  },
  pairBookBtn: {
    display: "flex",
    justifyContent: "center",
  },
  bookBtn: {
    background: "#3f2885",
    color: "#fff",
    padding: "7px",
    width: "150px",
    fontSize: "17px",
    borderRadius: "40px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0",
    maxHeight: "50px",
  },
  payforImg: {
    width: "100%",
    height: "100px",
    margin: "15px auto",
  },
  storNumber: {
    color: "#8e24aa",
    fontSize: "20px",
    textAlign: "center",
    padding: "20px 0",
    textShadow: "-1px 1px 1px #aaa",
  },
  storNumber2: {
    color: "#20c18d",
    fontSize: "20px",
    textAlign: "center",
    padding: "20px 0",
    textShadow: "-1px 1px 1px #aaa",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: "60%",
    borderRadius: "20px",
    [theme.breakpoints.down("1g")]: {
      width: "80%",
    },
  },
  pair_student_name: {
    background: "#fff",
    borderBottom: "1px solid #ddd",
    padding: "20px",
  },
  name: {
    color: "#a3a3a3",
    fontSize: "15px",
  },
}));

const Payment = ({
  getTransactoinMethode,
  getStudents,
  students: { students },
  transactionData: { transactionData },
  staticData,
  getStaticData,
}) => {
  let location = useLocation();

  const [items1] = useState([
    {
      id: 1,
      src: payfort,
      alt: payfort,
      status: 1,
      chackval: "a",
      CheckVal: "A",
    },
    // {
    //   id: 2,
    //   src: applepay,
    //   alt: applepay,
    //   status: 0,
    //   chackval: "b",
    //   CheckVal: "B",
    // },
    // {
    //   id: 3,
    //   src: googlepay,
    //   alt: googlepay,
    //   status: 0,
    //   chackval: "c",
    //   CheckVal: "C",
    // },
    // { id: 4, src: mada, alt: mada, status: 0, chackval: "d", CheckVal: "D" },
    // { id: 5, src: stc, alt: stc, status: 0, chackval: "e", CheckVal: "E" },
  ]);
  const [items2] = useState([
    // { id: 1, src: maestro, alt: eway, status: 0, chackval: "f", CheckVal: "F" },
    // { id: 2, src: visa, alt: paypal, status: 0, chackval: "g", CheckVal: "G" },
  ]);
  const [items3] = useState([
    {
      id: 1,
      src: bankImg,
      alt: bankImg,
      tooltips: "تحويل بنكي",
      status: 3,
      chackval: "h",
      CheckVal: "H",
    },
    {
      id: 2,
      src: school,
      alt: school,
      tooltips: "دفع عن طريق المدرسه ",
      status: 2,
      chackval: "k",
      CheckVal: "K",
    },
  ]);

  const classes = useStyles();

  const [checkForForm, setCheckForForm] = useState("1");
  const [selectedValue, setSelectedValue] = useState("a");
  // statrt posting data *************************************************
  const [methodId, setMethodId] = useState(0);
  const [uploadVal, setUploadVal] = useState(null);
  const [couponVal, setCouponVal] = useState("");
  // statrt posting data **************************************************
  const [open2, setOpen2] = useState(true);
  const [open, setOpen] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const handleClosePopUp = () => {
    setOpen2(false);
    window.location.href = window.location.href;
  };

  const handelClik = (e) => {
    setCheckForForm(e.target.attributes.status.value);
  };

  const handleChangecheck = (event) => {
    setSelectedValue(event.target.value);
  };

  // *********************************
  const handelUploadChange = (e) => {
    setUploadVal(e.target.files[0]);
    setMethodId(e.target.id);
  };
  // *********************************

  // start bank method----------------------
  const [state, setState] = useState("");
  const [stateBank, setStateBank] = useState({});

  const handleChange = (event) => {
    setState(event.target.value);
    setStateBank(staticData.banks[event.target.value]);
  };
  useEffect(() => {
    getStaticData();
  }, []);

  var formData = new FormData();
  const handelMethodIdClick = (e) => {
    formData.append("receipt", uploadVal);
    formData.append("bank_id", stateBank.id);
    formData.append("method_id", methodId);
    formData.append("coupon", couponVal);
    setOpenBackdrop(true);
    getTransactoinMethode(
      location.state.studentId,
      location.state.transactionId,
      formData
    );
    if (transactionData.success) {
      setOpenBackdrop(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    if (!transactionData.params) {
      getTransactoinMethode(
        location.state.studentId,
        location.state.transactionId,
        { method_id: 3, coupon: couponVal }
      );
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  // start school method----------------------
  const handelMethodIdClickSchool = (e) => {
    setOpenBackdrop(true);
    getTransactoinMethode(
      location.state.studentId,
      location.state.transactionId,
      { method_id: 2, coupon: couponVal }
    );
    if (transactionData.success) {
      setOpenBackdrop(false);
    }
  };

  // start payfort method----------------------
  const handelMethodIdClickpayfort = (e) => {
    if (transactionData.params) {
      var form = document.createElement("form");

      transactionData.params &&
        Object.values(transactionData.params).forEach((element, i) => {
          var inputs = document.createElement("input");
          inputs.setAttribute("value", element);
          inputs.setAttribute("name", Object.keys(transactionData.params)[i]);
          form.appendChild(inputs);
        });

      form.method = "POST";
      form.action = transactionData.url && transactionData.url;

      document.body.appendChild(form);
      form.submit();
    }
  };

  const getcouopnvalue = (couponVal) => {
    setCouponVal(couponVal);
  };

  const [val, setVal] = useState(null);
  useEffect(
    () => {
      getStudents();
      const filtersd = students.filter(
        (ele) => ele.id === parseInt(location.state.studentId)
      );
      setVal(filtersd);
    },
    val && val.length > 0 ? [] : [students]
  );

  return (
    <div>
      <SimpleBackdrop open={openBackdrop} />
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={
            (transactionData && transactionData.success === true) ||
            (transactionData.success === false && open2)
          }
          onClose={handleClosePopUp}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade
            in={
              (transactionData && transactionData.success === true) ||
              (transactionData.success === false && open2)
            }
          >
            <div className={classes.paper}>
              <p
                id="transition-modal-description"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                {transactionData && transactionData.success === true ? (
                  <CheckCircleOutlineIcon
                    style={{ color: "green", width: "2em", height: "2em" }}
                  />
                ) : (
                  <HighlightOffIcon
                    style={{ color: "red", width: "2em", height: "2em" }}
                  />
                )}{" "}
                {transactionData && transactionData.success === true
                  ? transactionData.message
                  : transactionData.messages}
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
      <div className="form ">
        <div className="contennt">
          <h4 className={classes.textCenter}>
            طرق الدفع <AttachMoneyIcon />{" "}
          </h4>

          <Grid item xs={12} className={classes.form_padding}>
            <div className={classes.pair_student_name}>
              <span>أسم الطالب: </span>{" "}
              <span className={classes.name}>
                {val && val.length !== 0 ? val[0].student_name : null}
              </span>
            </div>
            <div className="flexing_items">
              <Grid item xs={12} md={4} className={classes.custom_border}>
                <div className="payment_methods col-md-6">
                  <div className="part_1">
                    <h4 style={{ marginTop: "0" }}>
                      {" "}
                      خدمات الدفع الالكترونيه *
                    </h4>
                    <div className="part_1_content">
                      {items1.map((ele, i) => {
                        return (
                          <div key={i}>
                            <FormControlLabel
                              control={
                                <GreenRadio
                                  checked={selectedValue === ele.chackval}
                                  onChange={handleChangecheck}
                                  value={ele.chackval}
                                  color="default"
                                  name="radio-button-demo"
                                  inputProps={{ "aria-label": ele.CheckVal }}
                                  className={classes.checkboxStyle}
                                />
                              }
                              label={
                                <img
                                  onClick={handelClik}
                                  src={ele.src}
                                  alt={ele.alt}
                                  width="100%"
                                  status={ele.status}
                                />
                              }
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="part_1">
                    <h4> </h4>
                    <div className="part_1_content">
                      {items2.map((ele, i) => {
                        return (
                          <div key={i}>
                            <FormControlLabel
                              control={
                                <GreenRadio
                                  checked={selectedValue === ele.chackval}
                                  onChange={handleChangecheck}
                                  value={ele.chackval}
                                  color="default"
                                  name="radio-button-demo"
                                  inputProps={{ "aria-label": ele.CheckVal }}
                                  className={classes.checkboxStyle}
                                />
                              }
                              label={
                                <img
                                  onClick={handelClik}
                                  src={ele.src}
                                  alt={ele.alt}
                                  width="100%"
                                  status={ele.status}
                                />
                              }
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="part_1">
                    <h4> خدمات اخري *</h4>
                    <div className="part_1_content">
                      {items3.map((ele, i) => {
                        return (
                          <div key={i}>
                            <FormControlLabel
                              control={
                                <GreenRadio
                                  checked={selectedValue === ele.chackval}
                                  onChange={handleChangecheck}
                                  value={ele.chackval}
                                  color="default"
                                  name="radio-button-demo"
                                  inputProps={{ "aria-label": ele.CheckVal }}
                                  className={classes.checkboxStyle}
                                />
                              }
                              label={
                                <Tooltip
                                  title={ele.tooltips}
                                  aria-label={ele.tooltips}
                                >
                                  <img
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title={ele.tooltip}
                                    onClick={handelClik}
                                    src={ele.src}
                                    alt={ele.alt}
                                    width="100%"
                                    status={ele.status}
                                  />
                                </Tooltip>
                              }
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                className={classes.custom_border}
                style={{ border: "0" }}
              >
                <Coupon
                  studentId={location.state.studentId}
                  transactionId={location.state.transactionId}
                  getcouopnvalue={getcouopnvalue}
                />
              </Grid>
              {/* start form part */}
              {checkForForm == "1" ? (
                <Grid item xs={12} md={4} className={classes.custom_border}>
                  <Modal
                    style={{ direction: "rtl" }}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    onClose={handleClose}
                    open={open}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div
                        className={classes.paper}
                        style={{
                          width: "30%",
                          display: "flex",
                          flexFlow: "column",
                          alignItems: "center",
                        }}
                      >
                        <h5 id="transition-modal-title">
                          أضغط للأنتقال الي صفحه الدفع
                        </h5>
                        <button
                          onClick={handelMethodIdClickpayfort}
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.bookBtn}
                        >
                          أدفع الأن
                          <SendIcon />
                        </button>
                      </div>
                    </Fade>
                  </Modal>
                  <Grid item container md={12} xs={12}>
                    <img
                      src={wallet}
                      alt={wallet}
                      className={classes.payforImg}
                    />
                    <button
                      onClick={handleOpen}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.bookBtn}
                    >
                      طلب دفع
                      <SendIcon />
                    </button>
                  </Grid>
                </Grid>
              ) : checkForForm === "3" ? (
                <Grid
                  container
                  item
                  xs={12}
                  md={4}
                  spacing={2}
                  className={classes.custom_border}
                >
                  <FormControl
                    className={classes.formControl}
                    onChange={handleChange}
                  >
                    <InputLabel htmlFor="age-native-helper">بنك</InputLabel>
                    <NativeSelect
                      style={{ borderRadius: "7px" }}
                      value={state.age}
                      inputProps={{
                        // name: 'age',
                        id: "age-native-helper",
                      }}
                    >
                      <option aria-label="None" value="" />
                      {staticData.banks &&
                        staticData.banks.map((ele, i) => {
                          return (
                            <option key={i} value={i}>
                              {ele.bank_name}
                            </option>
                          );
                        })}
                    </NativeSelect>
                    <FormHelperText style={{ textAlign: "right" }}>
                      أختر أسم البنك
                    </FormHelperText>
                  </FormControl>

                  <Grid item md={12} xs={12} className="bank_title_text">
                    <span>
                      برجاء تحويل المبلغ المستحق الي رقم الحساب التالي
                    </span>
                    <div className="bank_name_box">
                      <p>
                        {" "}
                        <span>اسم الحساب</span> :{" "}
                        <span>{stateBank && stateBank.account_name}</span>{" "}
                      </p>
                      <p>
                        {" "}
                        <span>رقم الحساب</span> :{" "}
                        <span>{stateBank && stateBank.account_number}</span>{" "}
                      </p>
                      <p>
                        {" "}
                        <span>رقم الأيبان</span> :{" "}
                        <span>{stateBank && stateBank.account_iban}</span>{" "}
                      </p>
                    </div>
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <p>برجاء ارفاق صوره وصل التحويل</p>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ width: "100%" }}
                    >
                      <form encType="multipart/form-data" style={{width:"74%"}}>
                        <input
                          
                          id={1}
                          type="file"
                          onChange={handelUploadChange}
                        />
                      </form>
                      <span>أختيار صوره</span>
                    </Button>
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <div className={classes.pairBookBtn}>
                      <button
                        variant="contained"
                        color="primary"
                        className={classes.bookBtn}
                        onClick={handelMethodIdClick}
                      >
                        أتمام العمليه
                        <SendIcon />
                      </button>
                    </div>
                  </Grid>
                </Grid>
              ) : checkForForm === "2" ? (
                <>
                  <Grid item xs={12} md={4} className={classes.custom_border}>
                    <Grid container>
                      <h5
                        style={{
                          padding: " 0 10px",
                          fontSize: "1em",
                          marginTop: "10px",
                        }}
                      >
                        {" "}
                        برجاء التوجه الي المدرسه لدفع المصاريف.
                      </h5>
                      <img
                        src={undrowschool}
                        alt={undrowschool}
                        width={200}
                        height={200}
                      />
                    </Grid>
                    <div className={classes.pairBookBtn}>
                      <button
                        className={classes.bookBtn}
                        onClick={handelMethodIdClickSchool}
                      >
                        أحجز الان
                      </button>
                    </div>
                  </Grid>
                </>
              ) : (
                <Grid
                  container
                  item
                  xs={12}
                  md={6}
                  spacing={2}
                  className={classes.custom_border}
                >
                  <h5 style={{ padding: " 0 10px" }}>
                    {" "}
                    نأسف طريقه الدفع غير متوفره الان{" "}
                  </h5>
                  <img src={noData} alt={noData} width={200} height={200} />
                </Grid>
              )}
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

Payment.propTypes = {
  getTransactoinMethode: PropTypes.func.isRequired,
  getStaticData: PropTypes.func.isRequired,
  getStudents: PropTypes.func.isRequired,
  students: PropTypes.object,
  transactionData: PropTypes.object,
  date: PropTypes.string,
};

const mapStateToProps = (state) => ({
  transactionData: state.transactionData,
  staticData: state.data.staticData,
  students: state.students,
  date: state.date,
});

export default connect(mapStateToProps, {
  getTransactoinMethode,
  getStaticData,
  getStudents,
})(Payment);
