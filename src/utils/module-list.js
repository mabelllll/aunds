import { Warnings } from "../components/Warnings";
import { SquareSlider } from '../components/SquareSlider';
import { ProjectSlide } from "../components/ProjectSlide";

export const Modules = (props) => {
  switch (props.module.acf_fc_layout) {
    case "warnings":
      return <Warnings data={props.module} />;
      break;
    // {
    //   /* TODO extend with a new case and add your component, by using the acf_fc_layout key */
    // }
    case ("square_slider"):
      if (props.module.type === "images") {
        return <SquareSlider data={props.module} />;
        break;
      }
    // } else if (props.module.type === "select") {
    //   return <SelectSquareSlider data={ props.module } />;
    //   break;
    // }
    default:
      return null;
  }
};
