import { Text } from "react-native";
import Styles from "./Text.styled";

const CustomText = ({ children, ...props }) => {
  return <Text style={[Styles.container, props.style]}>{children}</Text>;
};

export default CustomText;
