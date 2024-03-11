import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

import useStore from "../../zustand/useStore";
import Styles from "./Holding.styled";
import { roundNum } from "../../utils/Util";
import { Text } from "../../components";

const BottomSection = () => {
  const holdingsSummary = useStore((state) => state.holdingsSummary);

  const [show, setShow] = useState(false);

  const _onPress = () => {
    setShow((val) => !val);
  };

  return (
    <View style={Styles.bottomSection}>
      <TouchableOpacity onPress={_onPress} style={Styles.arrow}>
        <View style={[Styles.triangle, show ? Styles.triangleDown : {}]} />
      </TouchableOpacity>
      {show && (
        <>
          <View style={Styles.row}>
            <Text>Current Value:</Text>
            <Text>₹ {roundNum(holdingsSummary.currentValueTotal)}</Text>
          </View>
          <View style={Styles.row}>
            <Text>Total Investment:</Text>
            <Text>₹ {roundNum(holdingsSummary.totalInvestment)}</Text>
          </View>
          <View style={Styles.row}>
            <Text>Today's Profit & Loss:</Text>
            <Text>₹ {roundNum(holdingsSummary.todaysPNL)}</Text>
          </View>
        </>
      )}
      <View style={[Styles.row, Styles.profileLossRow]}>
        <Text>Profit & Loss:</Text>
        <Text>₹ {roundNum(holdingsSummary.totalPNL)}</Text>
      </View>
    </View>
  );
};

export default BottomSection;
