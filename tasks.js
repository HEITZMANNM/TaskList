

let taskList = [];

let taskIdCounter = 1;

async function addTask(task) {
    try{
        taskList.push({id: taskIdCounter, text: task, completed: false});
        console.log("Tache ajoutée : " + task);
        taskIdCounter++;
    }catch (error){
        console.log(error);
    }
}

function displayTasks() {
if(taskList.length === 0){
    console.log("Aucune tâche en cours");
}else{
    console.log("Tâches en cours : ");
    taskList.map((task) => {
        console.log("n°: "+ task.id + " || tache: " + task.text);
    });

}
}

function completeTask(id) {
    try{
        let task = taskList.find((task) => task.id === id);
        task.completed = true;
        console.log("Tâche n°" + id + " terminée");}
    catch (error){
        console.log(error);
    }
}

function removeTask(id) {
    try{
        taskList = taskList.filter((task) => task.id !== id);
        console.log("Tâche n°" + id + " supprimée");
    }catch (error){
        console.log(error);
    }
}


const main = () => {

    console.log("Gestionnaire de tâches");
    console.log("----------------------------");
    console.log("Commandes disponibles :");
    console.log("  add <tâche>      → Ajouter une tâche");
    console.log("  list             → Afficher toutes les tâches");
    console.log("  complete <id>    → Marquer une tâche comme terminée");
    console.log("  remove <id>      → Supprimer une tâche");
    console.log("----------------------------");
    console.log("Que souhaitez-vous faire ?");


    const command = process.argv[2];
    const param = process.argv[3];

    switch (command) {
        case "add":
            if (!param) return console.log("Veuillez spécifier une tâche.");
            addTask(param);
            break;
        case "list":
            displayTasks();
            break;
        case "complete":
            if (!param) return console.log("Indiquez l'ID de la tâche.");
            completeTask(parseInt(param));
            break;
        case "remove":
            if (!param) return console.log("Indiquez l'ID de la tâche.");
            removeTask(parseInt(param));
            break;
        default:
            console.log("📌 Commandes disponibles :");
            console.log("  add <tâche>      → Ajouter une tâche");
            console.log("  list             → Afficher toutes les tâches");
            console.log("  complete <id>    → Marquer une tâche comme terminée");
            console.log("  remove <id>      → Supprimer une tâche");
    }
};

main();