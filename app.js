document.addEventListener('DOMContentLoaded', () => {
    // Card click interaction
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert(`You clicked ${card.querySelector('p').textContent}!`);
        });
    });

    // Filter by Pokémon type
    const filterByType = (type) => {
        cards.forEach(card => {
            const pokemonType = card.dataset.type;
            card.style.display = pokemonType === type || type === 'all' ? 'block' : 'none';
        });
    };

    document.querySelector('#filter').addEventListener('change', (e) => {
        filterByType(e.target.value);
    });
});
