const decks = [
    {
        name: "Animated Movies",
        instructions: "The emoji/s on each card are a clue for an animated movie. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the movie name in easy mode, and a character/place in the movie in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Frozen",
                content: {
                    primary: "❄️", 
                    secondary: "🏔️🚪"
                },
                hint: "Has 2 female protagonists",
                matchValue: "Arendelle",
                seenHint: false
            },
            {
                name: "Snow White and the Seven Dwarfs",
                content: {
                    primary: "🍎", secondary: "👸😗"
                },
                hint: "Earliest animated feature film",
                matchValue: "Dopey",
                seenHint: false
            },
            {
                name: "Zootopia",
                content: {
                    primary: "🐰", 
                    secondary: "👮‍♀️🦊"
                },
                hint: "Shakira featured in a song",
                matchValue: "Hopps",
                seenHint: false
            },
            {
                name: "The Lion King",
                content: {
                    primary: "🦁", 
                    secondary: "🐗🐦"
                },
                hint: "Has a live action remake",
                matchValue: "Pride Rock",
                seenHint: false
            },
            {
                name: "Moana",
                content: {
                    primary: "🌊", 
                    secondary: "🏝⛵"
                },
                hint: "Based on Polynesian culture",
                matchValue: "Motunui",
                seenHint: false
            },
            {
                name: "Finding Nemo",
                content: {
                    primary: "🐠", 
                    secondary: "🐟🌊"
                },
                hint: "Protagonist has a slight deformity",
                matchValue: "Great Barrier Reef",
                seenHint: false
            },
            {
                name: "Toy Story",
                content: {
                    primary: "🤠", 
                    secondary: "🤖🧒"
                },
                hint: "Beginning of a franchise",
                matchValue: "Andy",
                seenHint: false
            },
            {
                name: "Aladdin",
                content: {
                    primary: "🧞", 
                    secondary: "👳‍♀️🐒"
                },
                hint: "Based on a middle eastern folk tale",
                matchValue: "Jafar",
                seenHint: false
            },
            {
                name: "The Little Mermaid",
                content: {
                    primary: "🧜‍♀️", 
                    secondary: "🦵🗣️"
                },
                hint: "Based on a Hans Christian Anderson tale",
                matchValue: "Triton",
                seenHint: false
            },
            {
                name: "Inside Out",
                content: {
                    primary: "😄", 
                    secondary: "😔😡"
                },
                hint: "The main characters are emotions",
                matchValue: "Riley",
                seenHint: false
            },
            {
                name: "101 Dalmations",
                content: {
                    primary: "🐕", 
                    secondary: "⬛⬜"
                },
                hint: "Has a live action remake",
                matchValue: "Cruella",
                seenHint: false
            },
            {
                name: "Up",
                content: {
                    primary: "🎈", 
                    secondary: "🏡🐕"
                },
                hint: "Protagonist is an elderly widower",
                matchValue: "Paradise Falls",
                seenHint: false
            },
            {
                name: "Pinocchio",
                content: {
                    primary: "🤥", 
                    secondary: "👃🧚‍♀️"
                },
                hint: "Protagonist transitions from puppet to boy",
                matchValue: "Woodworker",
                seenHint: false
            },
            {
                name: "The Incredibles",
                content: {
                    primary: "🦸‍♂️", 
                    secondary: "🦸‍♀️🎭"
                },
                hint: "Family of superheroes living as muggles 😉",
                matchValue: "Elastigirl",
                seenHint: false
            },
            {
                name: "Dumbo",
                content: {
                    primary: "🐘", 
                    secondary: "🎪👂"
                },
                hint: "Has a live action reimagining",
                matchValue: "Mrs. Jumbo",
                seenHint: false
            },
            {
                name: "Sleeping Beauty",
                content: {
                    primary: "😴", 
                    secondary: "👸🧚"
                },
                hint: "Has a sequel focussing on the villain",
                matchValue: "Maleficient",
                seenHint: false
            },
            {
                name: "Beauty and the Beast",
                content: {
                    primary: "🌹", 
                    secondary: "👸👹"
                },
                hint: "Female protagonist loved books",
                matchValue: "Mrs. Potts",
                seenHint: false
            },
            {
                name: "Coco",
                content: {
                    primary: "💀", 
                    secondary: "🎸🐕"
                },
                hint: "Inspired by a Mexican holiday",
                matchValue: "Land of the Dead",
                seenHint: false
            },
            {
                name: "Tangled",
                content: {
                    primary: "💇‍♀️", 
                    secondary: "👸🌺"
                },
                hint: "Based on Rapunzel",
                matchValue: "Eugene Fitzherbert",
                seenHint: false
            },
            {
                name: "Onward",
                content: {
                    primary: "🧝‍♂️", 
                    secondary: "🧙👨‍👦‍👦"
                },
                hint: "All elf characters have blue skin",
                matchValue: "Wilden Lightfoot",
                seenHint: false
            }
        ]
    },
    {
        name: "Coding Languages",
        instructions: "The emoji/s on each card are a clue for a programming language. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the coding language name in easy mode, and a couple lines of code in that language in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Java",
                content: {
                    primary: "☕"
                },
                hint: "Was earlier named Oak",
                matchValue: `String message = \"Hello World!\";
System.out.println(message)`,
                seenHint: false
            },
            {
                name: "JavaScript",
                content: {
                    secondary: "☕📜"
                },
                hint: "Based on ECMAScript",
                matchValue: `let message = \"Hello World!\"
console.log(message)`,
                seenHint: false
            },
            {
                name: "TypeScript",
                content: {
                    secondary: "⌨📜"
                },
                hint: "Compiles to JavaSccurl",
                matchValue: `let message : string = \"Hello World!\"
console.log(message)`,
                seenHint: false
            },
            {
                name: "Python",
                content: {
                    primary: "🐍"
                },
                hint: "Is whitespace sensitive",
                matchValue: `message = \"Hello World!\"
print(message)`,
                seenHint: false
            },
            {
                name: "C",
                content: {
                    primary: "🌊"
                },
                hint: "One of the oldest languages, but still popular",
                matchValue: `char message[11] = \"Hello World!\";
printf(\"%s\", message);`,
                seenHint: false
            },
            {
                name: "Ruby",
                content: {
                    primary: "💎"
                },
                hint: "Its server side framework is called \"Rails\"",
                matchValue: `message = \"Hello World!\"
puts message`,
                seenHint: false
            },
            {
                name: "C#",
                content: {
                    secondary: "👀👓"
                },
                hint: "Most popular language for game development",
                matchValue: `string message = \"Hello World!\";
Console.WriteLine(message);`,
                seenHint: false
            },
            {
                name: "Dart",
                content: {
                    primary: "🎯"
                },
                hint: "Used to write Flutter apps",
                matchValue: `String message = \"Hello World!\";
print(message);`,
                seenHint: false
            },
            {
                name: "Swift",
                content: {
                    primary: "🦅"
                },
                hint: "Used to write apps for iOS and MacOS",
                matchValue: `var message : string = \"Hello World!\"
print(message)`,
                seenHint: false
            },
            {
                name: "Perl",
                content: {
                    primary: "🧅"
                },
                hint: "Originally developed for text manipulation",
                matchValue: `my $message = \'Hello World!\';
print($message, \'\\n\');`,
                seenHint: false
            },
            {
                name: "PHP",
                content: {
                    primary: "🐘"
                },
                hint: "Widely used as a server side scripting language",
                matchValue: `$message = \"Hello World!\";
echo $message;`,
                seenHint: false
            }
        ]
    },
    {
        name: "Cartoon Characters",
        instructions: "The emoji/s on each card are a clue for a hero from the Marvel universe. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the superhero's alias in easy mode, and their real name in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Doraemon",
                content: {
                    primary: "🔦 "
                },
                hint: "Gadget Master ",
                matchValue: `Saviour`,
                seenHint: false
            },
            {
                name: "Nobita",
                content: {
                    secondary: "0️⃣"
                },
                hint: "loves to sleep gets 0 marks",
                matchValue: `gets 0 but is a hero`,
                seenHint: false
            },
            {
                name: "Shizuka",
                content: {
                    secondary: "🚺"
                },
                hint: "Helps Nobita",
                matchValue: `Loves pink`,
                seenHint: false
            },
            {
                name: "Gian",
                content: {
                    primary: "🎤"
                },
                hint: "Sings Bad",
                matchValue: `Bullies Nobita`,
                seenHint: false
            },
            {
                name: "Sunio",
                content: {
                    primary: "🚗"
                },
                hint: "Has many tools",
                matchValue: `spoiled kid`,
                seenHint: false
            },
            {
                name: "Dekisugi",
                content: {
                    primary: "📚"
                },
                hint: "Studious Kiddo",
                matchValue: `studies a lot`,
                seenHint: false
            },
            {
                name: "Shinchan",
                content: {
                    secondary: "😂"
                },
                hint: "pyara pyara",
                matchValue: `funny kid`,
                seenHint: false
            },
            {
                name: "TOM",
                content: {
                    primary: "😿"
                },
                hint: "Cat OP",
                matchValue: `always loses by a mouse`,
                seenHint: false
            },
            {
                name: "Jerry",
                content: {
                    primary: "🧀 "
                },
                hint: "Loves Cheese",
                matchValue: `Always Wins`,
                seenHint: false
            },
            {
                name: "Chota Bheem",
                content: {
                    primary: "🌕"
                },
                hint: "Love Laddos",
                matchValue: `Fights back Dholakpur`,
                seenHint: false
            },
            {
                name: "Motu",
                content: {
                    primary: "🥟"
                },
                hint: "Loves Samosa",
                matchValue: `Fat Op`,
                seenHint: false
            }
        ]

    }
]

export function getShuffledDeck (category) {
    const cardDeck = decks.find(deck => deck.name === category).cards
	for(let i = cardDeck.length - 1; i > 0; i--)
	{
		let j = Math.floor(Math.random() * (i + 1));
		[cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]];
    }
    return cardDeck 
}

export function getInstructions (category) {
    return decks.find(deck => deck.name === category).instructions
}