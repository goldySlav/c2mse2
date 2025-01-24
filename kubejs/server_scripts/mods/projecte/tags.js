//priority: 1

ServerEvents.tags("item", (event) => {
  event.remove(MC("tools"), PRE("dm_hoe"));
  event.remove(MC("hoes"), PRE("dm_hoe"));
  event.remove(MC("tools"), PRE("rm_hoe"));
  event.remove(MC("hoes"), PRE("rm_hoe"));
});
