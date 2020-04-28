document.body.onload = dailyStoic();

function dailyStoic() {

    let taskList = [
        {
            task: 'Wake up an hour early',
            image: '',
            description: "Whatever your alarm is normally set to, move it back sixty minutes. You weren't made to live in a comfy bed. You're awakening to the work of a human being! You got shit to do and potential to realize! \n\n Also mornings are just nice. Watch the sunrise :)",
            quote: "On those mornings you struggle with getting up, keep this thought in mind—I am awakening to the work of a human being.",
            author: "Marcus Aurelius"
        },
        {
            task: 'Go on a 24-hour phone fast',
            image: '',
            description: "Leave your phone at home or in your car and see what life is like untethered, unfiltered. Free from likes and dislikes and notifications. These all come at a cost: a cascade of cortisol frying our brains and distorting our perceptions of the world.",
            quote: "Nothing, to my way of thinking, is better proof of a well-ordered mind than a man's ability to stop just where he is and pass some time in his own company.",
            author: "Seneca"
        },
        {
            task: 'Go stargazing tonight',
            image: '',
            description: `Gaze into the night sky for 15 minutes. Look up into infinity, and let go of the day passed. Relish the stillness. Appreciate feeling so small in a universe so vast. Fathom the unfathomable, unthinkable odds of your life. And do it all with a sense of perspective. Ask yourself, in the light, "what's really most important"`,
            quote: "Meditate often on the interconnectedness and mutual interdependence of all things in the universe.",
            author: "Marcus Aurelius, Meditations"
        },
        {
            task: 'Take a cold shower',
            image: '',
            description: "Instead of waiting for your shower to warm up exactly right, you're going to turn the knob all the way to cold and step right in. The point of this shower is shock and disquietude--to teach the bosy and mind an important lesson about what life is like, and who's in charge.",
            quote: "The body should be treated more rigorusly, that it may not be disobedient to the mind.",
            author: "Seneca, Moral Letters"
        },
        {
            task: 'Do a 24-hour media fast',
            image: '',
            description: `Detox from the endless news cycle that makes us miserable. Click away if old habits grab control of your computer or phone. You'll find yourself with newfound free time. Your mind and body will be able to relax to their natural state. And you will, as Epictetus said, have room to improve. Even if you're "ignorant" for just a day.`,
            quote: "We should realize that an opinion is not easily formed unless a person says and hears the same things every day.",
            author: "Epictetus"
        },
        {
            task: 'Do pushups to exhaustion, then do it again',
            image: '',
            description: "Whether it's push ups, sit ups, or pull ups, do as many as you possible can. Get yourself to the point where you body is shaking and laying on the floor was never so comfortable. Then wait 1 minute, and do it again. As many as you can. While you do it the second time, think back to a minute ago when you believed even 1 more rep was impossible.",
            quote: "If you have nothing to stir you up and rouse you to action, nothing will test your resolution... It is not tranquility, it is merely a flat calm.",
            author: "Seneca"
        },
        {
            task: 'Ask for help with a personal problem',
            image: '',
            description: "It can be a hard thing to a hard thing, asking for help. It feels like admitting we're weak... It feels like confessing that you're insufficient, incapable, inadequate. It feels like a chunk of your pride has been stripped away. This is the exact wrong way to feel. Sure, a stoic is strong, a but a Stoic is strong precisely because they ask for help.",
            quote: "Like a soldier storming a wall, you have a mission to accomplish. And if you've been wounded and you need a comrade to pull you up? So what?",
            author: "Marcus Aurelius"
        },
        {
            task: 'Take a 24-hour vow of poverty',
            image: '',
            description: `Wake up as if poverty has beset you and become your new reality. As if "luxury" had never been introduced to your vocabulary. As if walking to work wasn't a leisurely pleasure, but a necessity. Welcome poverty into your life today, because when you do, you will quickly realize just how much abundance of spirit and mind you enjoy.`,
            quote: "Make yourself at home with the scantiest fare. Establish business relations with poverty.",
            author: "Seneca"
        },
        {
            task: 'Delete 10 contacts from your phone',
            image: '',
            description: "Your challenge today is to do a friend purge. Who you spent time with in the past determined your current path. Who you chose to be with now has the chance to make or break who you will be in the future-- and it always will. We have to make hard decisions on a regular basis about who we say yes to and which relationships we invest in.",
            quote: "Above all, keep a close watch on this -- that you are never so tied to your former acquaintances and friends that you are pulled down to their level.",
            author: "Epictetus"
        },
        {
            task: 'Be silent for 24 hours',
            image: '',
            description: "Today, use the energy you've reserved for outward expression and harness t as your ally in fending off the stressors of the day. Dive into deep thought. Assess, reflect, examine what truly brings joy and meaning to your life, what principles and values you hold most dear, what you can do today to step toward the life you desire.",
            quote: "Let silence be your goal for the most part; say only what is necessary, and be brief about it",
            author: "Epictetus"
        },
        {
            task: 'Log everything you do today, and review it tonight',
            image: '',
            description: "The power of logging your behaviour is to see all of it so your mind can't rationalize its unconscious choices—whether that's midnight snacking or frittering away money. When reviewing your activity log tonight, be brutally honest with yourself. Don't justify or rationalize. Each action gets you closer to your goals or it doesn't.",
            quote: "If these wish to know how short their life is, let them reflect how small a part of it is their own."
        },
        {
            task: 'Write down 6 character traits that describe the person you wish to be',
            image: '',
            description: "If a friend were asked to describe you in six words, what would they say? What do you hope they would say? Honest? Respectful? Reliable? Optimistic? What we want to answer are the essential questions of life: Who am I? What do I stand for? What's important?",
            quote: "No random actions, none not based on underlying principles",
            author: "Marcus Aurelius"
        },
        {
            task: 'Memorize your favorite Stoic passage / simply read one',
            image: '',
            description: "Pick a passage from Marcus, Epictetus, or Seneca. Memorize its words—your mind will index them as your unconscious connects them to all other things you know, feel, and care about. The words will sink into your mind; in time they will grow into knowledge and wisdom, and ultimately fill the space between stimulus and response.",
            quote: "You must linger among a limited number of master thinkers, and digest their works, if you would derive ideas which shall win firm hold in your mind",
            author: "Seneca"
        },
        {
            task: 'Take a 1-hour walk',
            image: '',
            description: "Take a one-hour walk today and use the time to set your goals for the day or reflect on the day’s achievements. Let your mind work as the rest of your senese take in the world through which you’re now cutting a path. Who knows where your walk may lead, or who might follow proudly in your footsteps?",
            quote: "We should take wandering outdoor walks, so that the mind be nourished and  refreshed by the open air and deep breathing",
            author: "Seneca"
        },
        {
            task: 'Sleep on the ground',
            image: '',
            description: "Sleeping on the floor will be hard...literally. Especially if you’ve never done it before. It’s uncomfortable. You may be sore or sleep terribly, but like any other physical fear, you’ll feel good having accomplished it—even if you’re feeling awful otherwise. When you wake up, you’ll start the day with victory.",
            quote: "It is precisely in times of immunity from care that the soul should toughen itself beforehand for occasions of greater stress"
        },
        {
            task: 'Tell 3 friends or family members how important they are to you',
            image: '',
            description: "3 phone calls. Set up a lunch or dinner or coffee. If your day isn’t improved immensely, try 3 other friends. You will feel happier. We need friendship to survive, to be happy. And if we want to enjoy the fruits of it, we must invest in those relationships. We must make our deposits long before we plan to make withdrawals.",
            quote: "[why] do I make a man my friend? To have someone for whom I may die, whom I may follow into exile, against whose death I may stake my own life",
            author: "Seneca"
        },
        {
            task: 'Write 3 goals for the next week, month, and year',
            image: '',
            description: "Today, either in your journal, on a document on your computer, or in a conversation with a life partner, start to go over some specific goals. When the goal is defined, when you can see what it could look like, your brain begins to help you, consciously and subconsciously.",
            quote: "Our plans miscarry because they have no aim. When a man does not know what harbor he is making for, no wind is the right wind",
            author: "Seneca"
        },
        {
            task: 'Thank a person you admire',
            image: '',
            description: `The myth of the lone genius is exactly that; no one succeeds alone. There is no such thing as “the chosen one,” only talented hardworking, motivated individuals feeding off of others with those same traits. So find your versions of those people and thank them for inspiring you to become better.`,
            quote: "Go straight to the seat of intelligence",
            author: "Marcus Aurelius"
        },
        {
            task: 'Read a new work of fiction',
            image: '',
            description: "Fiction, like all wonderful art, is full of insights about the human condition. Despite complaints from the busy and the fact-oriented, fiction can change your life and teach you just as much as any nonfiction book. Pick up a work of fiction today and get lost in an imagined world—it just may help you better understand the real one.",
            quote: "Reading... is indispensable—primarily to keep me from being satisfied with myself alone… Reading nourishes the mind and refreshes it when it is wearied.",
            author: "Seneca"
        },
        {
            task: 'Dress radically different today. Notice the reaction (or lack thereof)',
            image: '',
            description: "Everyone is focused on themselves, working through their own problems and navigating their own lives. You’ll see this when you dig up your worst clothes, put them on, and go places in them. Walk around and watch the watchers. You will find they aren’t there, because no one cares!",
            quote: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
            author: "Marcus Aurelius"
        },
        {
            task: 'Do something that scares you',
            image: '',
            description: "Fear is part of the human condition. We can’t escape it. We can however train ourselves to think about it differently. We can build up our tolerance to it. We can live a life where we dictate whether we do something or not. We can show our fear who is in charge.",
            quote: "There are more things likely to frighten us than there are to crush us; we suffer more often in imagination than in reality.",
            author: "Seneca"
        },
        {
            task: 'Make a list of what upsets you, and then destroy it',
            image: '',
            description: "Get all of that negative self-talk out of your brain, out of the place where your subconscious, that architect of your misery, uses all that crappy stuff to build your mental prison. Get it out onto paper. Trap it there, within the confines of that sheet of paper so you can regard it with some distance. So you control it, it doesn’t control you.",
            quote: "How much more harmful are the consequences of anger and grief than the circumstances that aroused them in us!",
            author: "Marcus Aurelius"
        },
        {
            task: "List 5 things you're thankful for",
            image: '',
            description: "Take some time to think about what you are thankful for and then write down the first five things that produce a visceral response. Carry the list with you, meditate on it throughout your day, and continue to keep yourself open to all the things that you are truly thankful for. You won’t regret it.",
            quote: "Gratitude is not only the greatest of virtues, but the parent of all others",
            author: "Marcus Tullius Cicero"
        },
        {
            task: 'Do a kindness for a stranger',
            image: '',
            description: "Make it small. Smile at someone, tell them you like their shirt. Or tip the cashier an extra $5 and tell them you appreciate what they do. Doing a kindness for a stranger is the ultimate version of what Marus Aurelius calls a “double satisfaction.” Small for you, unexpected for them, it will make a difference in both of your days.",
            quote: "We Stoics....take pleasure in bestowing benefits even though they cost us labor, provided that they lighten the labors of others"
        },
        {
            task: 'Fill a trashbag with clutter from your home',
            image: '',
            description: "Find a place that needs to be cleaned up and get to it. Fill a garbage bag, a shopping bag, whatever you have time for. The more the better. Trash assaults all of our sense and impacts our ability to experience the world with those very senses. But we can fix all that, for ourselves and for each other.",
            quote: "[A] commitment to justice in your own acts. Which means: thought and action resulting in the common good. What you were born to do.",
            author: "Marcus Aurelius"
        },
    ]

    let cardImage = document.getElementById("cardImage");
    let cardTask = document.getElementById("cardTask");
    let cardDescription = document.getElementById("cardDescription");
    let cardQuote = document.getElementById("cardQuote");
    let taskNumber = document.getElementById("taskNumber");

    let randomTask = Math.floor(Math.random() * (taskList.length - 1))
    let dailyTask = taskList[randomTask];

    taskNumber.innerText = `Task #${randomTask + 1}`;
    cardTask.textContent = dailyTask.task;
    cardDescription.innerText = dailyTask.description;
    cardQuote.innerText = `"${dailyTask.quote}" \n\n — ${dailyTask.author}`;
}

function cardFlip() {
    document.getElementById("card").classList.toggle("card-flip");
    document.getElementById("cardBack").classList.toggle("card-back-flip");
}

document.getElementById("cardContainer").addEventListener("click", cardFlip);


