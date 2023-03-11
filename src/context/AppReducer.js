export default (state, action) => {
  switch (action.type) {
    case "ADD_FUEL_PRICE":
      return {
        ...state,
        currentFuelPrice: {...action.payload},
      }
    default:
      return state;
  }
}
