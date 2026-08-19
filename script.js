```javascript
let myAge = 25;                           // number
let myName = "Фёдор";                       // string
let favoriteLanguage = "HTML";             // string
let favoriteLanguage2 = "CSS";            // string
let favoriteLanguage3 = "JavaScript";        // string
let skills = ["HTML", "CSS", "JavaScript", "DOM", "Git"];  // array
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}
let resume = {
    name: "Фёдор",
    age: 25,
    skills: ["HTML", "CSS", "JavaScript", "DOM", "Git"],
    role: "Frontend Developer",
};

console.log(resume.skills[0]);

function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

```