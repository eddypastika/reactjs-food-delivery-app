import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chicken Betutu',
        description: 'Balinese Chicken with traditional recipe',
        price: 17.99,
    },
    {
        id: 'm2',
        name: 'Satay Lilit',
        description: 'Balinese fish satay with coconut',
        price: 18.5,
    },
    {
        id: 'm3',
        name: 'Babi Guling',
        description: 'Balinese pork roast',
        price: 25.99,
    },
    {
        id: 'm4',
        name: 'Nasi Goreng Jawa',
        description: 'Javanese Fried Rice',
        price: 12.99,
    },
    {
        id: 'm5',
        name: 'Rendang',
        description: 'Beef from Minang',
        price: 22.99,
    },
];

const AvailableMeals = () => {
    const meals = DUMMY_MEALS.map(meal => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{meals}</ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;