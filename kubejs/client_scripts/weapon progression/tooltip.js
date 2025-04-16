ItemEvents.tooltip(e => {

    
    for (const [weaponType, properties] of Object.entries(global.weapons)) {
        properties.forEach(property => {
            if (property.method == "itemstack"){
                ChangeTooltip(e, property);
            } else if (property.method == "group"){
                property.id.forEach(id => {
                    ChangeTooltip(e, id);
                })
            }
        })
    }  
})



function ChangeTooltip(e, property){
    e.addAdvanced(property.id, (_1, _2, component) => {
        
        
        let tooltips = component.toArray()

        let name = component.get(0);
        component.removeIf((e) => e != name);

        if (property.progress && property.progress_list){

            let itemTag = _1.getOrCreateTag();

            let currentTaskIndex = property.progress_list.findIndex(task => {
                let kills = itemTag.get(`${task.target.split(":")[1]}_kills`) || 0; 
                return kills < task.count; 
            });

            if (currentTaskIndex === -1) {
                currentTaskIndex = property.progress_list.length - 1; 
            }

            let currentTask = property.progress_list[currentTaskIndex];
            let taskType = currentTask.target.split(":")[1];
            let taskKills = itemTag.get(`${taskType}_kills`) || 0;
            let taskProgress = Math.min(taskKills / currentTask.count, 1);
            let taskTitle = currentTask.title;
            let totalBrackets = 10;
            let filledBrackets = Math.floor(taskProgress * totalBrackets);
            let maxKills = currentTask.count;

            let killCountColor = 0x696969;

            if (taskProgress < 0.25) {
                killCountColor = 0xFF5733;
            } else if (taskProgress < 0.5) {
                killCountColor = 0xFFC300;
            } else if (taskProgress < 0.75) {
                killCountColor = 0x28A745;
            } else {
                killCountColor = 0x6CE510;
            }


            let progressBar = Text.of("");
            for (let i = 0; i < totalBrackets; i++) {
                if (i < filledBrackets) {
                    progressBar.append(Text.of("█").color(0x6CE510));
                } else {
                    progressBar.append(Text.of("█").color(0x696969));
                }
            }

            component.add(
                Text.of(`${taskTitle}: `).gray()
                    .append(Text.of(`${taskKills}`).color(killCountColor))
                    .append(Text.of("/")).gray()
                    .append(Text.of(`${maxKills}`).color(0xFBA800))
            );
            component.add(progressBar);
            component.add(" ")
        }


        let count = 0;

        tooltips.forEach(g => {
            count++
            if (count >= 4){
                component.add(g)
            }
        }) 
    })
}
