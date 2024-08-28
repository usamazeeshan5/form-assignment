import { useState } from "react";

import data from "../assets/data.json";

import emptyCheck from "../assets/empty-check.png";
import checkedIcon from "../assets/checked-icon.png";
import disabledIcon from "../assets/disabled-checkbox.png";

const Home = () => {
  const [response, setResponse] = useState<any>(data);
  const fn_showOptions = (obj: any) => {
    const updatedResponse = response.map((item: any) => {
      if (item.id === obj.id) {
        return { ...item, hover: true };
      } else {
        return { ...item, hover: false };
      }
    });
    setResponse(updatedResponse);
  };
  const fn_hideOptions = (obj: any) => {
    const updatedResponse = response.map((item: any) => {
      if (item.id === obj.id) {
        return { ...item, hover: false };
      }
      return item;
    });
    setResponse(updatedResponse);
  };
  const fn_clickSelectAll = (obj: any, updatedValue: any) => {
    if (obj.disabled) {
      return;
    }
    const updatedArray = response.map((item: any) => {
      if (item.id === obj.id) {
        return {
          ...item,
          selectAll: !updatedValue,
          options: item.options.map((option: any) => ({
            ...option,
            select: !updatedValue,
          })),
        };
      }
      return item;
    });
    setResponse(updatedArray);
  };
  const fn_clickSelect = (obj: any, option: any) => {
    if (obj.disabled) {
      return;
    }
    const updatedArray = response.map((item: any) => {
      if (item.id === obj.id) {
        const updatedOptions = item.options.map((opt: any) => {
          if (opt.id === option.id) {
            return { ...opt, select: !opt.select };
          }
          return opt;
        });
        const allSelected = updatedOptions.every((opt: any) => opt.select);
        return {
          ...item,
          options: updatedOptions,
          selectAll: allSelected,
        };
      }
      return item;
    });
    setResponse(updatedArray);
  };
  const fn_buttonClicked = (obj: any) => {
    console.log(obj);
  };
  return (
    <section className="home">
      <div className="main">
        {response.map((item: any, index: number) => (
          <div
            key={index}
            className="field"
            onMouseEnter={() => fn_showOptions(item)}
            onMouseLeave={() => fn_hideOptions(item)}
          >
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
            <div
              className={`options-container ${item.hover ? "show" : "hide"}`}
            >
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
              <button className="button" onClick={() => fn_buttonClicked(item)}>
                Done
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
