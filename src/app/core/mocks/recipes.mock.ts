import { Recipe } from '../../../gql/graphql';

export const recipes: any[] = [
    {
        id: 1,
        title: 'Чипотта Аргентина Мокачино',
        cookingMinutes: 125,
        image: 'https://spoonacular.com/recipeImages/715544-312x231.jpg',
        vegetarian: false,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: true,
        cheap: true,
        veryPopular: true,
        ingredients: [
            {
                id: 234,
                name: 'Морковь'
            },
            {
                id: 235,
                name: 'Молоко'
            },
            {
                id: 235,
                name: 'Яйцо'
            },
            {
                id: 235,
                name: 'Зелёный перец'
            },
            {
                id: 235,
                name: 'Карамель'
            },
        ],
        nutrition: 234,
        nutrients: [{
            name: 'каллорийность',
            amount: 250,
            unit: 'ккал',
        },
            {
                name: 'белки',
                amount: 17,
                unit: 'грамм',
            },
            {
                name: 'жиры',
                amount: 11,
                unit: 'грамм',
            },
            {
                name: 'углеводы',
                amount: 3,
                unit: 'грамм',
            },
        ],
        steps: ['Вскипятите воду в большой кастрюле и сварите пасту до состояния а' +
        'ль денте. Обычно для этого нужно варить ее на минуту меньше, чем указано на пачке.',
            'Пока паста варится, растопите на сковороде масло и обжарьте на нем мелко нарезанные лук, чеснок и бе' +
            'кон. До мягкости и до отчетливого чесночного и жаренобеконного запаха.',
            'Снимите сковороду с огня и в глубокой миске взбейте четыре яичных жел' +
            'тка со сливками и тертым пармезаном. Посолите и поперчите смесь, еще раз взбейте.',
            'В готовые спагетти вывалите обжаренные с луком и чесноком кусочки бекона. Влейте смесь сливок, желтков и пармезана, перемешайте. И с' +
            'разу подавайте, посыпав свеженатертым сыром и черным молотым перцем.']
    },
    {
        id: 2,
        title: 'Чаукатта Моргино кросс',
        cookingMinutes: 210,
        image: 'https://spoonacular.com/recipeImages/715455-312x231.jpg',
        vegetarian: false,
        vegan: true,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: true,
        cheap: true,
        veryPopular: true,
        ingredients: [
            {
                id: 285,
                name: 'Помидор'
            },
            {
                id: 23,
                name: 'Капуста'
            },
            {
                id: 2123,
                name: 'Хлеб'
            },
            {
                id: 1234,
                name: 'Печенье'
            },
            {
                id: 21349,
                name: 'Мука'
            },
        ],
        nutrition: 567
    },
    {
        id: 3,
        title: 'Орауи Рикко ротто',
        cookingMinutes: 45,
        image: 'https://spoonacular.com/recipeImages/716431-312x231.jpg',
        vegetarian: true,
        vegan: true,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: true,
        cheap: true,
        veryPopular: true,
        ingredients: [
            {
                id: 11,
                name: 'Сосиски'
            },
            {
                id: 235,
                name: 'Молоко'
            },
            {
                id: 235,
                name: 'Хлеб'
            },
        ],
        nutrition: 234
    },
    {
        id: 4,
        title: 'Чогонно курио потто суп по бабушкиному рецепту',
        cookingMinutes: 12,
        image: 'https://spoonacular.com/recipeImages/715381-312x231.jpg',
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: true,
        cheap: true,
        veryPopular: true,
        ingredients: [
            {
                id: 45,
                name: 'Лапша'
            },
            {
                id: 674,
                name: 'Картофель'
            },
            {
                id: 9342,
                name: 'Сливочное масло'
            },
            {
                id: 429,
                name: 'Любовь'
            },
            {
                id: 9814,
                name: 'Ненависть'
            },
            {
                id: 235,
                name: 'Хлеб'
            },
            {
                id: 235,
                name: 'Красный перец'
            },
            {
                id: 235,
                name: 'Пудинг'
            },
        ],
        nutrition: 700
    },
    {
        id: 1,
        title: 'Чипотта Аргентина Мокачино',
        cookingMinutes: 125,
        image: 'https://spoonacular.com/recipeImages/715544-312x231.jpg',
        vegetarian: false,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: true,
        cheap: true,
        veryPopular: true,
        ingredients: [
            {
                id: 234,
                name: 'Морковь'
            },
            {
                id: 235,
                name: 'Молоко'
            },
            {
                id: 235,
                name: 'Яйцо'
            },
            {
                id: 235,
                name: 'Зелёный перец'
            },
            {
                id: 235,
                name: 'Карамель'
            },
        ],
        nutrition: 234
    },
    {
        id: 2,
        title: 'Чаукатта Моргино кросс',
        cookingMinutes: 210,
        image: 'https://spoonacular.com/recipeImages/715455-312x231.jpg',
        vegetarian: false,
        vegan: true,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: true,
        cheap: true,
        veryPopular: true,
        ingredients: [
            {
                id: 285,
                name: 'Помидор'
            },
            {
                id: 23,
                name: 'Капуста'
            },
            {
                id: 2123,
                name: 'Хлеб'
            },
            {
                id: 1234,
                name: 'Печенье'
            },
            {
                id: 21349,
                name: 'Мука'
            },
        ],
        nutrition: 567
    },
    {
        id: 3,
        title: 'Орауи Рикко ротто',
        cookingMinutes: 45,
        image: 'https://spoonacular.com/recipeImages/716431-312x231.jpg',
        vegetarian: true,
        vegan: true,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: true,
        cheap: true,
        veryPopular: true,
        ingredients: [
            {
                id: 11,
                name: 'Сосиски'
            },
            {
                id: 235,
                name: 'Молоко'
            },
            {
                id: 235,
                name: 'Хлеб'
            },
        ],
        nutrition: 234
    },
    {
        id: 4,
        title: 'Чогонно курио потто суп по бабушкиному рецепту',
        cookingMinutes: 12,
        image: 'https://spoonacular.com/recipeImages/715381-312x231.jpg',
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: true,
        cheap: true,
        veryPopular: true,
        ingredients: [
            {
                id: 45,
                name: 'Лапша'
            },
            {
                id: 674,
                name: 'Картофель'
            },
            {
                id: 9342,
                name: 'Сливочное масло'
            },
            {
                id: 429,
                name: 'Любовь'
            },
            {
                id: 9814,
                name: 'Ненависть'
            },
            {
                id: 235,
                name: 'Хлеб'
            },
            {
                id: 235,
                name: 'Красный перец'
            },
            {
                id: 235,
                name: 'Пудинг'
            },
        ],
        nutrition: 700
    },
    {
        id: 3,
        title: 'Орауи Рикко ротто',
        cookingMinutes: 45,
        image: 'https://spoonacular.com/recipeImages/716431-312x231.jpg',
        vegetarian: true,
        vegan: true,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: true,
        cheap: true,
        veryPopular: true,
        ingredients: [
            {
                id: 11,
                name: 'Сосиски'
            },
            {
                id: 235,
                name: 'Молоко'
            },
            {
                id: 235,
                name: 'Хлеб'
            },
        ],
        nutrition: 234
    },
    {
        id: 4,
        title: 'Чогонно курио потто суп по бабушкиному рецепту',
        cookingMinutes: 12,
        image: 'https://spoonacular.com/recipeImages/715381-312x231.jpg',
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: true,
        cheap: true,
        veryPopular: true,
        ingredients: [
            {
                id: 45,
                name: 'Лапша'
            },
            {
                id: 674,
                name: 'Картофель'
            },
            {
                id: 9342,
                name: 'Сливочное масло'
            },
            {
                id: 429,
                name: 'Любовь'
            },
            {
                id: 9814,
                name: 'Ненависть'
            },
            {
                id: 235,
                name: 'Хлеб'
            },
            {
                id: 235,
                name: 'Красный перец'
            },
            {
                id: 235,
                name: 'Пудинг'
            },
        ],
        nutrition: 700
    }
];
