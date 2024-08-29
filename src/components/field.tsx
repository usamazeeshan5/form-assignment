import disabledIcon from "../assets/disabled-checkbox.svg";
import checkedIcon from "../assets/checked-icon.svg";
import emptyCheck from "../assets/empty-check.svg";

const Field = ({ item, fn_clickSelectAll }: any) => {
  return (
    <div className="main-field">
      <p className="text-[14px]">{item.name}</p>
      <img
        onClick={() => fn_clickSelectAll(item, item.selectAll)}
        alt="empty-check"
        src={
          item.disabled
            ? disabledIcon
            : item.selectAll
            ? checkedIcon
            : emptyCheck
        }
        className="checkbox"
      />
    </div>
  );
};

export default Field;
