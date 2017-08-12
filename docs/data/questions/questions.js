const questions = require('./questions.json');
const answers = require('./questions.json');

export const questionArrayBuilder = function (qs, as) {
  const result = qs;

  result.forEach( (q, i) => {
    let id = q.id;
    result[i].answers = [];

    as.forEach( a => {
      if (id === a.question_id) {
        result[i].answers.push(a);
      }
    }

  );
  });

  return result;
};

export const questionObjectBuilder = function (qs, as) {
  let qAndA = {};

  qs.forEach( q => {
    let id = q.id;
    qAndA[id] = q;
    qAndA[id].answers = [];

    as.forEach( a => {
      if (id === a.question_id) {
        qAndA[id].answers.push(a);
      }
    }

  );
  });

  return qAndA;
};



console.log(questionArrayBuilder(questions, answers));


//
// export const questions = [
//   {
//     "id": 1,
//     "body": "Hot or Cold",
//     "type": "options"
//   },
//   {
//     "id": 101,
//     "body": "Sandwiches, Salad, or Sushi?",
//     "type": "options"
//   },
//   {
//     "id": 102,
//     "body": "Soup?",
//     "type": "bool"
//   },
//   {
//     "id": 2,
//     "body": "European/American, Asian, Other?",
//     "type": "options"
//   },
//   {
//     "id": 201,
//     "body": "Latin American,  European,  American?",
//     "type": "options"
//   },
//   {
//     "id": 20101,
//     "body": "Mexican, South American, Other?",
//     "type": "options"
//   },
//   {
//     "id": 2010101,
//     "body": "Brazilian?",
//     "type": "bool"
//   },
//   {
//     "id": 20102,
//     "body": "Mediterranean?",
//     "type": "bool"
//   },
//   {
//     "id": 2010201,
//     "body": "Greek?",
//     "type": "bool"
//   },
//   {
//     "id": 20103,
//     "body": "French or Italian?",
//     "type": "options"
//   },
//   {
//     "id": 20104,
//     "body": "Burgers or Wings?",
//     "type": "options"
//   },
//   {
//     "id": 202,
//     "body": "Chinese, Japanese, other?",
//     "type": "options"
//   },
//   {
//     "id": 20201,
//     "body": "Ramen or Sushi?",
//     "type": "options"
//   },
//   {
//     "id": 20203,
//     "body": "Thai?",
//     "type": "bool"
//   },
//   {
//     "id": 3,
//     "body": "Meal or Snack?",
//     "type": "options"
//   },
//   {
//     "id": 301,
//     "body": "Dim-sum?",
//     "type": "bool"
//   },
//   {
//     "id": 302,
//     "body": "Tapas?",
//     "type": "bool"
//   },
//   {
//     "id": 4,
//     "body": "Sweet or Savory?",
//     "type": "options"
//   },
//   {
//     "id": 5,
//     "body": "Spicy?",
//     "type": "bool"
//   },
//   {
//     "id": 6,
//     "body": "Noodles?",
//     "type": "bool"
//   },
//   {
//     "id": 7,
//     "body": "Vegetarian-friendly?",
//     "type": "bool"
//   },
//   {
//     "id": 8,
//     "body": "Healthy or Comfort?",
//     "type": "options"
//   },
//   {
//     "id": 9,
//     "body": "Meat, Carbs, or Veggies?",
//     "type": "options"
//   },
//   {
//     "id": 901,
//     "body": "Chicken, Red Meat, Fish",
//     "type": "options"
//   },
//   {
//     "id": 902,
//     "body": "Pasta, Noodles, or Rice-bowl? ",
//     "type": "options"
//   },
//   {
//     "id": 10,
//     "body": "Breakfast/brunch, Lunch, Dinner?",
//     "type": "options"
//   },
//   {
//     "id": 1001,
//     "body": "Breakfast or Brunch?",
//     "type": "options"
//   },
//   {
//     "id": 11,
//     "body": "Kosher, Halal, No Preference?",
//     "type": "options"
//   },
//   {
//     "id": 12,
//     "body": "Mexican?",
//     "type": "bool"
//   },
//   {
//     "id": 13,
//     "body": "Pizza?",
//     "type": "bool"
//   },
//   {
//     "id": 14,
//     "body": "Quick?",
//     "type": "bool"
//   }
// ];
//
// export const answers = [
//   {
//     "id": 1,
//     "question_id": 1,
//     "text": "Hot",
//     "q_string_add_on": "hot",
//     "category_ids": ""
//   },
//   {
//     "id": 2,
//     "question_id": 1,
//     "text": "Cold",
//     "q_string_add_on": "",
//     "category_ids": ""
//   },
//   {
//     "id": 3,
//     "question_id": 101,
//     "text": "Sandwiches",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1c5941735"
//   },
//   {
//     "id": 4,
//     "question_id": 101,
//     "text": "Salad",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1bd941735"
//   },
//   {
//     "id": 5,
//     "question_id": 101,
//     "text": "Sushi",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1d2941735"
//   },
//   {
//     "id": 6,
//     "question_id": 102,
//     "text": "Soup",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1dd931735"
//   },
//   {
//     "id": 7,
//     "question_id": 2,
//     "text": "European/American",
//     "q_string_add_on": "",
//     "category_ids": ""
//   },
//   {
//     "id": 8,
//     "question_id": 2,
//     "text": "Asian",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d142941735"
//   },
//   {
//     "id": 9,
//     "question_id": 201,
//     "text": "Latin American",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1be941735"
//   },
//   {
//     "id": 10,
//     "question_id": 201,
//     "text": "European",
//     "q_string_add_on": "european",
//     "category_ids": ""
//   },
//   {
//     "id": 11,
//     "question_id": 201,
//     "text": "American",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d14e941735"
//   },
//   {
//     "id": 12,
//     "question_id": 20101,
//     "text": "Mexican",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1c1941735"
//   },
//   {
//     "id": 13,
//     "question_id": 20101,
//     "text": "South American",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1cd941735"
//   },
//   {
//     "id": 14,
//     "question_id": 2010101,
//     "text": "Brazilian",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d16b941735"
//   },
//   {
//     "id": 15,
//     "question_id": 20102,
//     "text": "Mediterranean",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1c0941735"
//   },
//   {
//     "id": 16,
//     "question_id": 2010201,
//     "text": "Greek",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d10e941735"
//   },
//   {
//     "id": 17,
//     "question_id": 20103,
//     "text": "French",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d10c941735"
//   },
//   {
//     "id": 18,
//     "question_id": 20103,
//     "text": "Italian",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d110941735"
//   },
//   {
//     "id": 19,
//     "question_id": 20104,
//     "text": "Burgers",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d16c941735"
//   },
//   {
//     "id": 20,
//     "question_id": 20104,
//     "text": "Wings",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d14c941735"
//   },
//   {
//     "id": 21,
//     "question_id": 202,
//     "text": "Chineese",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d145941735"
//   },
//   {
//     "id": 22,
//     "question_id": 202,
//     "text": "Japanese",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d111941735"
//   },
//   {
//     "id": 23,
//     "question_id": 20201,
//     "text": "Ramen",
//     "q_string_add_on": "",
//     "category_ids": "55a59bace4b013909087cb24"
//   },
//   {
//     "id": 24,
//     "question_id": 20201,
//     "text": "Sushi",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1d2941735"
//   },
//   {
//     "id": 25,
//     "question_id": 20203,
//     "text": "Thai",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d149941735"
//   },
//   {
//     "id": 26,
//     "question_id": 3,
//     "text": "Meal",
//     "q_string_add_on": "",
//     "category_ids": ""
//   },
//   {
//     "id": 27,
//     "question_id": 3,
//     "text": "Snack",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1c7941735"
//   },
//   {
//     "id": 28,
//     "question_id": 301,
//     "text": "Dim-sum",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1f5931735"
//   },
//   {
//     "id": 29,
//     "question_id": 302,
//     "text": "Tapas",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1db931735"
//   },
//   {
//     "id": 30,
//     "question_id": 4,
//     "text": "Sweet",
//     "q_string_add_on": "sweets, desserts",
//     "category_ids": ""
//   },
//   {
//     "id": 31,
//     "question_id": 4,
//     "text": "Savory",
//     "q_string_add_on": "savory",
//     "category_ids": ""
//   },
//   {
//     "id": 32,
//     "question_id": 5,
//     "text": "Spicy",
//     "q_string_add_on": "spicy",
//     "category_ids": ""
//   },
//   {
//     "id": 33,
//     "question_id": 6,
//     "text": "Noodles",
//     "q_string_add_on": "noodles",
//     "category_ids": ""
//   },
//   {
//     "id": 34,
//     "question_id": 7,
//     "text": "Vegetarian",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1d3941735"
//   },
//   {
//     "id": 35,
//     "question_id": 8,
//     "text": "Healthy",
//     "q_string_add_on": "healthy",
//     "category_ids": ""
//   },
//   {
//     "id": 36,
//     "question_id": 8,
//     "text": "Comfort",
//     "q_string_add_on": "",
//     "category_ids": "52e81612bcbc57f1066b7a00"
//   },
//   {
//     "id": 37,
//     "question_id": 9,
//     "text": "Meat",
//     "q_string_add_on": "meat",
//     "category_ids": ""
//   },
//   {
//     "id": 38,
//     "question_id": 9,
//     "text": "Carbs",
//     "q_string_add_on": "carbs",
//     "category_ids": ""
//   },
//   {
//     "id": 39,
//     "question_id": 9,
//     "text": "Veggies",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1d3941735"
//   },
//   {
//     "id": 40,
//     "question_id": 901,
//     "text": "Chicken",
//     "q_string_add_on": "chicken",
//     "category_ids": ""
//   },
//   {
//     "id": 41,
//     "question_id": 901,
//     "text": "Red Meat",
//     "q_string_add_on": "steak",
//     "category_ids": ""
//   },
//   {
//     "id": 42,
//     "question_id": 901,
//     "text": "Fish",
//     "q_string_add_on": "fish",
//     "category_ids": ""
//   },
//   {
//     "id": 43,
//     "question_id": 902,
//     "text": "Pasta",
//     "q_string_add_on": "pasta",
//     "category_ids": ""
//   },
//   {
//     "id": 44,
//     "question_id": 902,
//     "text": "Noodles",
//     "q_string_add_on": "noodles",
//     "category_ids": ""
//   },
//   {
//     "id": 45,
//     "question_id": 902,
//     "text": "Rice Bowl",
//     "q_string_add_on": "rice bowl",
//     "category_ids": ""
//   },
//   {
//     "id": 46,
//     "question_id": 10,
//     "text": "Breakfast/Brunch",
//     "q_string_add_on": "breakfast",
//     "category_ids": ""
//   },
//   {
//     "id": 47,
//     "question_id": 10,
//     "text": "Lunch",
//     "q_string_add_on": "lunch",
//     "category_ids": ""
//   },
//   {
//     "id": 48,
//     "question_id": 10,
//     "text": "Dinner",
//     "q_string_add_on": "dinner",
//     "category_ids": ""
//   },
//   {
//     "id": 49,
//     "question_id": 11,
//     "text": "Kosher",
//     "q_string_add_on": "",
//     "category_ids": "52e81612bcbc57f1066b79fc"
//   },
//   {
//     "id": 50,
//     "question_id": 11,
//     "text": "Halal",
//     "q_string_add_on": "",
//     "category_ids": "52e81612bcbc57f1066b79ff"
//   },
//   {
//     "id": 51,
//     "question_id": 12,
//     "text": "Mexican",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1c1941735"
//   },
//   {
//     "id": 52,
//     "question_id": 13,
//     "text": "Pizza",
//     "q_string_add_on": "",
//     "category_ids": "4bf58dd8d48988d1ca941735"
//   },
//   {
//     "id": 53,
//     "question_id": 14,
//     "text": "Quick",
//     "q_string_add_on": "quick",
//     "category_ids": ""
//   },
//   {
//     "id": 54,
//     "question_id": 15,
//     "text": "Poke",
//     "q_string_add_on": "poke",
//     "category_ids": ""
//   },
//   {
//     "id": "",
//     "question_id": "",
//     "text": "",
//     "q_string_add_on": "",
//     "category_ids": ""
//   },
//   {
//     "id": "",
//     "question_id": "",
//     "text": "",
//     "q_string_add_on": "",
//     "category_ids": ""
//   },
//   {
//     "id": "",
//     "question_id": "",
//     "text": "",
//     "q_string_add_on": "",
//     "category_ids": ""
//   },
//   {
//     "id": "",
//     "question_id": "",
//     "text": "",
//     "q_string_add_on": "",
//     "category_ids": ""
//   },
//   {
//     "id": "",
//     "question_id": "",
//     "text": "",
//     "q_string_add_on": "",
//     "category_ids": ""
//   },
//   {
//     "id": "",
//     "question_id": "",
//     "text": "",
//     "q_string_add_on": "",
//     "category_ids": ""
//   },
//   {
//     "id": "",
//     "question_id": "",
//     "text": "",
//     "q_string_add_on": "",
//     "category_ids": ""
//   }
// ];
