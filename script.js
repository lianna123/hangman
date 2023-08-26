const arr = [
  "hot", "red", "tip", "she", "cry", // 3
  "lit", "toe", "bat", "sat", "hit",
  "zen", "yum", "bay", "run", "dip",
  "post", "coat", "seas", "clam", "dump", // 4
  "crab", "trim", "sick", "star", "pour",
  "bath", "tree", "stay", "late", "hint",
  "blue", "true", "gill", "pour", "feel",
  "coast", "never", "stray", "ember", "mouse", // 5
  "arrow", "jewel", "paint", "grass", "yeast",
  "trait", "talon", "press", "quick", "quiet",
  "eight", "green", "cloud", "cease", "still",
  "entry", "habit", "enter", "quill", "cramp",
  "yellow", "sunlit", "pretty", "costly", "butter", // 6
  "salute", "corner", "manual", "emblem", "forest",
  "cobweb", "though", "styles", "treaty", "comply",
  "silent", "untidy", "evolve", "rabbit", "unison",
  "talent", "flower", "flimsy", "winter", "baffle",
  "puzzle", "sacred", "strict", "tryout", "canope",
  "problem", "install", "observe", "tedious", "penalty", // 7
  "control", "realize", "impress", "elevate", "stumble",
  "stealth", "printer", "destroy", "mindset", "corners",
  "chicken", "breathe", "nemesis", "volcano", "obstain",
  "empress", "western", "tonight", "magenta", "precise",
  "publish", "abolish", "bananas", "resting", "timeout",
  "painful", "petrify", "violent", "selfish", "respect",
  "dreadful", "painless", "creation", "aspiring", "question", // 8
  "porridge", "inclined", "mermaids", "postpone", "backward",
  "denounce", "disclose", "farmland", "emphasis", "terrific",
  "supposed", "announce", "reclaims", "portrait", "equality",
  "hesitate", "necklace", "bracelet", "multiply", "adhesive",
  "elephant", "purplish", "unstable", "calamity", "astonish",
  "converse", "acronyms", "antennae", "deniably", "learning",
  "metallic", "probable", "entitled", "esteemed", "loveable",
  "intention", "terrified", "subsitute", "institute", "shoulders", // 9
  "talkative", "wonderous", "horrified", "interests", "vivacious",
  "energetic", "technical", "laborious", "punctuate", "entertain",
  "translate", "frustrate", "detriment", "stability", "mentality",
  "intricate", "unnerving", "everybody", "academics", "appealing",
  "quadruple", "quintuple", "moderated", "sparkling", "beautiful",
  "butterfly", "pineapple", "tentacles", "perforate", "attribute",
  "galaxical", "merciless", "chemistry", "highlight", "sticklers",
  "footballs", "asparagus", "showering", "skydiving", "malicious",
  "hysterical", "reasonable", "illiterate", "harmonious", "enterprise", // 
10
  "nutritious", "adolescent", "equivalent", "undeniable", "grapefruit",
  "rewatching", "tablespoon", "metronomes", "electronic", "apostrophe",
  "scientists", "mechanical", "instituted", "constitute", "milleniums", 
  "chronology", "indefinite", "psychology", "collective", "rampageous", 
  "boisterous", "attentions", "historical", "inaccurate", "stupendous", 
  "unachieved", "republican", "democratic", "individual", "influencer",
  "connection", "positivity", "negativity", "misleading", "difference",
  "difficulty", "memorizing", "mesmerized", "alphabetic", "rebellious", 
  "calculator", "delinquent", "tremendous", "violations", "femininity"
];
let word = arr[(Math.floor(Math.random() * arr.length))];
document.getElementById('pic').src = "hangman0.png";
let wr = "";
let str = "";
for (let i = 0; i < word.length; i++) {
  str += "_ ";
}
document.getElementById("word").innerHTML = str;

function newword() {
  word = arr[(Math.floor(Math.random() * arr.length))];
  str = "";
  wr = "";
  document.getElementById("message").innerHTML = "";
  document.getElementById("wrong").innerHTML = wr;
  document.getElementById('pic').src = "hangman0.png";
  for (let i = 0; i < word.length; i++) {
    str += "_ ";
  }
  document.getElementById("word").innerHTML = str;
}

function letter(lett) {
  let inside = false;
  for (let i = 0; i < word.length; i++) {
    if (lett == word.charAt(i)) {
      inside = true;
      let part1 = str.substr(0, 2 * i);
      let part2 = str.substr(2 * i + 1);
      str = part1 + lett + part2;
      document.getElementById("word").innerHTML = str;
    }
  }
  let finished = true;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "_") {
      finished = false;
    }
  }
  if (finished) {
    document.getElementById('message').innerHTML = "congrats!";
  }
  if (!inside) {
    let finish = true;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == "_") {
        finish = false;
      }
    }
    if (!finish) {
      let chosen = false;
      for (let i = 0; i < wr.length; i++) {
        if (wr.charAt(i) == "," || wr.charAt(i) == " ") {
          continue;
        }
        if (wr.charAt(i) == lett) {
          chosen = true;
        }
      }
      if (!chosen) {
        if (wr != "") {
          wr += ", ";
        }
        wr += lett;
        document.getElementById("wrong").innerHTML = wr;
        change();
      }
    }
  }
}

function change() {
  let pic = document.getElementById('pic').src;
  if (pic == "https://lianna123.github.io/hangman/hangman0.png") {
    document.getElementById('pic').src = "hangman1.png";
  } else if (pic == "https://lianna123.github.io/hangman/hangman1.png") {
    document.getElementById('pic').src = "hangman2.png";
  } else if (pic == "https://lianna123.github.io/hangman/hangman2.png") {
    document.getElementById('pic').src = "hangman3.png";
  } else if (pic == "https://lianna123.github.io/hangman/hangman3.png") {
    document.getElementById('pic').src = "hangman4.png";
  } else if (pic == "https://lianna123.github.io/hangman/hangman4.png") {
    document.getElementById('pic').src = "hangman5.png";
  } else if (pic == "https://lianna123.github.io/hangman/hangman5.png") {
    document.getElementById('pic').src = "hangman6.png";
    document.getElementById('message').innerHTML = "sorry, the word was";
    let temp = "";
    for (let i = 0; i < word.length; i++) {
      temp += word.charAt(i);
      temp += " ";
    }
    document.getElementById('word').innerHTML = temp;
    str = temp;
  }
}
