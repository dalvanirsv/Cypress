it('sem testes, ainda',() =>{})

const getsomething = () => 10;

const system = () => {
    console.log('init');
    const something = getsomething();
    console.log(`something is ${something}`);
    console.log('end')

}

system();