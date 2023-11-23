const randFortune = () => {
    let fortunes = [
        "You will soon discover that your favorite song is actually a commercial jingle.",
        "Your next haircut will be interesting, to say the least.",
        "Beware of squirrels; they know what you did.",
        "You will find a forgotten slice of pizza under your bed, but it's too late to eat it.",
        "Tomorrow, you will accidentally use salt instead of sugar in your coffee.",
        "Your left sock will go missing after the next laundry day.",
        "You will receive an exciting email, but it's just another spam offer.",
        "The next time you sneeze, no one will say 'bless you.'",
        "Your next online order will be delivered to your neighbor by mistake.",
        "You'll find a penny on the ground, heads down - bad luck!"
    ];
    return Math.floor(Math.random() * fortunes.length);
    
}