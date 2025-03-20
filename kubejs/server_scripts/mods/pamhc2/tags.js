//priority: 1

ServerEvents.tags("item", (event) => {
  event.remove(F("flour_plants"), PHC_C("cornitem"));
  event.remove(F("flour_plants/corn"), PHC_C("cornitem"));
  event.remove(F("egg"), PHC_T("avocadoitem"));
  event.remove(F("egg/avocado"), PHC_T("avocadoitem"));
  event.remove(F("egg"), PHC_T("bananaitem"));
  event.remove(F("egg/banana"), PHC_T("bananaitem"));
});
