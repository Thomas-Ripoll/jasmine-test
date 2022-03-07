describe("to verify calculator.js file using nested suites",function() { 

    it('test element textContent', function(){
        changeText();
        const test = document.querySelector('.myelement');
        expect(test.textContent).toEqual('after modification')
    })
});