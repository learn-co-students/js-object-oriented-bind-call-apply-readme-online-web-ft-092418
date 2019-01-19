

function Sandwich(bread, ingredients, cut) {
    this.bread = bread 
    this.ingredients = ingredients 
    this.cut = cut 
}

const blt = new Sandwich(
    'White',
    ['bacon', 'lettuce', 'tomat', 'mayo'],
    'rectangle'
)

const reuben = new Sandwich(
    'rye',
    ['beef', 'kraut', 'swiss', 'dressing'],
    'diagonal'
)

const pbj = {
    name: 'PB&J',
    bread: 'White',
    ingredients: ['Peanut Butter', 'Jelly'],
    cut: 'Triangles',
    serve: function() {
        console.log(`Here's your ${this.name}. Enjoy!`);
    }
};

pbj.serve()