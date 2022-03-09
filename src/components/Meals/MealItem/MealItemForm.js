import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.amount}>
        <label>Amount</label>
        <Input input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}/>
      </div>

      <button className={classes.button}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
