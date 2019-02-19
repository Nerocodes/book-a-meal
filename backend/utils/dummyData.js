export default {

    meals: [

        {
            id: 1,
            name: 'Burger',
            description: 'Chicken burger',
            price: 4000,
        },
        {
            id: 2,
            name: 'Pizza',
            description: 'Chicken pizza',
            price: 5000,
        },
        {
            id: 3,
            name: 'Cake',
            description: 'Chocolate cake',
            price: 2000,
        }

    ],

    menus: [

        {
            id: 1,
            name: 'Burgers',
            meals: [
                {
                    id: 1,
                    name: 'Burger',
                    description: 'Chicken burger',
                    price: 4000,
                }
            ],
            day: 'Monday'
        },

        {
            id: 2,
            name: 'Cakes',
            meals: [
                {
                    id: 3,
                    name: 'Cake',
                    description: 'Chocolate cake',
                    price: 2000,
                }
            ],
            day: 'Tuesday'
        }

    ]

}