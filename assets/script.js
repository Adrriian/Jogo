const char = createKnight('Adrian');
const monster = createBigMosnter();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
);