import { create } from "zustand";

import { getHoldingsAction } from "./actions";

const useStore = create((set) => ({
  userHolding: [],
  holdingsSummary: {
    currentValueTotal: 0,
    totalInvestment: 0,
    todaysPNL: 0,
    totalPNL: 0,
  },
  getHoldings: () => getHoldingsAction(set),
}));

export default useStore;
