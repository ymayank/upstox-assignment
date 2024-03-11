import { View } from "react-native";
import Text from "../text/Text";
import Styles from "./Header.styled";

const Header = (props) => {
  return (
    <View style={[Styles.container, props.style]}>
      <Text style={Styles.title}>{props.title}</Text>
    </View>
  );
};

export default Header;
