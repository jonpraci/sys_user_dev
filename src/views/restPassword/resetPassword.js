import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import FormHelperText from "@material-ui/core/FormHelperText";

import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import BgLogin from "../../assets/img/icons/logo.png";


import { resetPassword } from "action/auth";
import VerfyCode from "components/inputs/veryficationInput";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      padding: " 1rem 1rem",
    },
  },
  containerInput: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 8rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 ",
    },
  },
  margin: {
    marginTop: "5rem",
  },
  containerImg: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      height: "auto",
    },
  },
  hides: {
    marginTop: "70px",

    [theme.breakpoints.down("md")]: {
      marginTop: "70px",
    },
  },

  img: {
    width: "600px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: 0,
    },
  },
  smallLogo: {
    height: "10rem",
    width: "10rem",
    backgroundSize: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    margin: "0 1.5rem",
  },
  imgKids: {
    width: "100%",
  },
  title: {
    fontSize: ".7rem !important",
    fontFamily: "cairo",
    position: "relative",
    padding: "5px",
    "&:before": {
      content: "",
      height: "2px",
      width: "50px",
      borderTop: "1px solid red",
      position: "absolute",
      left: "0",
      top: "0",
    },
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontsize: ".1rem",
    },
  },
  registerText: {
    fontFamily: "cairo",
  },
  shoPass: {
    position: "absolute",
    left: "0",
    bottom: "-1px",
  },
  logIn: {
    width: "60%",
    margin: "20px auto",
    fontFamily: "cairo",
    background: "#322165",
  },
  imgBox: {
    width: "100%",
    background: "#fff",
    textAlign: "center",
    "& img": {
      width: "100%",
      height: "800px",
      objectFit: "contain",
    },
  },
  registLink: {
    textAlign: "center",
    marginTop: "30px",
    cursor: "pointer",
    color: "#3c4858",
    fontFamily: "cairo",
    fontSize: "18px",
    fontWeight: "bold",
  },
  handelDir: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  handelFlex: {
    boxSizing: "border-box",
    flexFlow: "column",
    flexDirection: "column-reverse",
  },
  handel_pos: {
    background:"#efeeee",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "20px",
      marginTop: "150px",
      position: "relative",
      zIndex: "50",
      width: "100%",
      maxWidth: "100%",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "150px",
    },
  },
  helpText: {
    textAlign: "right",
    paddingRight: "5px",
    color: "red",
  },
}));

const ResetPassword = ({resetPassword,code }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordConfig,setPasswordConfig] = React.useState('');
  const [confirmPass,setConfirmPass] = React.useState(false);
  const [disableBtn,setDisableBtn] = React.useState(true);
  const [validCode, setValidCode] = React.useState(false);

  const classes = useStyles();
  const [formData, setFormData] = React.useState({
    phone: "",
    password: "",
    password_confirmation:"",
  });
  const { phone, password } = formData;
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    resetPassword({"phone":phone});
  };
  const codeVal = {
    code:code
  }
  
  const handleConfirm = () => {
    const data = {...formData,...codeVal}
    resetPassword(data);
    window.location.href = "/login";
};
  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };
  const checkPassword = (e)=>{
    setPasswordConfig(e.target.value)
    onChange(e)
    if (e.target.value !== password) {
      setConfirmPass(true)
      setDisableBtn(true)
    }else{
      setConfirmPass(false)
      setDisableBtn(false)
    }
  };
  const checkValidCode = (input) => {
    if (input == code) {
      setValidCode(true);
    }else{
      setValidCode(false)
    }
  };
 const sendDataFinal =()=>{
   if (code) {
    return(
          <Button
            variant="contained"
            disabled={!validCode}
            className={classes.logIn}
            color="primary"
            onClick={handleConfirm}
          >
            تأكيد
          </Button>
    )
   }else{
     return(
<Button
            variant="contained"
            disabled={disableBtn}
            className={classes.logIn}
            color="primary"
            onClick={handleSubmit}
          >
            إرسال
          </Button>
     )
   }
 }
  return (
    <Grid
      container
      alignItems="center"
      className={
        (classes.handelDir,
        window.screen.availWidth <= 1024 ? classes.handelFlex : null)
      }
    >
       <Grid
        item
        xs={12}
        md={6}
        className={(classes.containerImg, classes.hides)}
      >
        <div className="pair_logo_animi">
          <div>
            <div class="brand">
              <div class="logo">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <svg width="200px" height="200px">
                  <path
                    stroke="#b1d7d9"
                    stroke-width="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
      s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
      C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
      S144.229,62.683,140.773,59.227z"
                  />

                  <path
                    stroke="#b1d7d9"
                    stroke-width="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
      s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
      C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
      S144.229,62.683,140.773,59.227z"
                  />

                  <path
                    stroke="#b1d7d9"
                    stroke-width="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
      s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
      C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
      S144.229,62.683,140.773,59.227z"
                  />

                  <path
                    stroke="#b1d7d9"
                    stroke-width="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
      s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
      C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
      S144.229,62.683,140.773,59.227z"
                  />

                  <path
                    stroke="#b1d7d9"
                    stroke-width="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
      s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
      C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
      S144.229,62.683,140.773,59.227z"
                  />

                  <path
                    stroke="#b1d7d9"
                    stroke-width="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
      s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
      C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
      S144.229,62.683,140.773,59.227z"
                  />
                </svg>
              </div>
            </div>
            <img src={BgLogin} className={classes.imgKids} />
          </div>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className={(classes.container, classes.handel_pos)}
      >
        <Typography align="center" variant="h4" style={{ margin: "2rem 0 " }}>
           إنشاء كلمة مرور جديدة
        </Typography>
        <div className={classes.containerInput}>
        {
          code ? 
          <>
          <VerfyCode checkValidCode={checkValidCode} phone={phone}/>
          
          </> 
          :
          <>
          
          <div className="form-group">
            <label>رقم الجوال </label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => onChange(e)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="رقم الجوال"
            />
          </div>

          <div className="form-group">
            <Button className={classes.shoPass} onClick={handleShowPass}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </Button>
            <label> كلمه المرور الجديدة </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="كلمه المرور الجديدة"
            />
          </div>
          <div className="form-group">
              <Button className={classes.shoPass} onClick={handleShowPass}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Button>
              <label>تاكيد كلمة المرور </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password_confirmation"
                value={passwordConfig}
                onChange={(e) => checkPassword(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="تاكيد كلمة المرور"
              />
              {confirmPass && (
                <FormHelperText
                  id="component-helper-text"
                  className={classes.helpText}
                >
                  كلمة المرور غير متطابقة
                </FormHelperText>
              )}
            </div>
        
       
          </>
        }
         { sendDataFinal()}
         </div>
       
      </Grid>
      
     
    </Grid>
  );
};
ResetPassword.propTypes = {
    resetPassword: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
 code: state.auth.code
});

export default connect(mapStateToProps, { resetPassword })(ResetPassword);
