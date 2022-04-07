export const changeColor = () => {
    const cursor = document.querySelector('.cursor');
    const followCursor = document.querySelector('.followCursor');
    cursor.style.backgroundColor = 'black';
    followCursor.style.border = '2px solid black';
};

export const backColor = () => {
    const cursor = document.querySelector('.cursor');
    const followCursor = document.querySelector('.followCursor');
    cursor.style.backgroundColor = 'white';
    followCursor.style.border = '2px solid white';
};