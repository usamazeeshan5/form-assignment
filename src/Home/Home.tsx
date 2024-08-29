import { useState } from "react";
import data from "../assets/data.json";
import Field from "../components/field";
import Button from "../components/button";
import Options from "../components/options";

const Home = () => {
  const [response, setResponse] = useState<any>(data);
  const fn_controlOptions = (obj: any, prevValue: boolean) => {
    const updatedResponse = response.map((item: any) => {
      if (item.id === obj.id) {
        return { ...item, hover: !prevValue };
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
  return (
    <section className="home">
      <div className="main">
        {response.map((item: any, index: number) => (
          <div
            key={index}
            className="field"
            onMouseEnter={() => fn_controlOptions(item, item.hover)}
            onMouseLeave={() => fn_controlOptions(item, item.hover)}
          >
            <Field item={item} fn_clickSelectAll={fn_clickSelectAll} />
            <div
              className={`options-container ${item.hover ? "show" : "hide"}`}
            >
              <Options item={item} fn_clickSelect={fn_clickSelect} />
              <Button item={item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
