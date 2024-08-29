import disabledIcon from "../assets/disabled-checkbox.svg";
import checkedIcon from "../assets/checked-icon.svg";
import emptyCheck from "../assets/empty-check.svg";

const Options = ({item, fn_clickSelect} : any) => {
  return (
    <div className="options">
      {item.options.map((option: any) => (
        <div className="option" key={option.id}>
          <p className="text-[14px]">{option.name}</p>
          <img
            onClick={() => fn_clickSelect(item, option)}
            alt="empty-check"
            src={
              item.disabled
                ? disabledIcon
                : option.select
                ? checkedIcon
                : emptyCheck
            }
            className="checkbox"
          />
        </div>
      ))}
    </div>
  );
};

export default Options;
