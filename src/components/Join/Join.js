import React, { Component } from 'react';
import {connect} from "react-redux"
import {reduxForm, submit, Field, getFormValues} from "redux-form"
import {Button} from "@material-ui/core"
import {withStyles} from "@material-ui/styles"
import {addProduct, getProducts} from "../../store/Products/Products.store"

const styles = {
  input: {
    width: 304,
    height: 36,
    backgroundColor: "#212327",
    border: 0,
    padding: 12,
    color: "white",
    fontSize: 16,
    borderRadius: 4,
    marginBottom: 12,
    "&::placeholder": {
      color: "#ffffff",
      opacity: 0.3,
      fontSize: 12
    },
    "&:active": {
      backgroundColor: "#ffffff"
    },
    "&:focus": {
      backgroundColor: "#ffffff",
      color: "#212327",
      outline: "none"
    }
  },
  button: {
    height: 36,
    width: 304,
    marginBottom: 12,
    background: "#6094ea",
    borderRadius: 4,
    fontWeight: 400,
    color: "#ffffff",
    fontSize: 12,
    "&:hover": {
      color: "white",
      background: "#6004ea",
    },
    "&:active": {
      border: "1px solid white",
      background: "#6094ea",
    }
  }
}

class JoinClass extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.onClickWrite = this.onClickWrite.bind(this);
  }

  onClickWrite(e) {
    const {submit, getProducts} = this.props;
    e.stopPropagation();

    submit();
    getProducts();
  }

  render() { 
    const {classes} = this.props
    return ( 
      <div className="join">
        <form className="join-form">
          <Field
          className={classes.input}
          name="name"
          component="input"
          type="text"
          placeholder="제품명을 입력하세요"
          // autoFocus={true}
          />
          <Field
          className={classes.input}
          name="price"
          component="input"
          type="text"
          placeholder="가격을 입력하세요."
          // autoFocus={true}
          />
          <Field
          className={classes.input}
          name="description"
          component="input"
          type="text"
          placeholder="제품 설명을 입력하세요."
          // autoFocus={true}
          />
        </form>
        <Button
          className={classes.button}
          type="submit"
          onClick={this.onClickWrite}
        >
        작성 완료
      </Button>
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  return {
    formValues: getFormValues("joinForm")(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (name, price, description) => dispatch(addProduct(name, price, description)),
    submit: () => dispatch(submit("joinForm")),
    getProducts: () => dispatch(getProducts())
  }
}

const ConnectJoin = connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinClass)
 
const JoinReduxForm = reduxForm({
  form: "joinForm",
  enableReinitialize: true,
  onSubmit: (values, dispatch) => {
    dispatch(addProduct(values.name, values.price, values.description))
  }
})(ConnectJoin)

export const Join = withStyles(styles)(JoinReduxForm);