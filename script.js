document.body.onload = dailyStoic();

function dailyStoic() {

    let taskList = [
        {
            task: 'Wake up an hour early',
            image: '',
            description: "Whatever your alarm is normally set to, move it back sixty minutes. You weren't made to live in a comfy bed. You're awakening to the work of a human being! You got shit to do and potential to realize! Also mornings are just nice. Watch the sunrise :)"
        },
        {
            task: 'Go on a 24-hour phone fast',
            image: ''
        },
        {
            task: 'Go stargazing tonight',
            image: ''
        },
        {
            task: 'Take a cold shower',
            image: ''
        },
        {
            task: 'Do a 24-hour media fast',
            image: ''
        },
        {
            task: 'Do pushups to exhaustion, then do it again',
            image: ''
        },
        {
            task: 'Ask for help with a personal problem',
            image: ''
        },
        {
            task: 'Take a 24-hour vow of poverty',
            image: ''
        },
        {
            task: 'Delete 10 contacts from your phone',
            image: ''
        },
        {
            task: 'Be silent for 24 hours',
            image: ''
        },
        {
            task: 'Log everything you do today, and review it tonight',
            image: ''
        },
        {
            task: 'Write down 6 character traits that describe the person you wish to be',
            image: ''
        },
        {
            task: 'Memorize your favorite Stoic passage / simply read one',
            image: ''
        },
        {
            task: 'Take a 1-hour walk',
            image: ''
        },
        {
            task: 'Sleep on the ground',
            image: ''
        },
        {
            task: 'Tell 3 friends or family members how important they are to you',
            image: ''
        },
        {
            task: 'Write 3 goals for the next week, month, and year',
            image: ''
        },
        {
            task: 'Thank a person you admire',
            image: ''
        },
        {
            task: 'Read a new work of fiction',
            image: ''
        },
        {
            task: 'Dress radically different today. Notice the reaction (or lack thereof)',
            image: ''
        },
        {
            task: 'Do something that scares you',
            image: ''
        },
        {
            task: 'Make a list of what upsets you, and then destroy it',
            image: ''
        },
        {
            task: "List 5 things you're thankful for ",
            image: ''
        },
        {
            task: 'Do a kindness for a stranger',
            image: ''
        },
        {
            task: 'Fill a trashbag with clutter from your home',
            image: ''
        },
    ]

    let cardImage = document.getElementById("cardImage");
    let cardTask = document.getElementById("cardTask");
    let taskNumber = document.getElementById("taskNumber");

    let randomTask = Math.floor( Math.random() * (taskList.length - 1))
    let dailyTask = taskList[randomTask];

    taskNumber.innerHTML = `Today's task is #${randomTask}` ;
    cardTask.textContent = dailyTask.task;
    cardImage.src = dailyTask.image;

    // console.log(`Stoic task #${randomTask}`);
    // console.log(taskList[randomTask].task);
    
}


