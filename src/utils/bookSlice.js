import { createSlice } from "@reduxjs/toolkit";

const initialBooks = [
    // Fiction
    {
        id: 1,
        category: "Fiction",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
        description: "Set in the American South during the 1930s, this novel follows young Scout Finch as she navigates issues of race, class, and morality. Her father, Atticus Finch, is a lawyer defending a Black man accused of a crime he didn't commit. Through Scout’s innocent perspective, the story highlights deep-rooted prejudices and the fight for justice. The novel explores themes of empathy, courage, and the loss of innocence. It remains one of the most powerful books in American literature, offering a thought-provoking reflection on society's struggles with discrimination and human decency.",
        rating: 4.8
    },
    {
        id: 2,
        category: "Fiction",
        title: "1984",
        author: "George Orwell",
        image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        description: "A chilling portrayal of a totalitarian regime, George Orwell's '1984' presents a dystopian future where the government, led by Big Brother, exercises complete control over people's thoughts and actions. Winston Smith, a low-ranking Party member, dares to question the oppressive system, leading to dire consequences. Themes of surveillance, propaganda, and psychological manipulation make this novel a powerful critique of authoritarianism. Orwell’s masterpiece remains a cautionary tale about the dangers of absolute power, thought control, and loss of personal freedom, making it as relevant today as when it was first published in 1949.",
        rating: 4.7
    },
    {
        id: 3,
        category: "Fiction",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        image: "https://covers.openlibrary.org/b/id/11171085-L.jpg",
        description: "A timeless romance novel, 'Pride and Prejudice' follows Elizabeth Bennet as she navigates love, family expectations, and social status in 19th-century England. When she meets the wealthy and seemingly arrogant Mr. Darcy, misunderstandings and prejudices threaten their connection. Through witty dialogue and engaging storytelling, Jane Austen explores themes of marriage, class, and personal growth. The novel critiques societal norms while celebrating the triumph of love and self-discovery. With its sharp observations and enduring charm, 'Pride and Prejudice' remains one of the most beloved and widely read novels in English literature.",
        rating: 4.6
    },

    // Non-Fiction
    {
        id: 11,
        category: "Non-Fiction",
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        image: "https://covers.openlibrary.org/b/id/9786096-L.jpg",
        description: "A fascinating exploration of human history, 'Sapiens' traces the evolution of Homo sapiens from primitive hunter-gatherers to modern civilizations. Yuval Noah Harari examines key turning points such as the Cognitive Revolution, the Agricultural Revolution, and the rise of empires. He delves into how shared myths, religions, and economies have shaped societies. With deep insights and a gripping narrative, the book challenges conventional wisdom about human progress. It encourages readers to question our beliefs, behaviors, and future as a species, making it a must-read for those interested in history, philosophy, and anthropology.",
        rating: 4.9
    },
    {
        id: 12,
        category: "Non-Fiction",
        title: "Educated",
        author: "Tara Westover",
        image: "https://covers.openlibrary.org/b/id/9493940-L.jpg",
        description: "Tara Westover’s memoir tells the extraordinary true story of her journey from a survivalist family in rural Idaho to earning a PhD from Cambridge University. Raised in isolation with no formal education, she taught herself enough to attend college. Overcoming immense hardships, including family abuse and societal constraints, Westover discovers the power of education and self-transformation. 'Educated' is a gripping and inspiring tale of resilience, identity, and the pursuit of knowledge. It challenges readers to reflect on the role of education in shaping one’s destiny and the courage needed to break free from the past.",
        rating: 4.8
    },
    {
        id: 13,
        category: "Non-Fiction",
        title: "Becoming",
        author: "Michelle Obama",
        image: "https://covers.openlibrary.org/b/id/9753274-L.jpg",
        description: "In this deeply personal memoir, former First Lady Michelle Obama shares her journey from a modest upbringing in Chicago to becoming one of the most influential women in the world. She recounts her experiences with race, education, family, and the pressures of public life. With warmth and honesty, she discusses her triumphs and struggles, including her role in the White House and her advocacy work. 'Becoming' is an inspiring story of resilience, empowerment, and the pursuit of purpose. It encourages readers to embrace their authenticity and make a difference in their communities.",
        rating: 4.9
    },

    // Science Fiction
    {
        id: 21,
        category: "Science Fiction",
        title: "Dune",
        author: "Frank Herbert",
        image: "https://covers.openlibrary.org/b/id/9918014-L.jpg",
        description: "A science fiction masterpiece, 'Dune' follows Paul Atreides, heir to a noble family, as he navigates political intrigue and mystical prophecy on the desert planet Arrakis. The planet is home to the valuable spice melange, coveted by warring factions. As Paul uncovers his destiny, he becomes a key player in a battle that will shape the universe. Combining elements of adventure, religion, and ecology, Frank Herbert’s epic novel is an intricate tale of power, survival, and destiny. It remains a defining work in science fiction literature, influencing countless stories and adaptations.",
        rating: 4.7
    },
    {
        id: 22,
        category: "Science Fiction",
        title: "Neuromancer",
        author: "William Gibson",
        image: "https://covers.openlibrary.org/b/id/11938105-L.jpg",
        description: "A defining novel of the cyberpunk genre, 'Neuromancer' introduces a futuristic world where artificial intelligence, cybernetics, and virtual reality intertwine. Case, a washed-up computer hacker, is recruited for a high-stakes heist that leads him deep into cyberspace. As he uncovers hidden secrets, he faces a reality-altering conspiracy. William Gibson’s visionary novel explores themes of technology, human-machine fusion, and corporate control. With its fast-paced narrative and cyber-noir atmosphere, 'Neuromancer' remains a seminal work in speculative fiction, inspiring the concept of cyberspace and influencing countless sci-fi films, books, and games.",
        rating: 4.5
    },
    {
        id: 23,
        category: "Science Fiction",
        title: "Foundation",
        author: "Isaac Asimov",
        image: "https://covers.openlibrary.org/b/id/11172243-L.jpg",
        description: "Isaac Asimov’s 'Foundation' is a science fiction classic that follows mathematician Hari Seldon, who predicts the fall of the Galactic Empire through his revolutionary field of psychohistory. To preserve knowledge and civilization, he establishes the Foundation, a secret organization designed to shorten the impending dark age. As empires rise and fall, political intrigue and technological advances shape humanity’s future. This groundbreaking novel explores themes of destiny, power, and science’s role in shaping society. It remains one of the most influential sci-fi works, inspiring generations of readers and writers.",
        rating: 4.8
    }
];




const bookSlice = createSlice({
    name: "book",
    initialState:{
        books: initialBooks
    },
    reducers:{
        addBook:(state, action)=>{
            state.books.push(action.payload);
        }
    }
})

export const{addBook} = bookSlice.actions;
export default bookSlice.reducer;