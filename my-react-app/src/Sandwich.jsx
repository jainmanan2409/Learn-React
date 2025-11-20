function Sandwich() {
    const sand1 = 'Cheese Sandwich';
    const sand2 = 'Peri Peri Sandwich';
    return(
        <ul>
            <li>Garlic Sandwich</li>
            <li>{sand1}</li>
            <li>{sand2.toUpperCase()}</li>
        </ul>
    );
}

export default Sandwich