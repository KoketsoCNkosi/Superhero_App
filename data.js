// Heroes Database
const heroes = [
    {
        id: 'captain-america',
        name: 'Captain America',
        realName: 'Steve Rogers',
        image: 'images/captainamerica.jpg',
        images: ['images/captainamerica2.jpg', 'images/captainamerica3.jpg'],
        description: "America's World War II Super-Soldier. The First Avenger with enhanced speed, stamina, and unwavering moral compass.",
        details: {
            powers: 'Enhanced strength, speed, stamina, and agility thanks to the Super-Soldier serum',
            origin: 'Steve Rogers was a frail young man who volunteered for the Super-Soldier program during World War II. The serum transformed him into the peak of human physical perfection.',
            allies: 'His longest companion is James Buchanan "Bucky" Barnes, and he\'s formed strong bonds with Natasha Romanoff (Black Widow) and Sam Wilson (Falcon).',
            equipment: 'Iconic vibranium shield and updated Captain America suit providing protection against elements and enemies.'
        }
    },
    {
        id: 'black-widow',
        name: 'Black Widow',
        realName: 'Natasha Romanoff',
        image: 'images/natasha.jfif',
        images: ['images/natasha4.jpg', 'images/natasha2.jpg'],
        description: 'Master spy and assassin with no superhuman abilities but ultimate human levels of strength, agility, and stamina.',
        details: {
            quote: '"At some point we all have to choose between who the world wants you to be, and who you are."',
            origin: 'Indoctrinated by the Red Room, a Russian training program that turned young girls into lethal undercover agents.',
            skills: 'Extensively trained in karate, judo, kung fu, wrestling, gymnastics, acrobatics, and ballet. Expert with all manner of weapons.',
            equipment: 'Dual batons, Glock 26s, and the Black Widow\'s Bite bracelets that discharge electricity.',
            allies: 'Loyal to S.H.I.E.L.D. and fights alongside the Avengers including Captain America, Iron Man, and others.'
        }
    },
    {
        id: 'iron-man',
        name: 'Iron Man',
        realName: 'Tony Stark',
        image: 'images/tony.jpg',
        images: ['images/tony2.jpg', 'images/tony3.jpg'],
        description: "Genius, billionaire, philanthropist. Tony Stark's high-tech armor makes him one of the most powerful heroes on Earth.",
        details: {
            title: 'Genius, Billionaire, Philanthropist',
            origin: 'Captured by terrorists in Afghanistan, Tony built his first suit to escape. The arc reactor in his chest keeps him alive and powers his suits.',
            technology: 'The Arc Reactor provides clean, manageable energy with incredible output, powering his advanced suits of armor.',
            legacy: 'Built upon his father Howard Stark\'s designs but enhanced them with his own innovations.',
            mission: 'Uses his technology and wealth to protect the world as Iron Man and leader of the Avengers.'
        }
    },
    {
        id: 'thor',
        name: 'Thor',
        realName: 'Thor Odinson',
        image: 'images/thor.jpg',
        images: ['images/thor2.jpg', 'images/thor3.jpg'],
        description: 'God of Thunder, Son of Odin. Commands lightning and possesses incredible strength as protector of Asgard.',
        details: {
            title: 'God of Thunder, Son of Odin',
            age: 'Born 1500 years ago to Odin and Frigga, king and queen of Asgard',
            powers: 'Great strength, endurance, stamina, long life, and command over lightning and thunder',
            weapons: 'Mjolnir (magic hammer) and later Stormbreaker, which can command the Bifrost',
            enemies: 'Frost Giant King Laufey, Surtur, Malekith, his half-sister Hela, and the Grandmaster',
            mission: 'Protector of Asgard and Earth (Midgard), member of the Avengers'
        }
    },
    {
        id: 'hawkeye',
        name: 'Hawkeye',
        realName: 'Clint Barton',
        image: 'images/clint.jpeg',
        images: ['images/clint4.jpg', 'images/clint2.jpg'],
        description: "World's greatest marksman with astonishing talents in precise marksmanship, fighting, and tactical prowess.",
        details: {
            title: 'Golden Archer, World\'s Greatest Marksman',
            background: 'S.H.I.E.L.D. agent and accomplished combatant with few known details about his origins',
            skills: 'Expert acrobat, military-trained combatant, master assassin, tactician, and spy',
            equipment: 'Recurve bows, compound bows, specialized arrow quiver, speed loader, Busse dagger, S.H.I.E.L.D. handgun',
            notable: 'Instrumental in bringing Black Widow to S.H.I.E.L.D., sparing her life and offering redemption',
            status: 'Retired but always shows up when heroes are needed'
        }
    },
    {
        id: 'hulk',
        name: 'Hulk',
        realName: 'Dr. Bruce Banner',
        image: 'images/hulk.jpg',
        images: ['images/hulk2.jpeg', 'images/hulk4.jpg'],
        description: 'The strongest there is. Dr. Bruce Banner transforms into an unstoppable green giant powered by rage.',
        details: {
            transformation: 'Caught between the soft-spoken scientist and the uncontrollable green monster powered by rage',
            origin: 'Gamma radiation scientist who tested his research on himself, triggering his transformation',
            powers: 'Greatest raw strength of any natural being on Earth, incredible leaping ability, near-invulnerable skin',
            intelligence: 'The Hulk has evolved from infant-level to toddler-like personality, with improving speech over time',
            relationship: 'Banner refers to Hulk as "the other guy," while Hulk shows little love for the mild scientist'
        }
    }
];

// Export for use in app.js
window.heroes = heroes;
