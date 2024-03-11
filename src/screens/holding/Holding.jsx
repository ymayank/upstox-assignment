import { useEffect } from "react";
import { FlatList, View } from "react-native";

import { Text, Header } from "../../components";
import useStore from "../../zustand/useStore";
import Styles from "./Holding.styled";
import { roundNum } from "../../utils/Util";
import BottomSection from "./BottomSection";

const CardItem = ({ item }) => {
  return (
    <View style={Styles.card}>
      <View style={Styles.row}>
        <Text style={Styles.cardSymbol}>{item.symbol}</Text>
        <Text>LTP: ₹ {item.ltp}</Text>
      </View>
      <View style={Styles.row}>
        <Text>{item.quantity}</Text>
        <Text>P/L: ₹ {roundNum(item.close - item.ltp)}</Text>
      </View>
    </View>
  );
};

const Holding = () => {
  const store = useStore((state) => state);

  useEffect(() => {
    store.getHoldings();
  }, []);

  const _renderItem = ({ item }) => {
    return <CardItem item={item} />;
  };

  return (
    <View style={Styles.container}>
      <Header title="Upstox Holding"></Header>
      <FlatList
        data={store.userHolding}
        renderItem={_renderItem}
        ItemSeparatorComponent={<View style={Styles.itemSeparator} />}
        contentContainerStyle={Styles.flatListContainer}
      />
      <BottomSection />
    </View>
  );
};

export default Holding;
