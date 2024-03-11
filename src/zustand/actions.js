import Api, { API_ROUTE } from "../utils/Api";

export const getHoldingsAction = async (set) => {
  try {
    const res = await Api.get(API_ROUTE.USER_HOLDINGS);

    const userHolding = res.data?.userHolding;

    if (userHolding) {
      const holdingsSummary = {
        currentValueTotal: 0,
        totalInvestment: 0,
        todaysPNL: 0,
        totalPNL: 0,
      };

      userHolding.forEach((i) => {
        holdingsSummary.currentValueTotal += i.ltp * i.quantity;
        holdingsSummary.totalInvestment += i.avgPrice * i.quantity;
        holdingsSummary.todaysPNL += (i.close - i.ltp) * i.quantity;
      });

      holdingsSummary.totalPNL =
        holdingsSummary.currentValueTotal - holdingsSummary.totalInvestment;

      set((state) => ({ userHolding: res.data?.userHolding, holdingsSummary }));
    }
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
