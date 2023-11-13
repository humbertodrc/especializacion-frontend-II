# testing-cl-dh-jest


const text = "Hola Mundo";
test('Debe contener Mundo', ()=>{
    expect(text).toMach(/Mundo/);
})