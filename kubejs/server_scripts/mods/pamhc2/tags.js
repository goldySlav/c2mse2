//priority: 1

ServerEvents.tags("item", (event) => {
  event.remove(F("flour_plants"), PHC_C("cornitem"));
  event.remove(F("flour_plants/corn"), PHC_C("cornitem"));
});
