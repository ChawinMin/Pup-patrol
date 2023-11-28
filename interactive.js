var facts = [
    'Shiba Inus are sometimes considered the drama queens of the dog world because of their weird vocalizations. They often let out a human-like wail when they are upset.', 
    'A dog\'s nose print is unique, much like a person\'s fingerprint.'
]

function newFact() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('bottom').innerHTML = facts[randomNumber];
}