describe("to verify calculator.js file using nested suites",function() { 
    it('should return the addition result', function(){
        expect(add(1,1)).toEqual(2);
    })

    it('test element creation', function(){
        createElementJs();
        const test = document.querySelector('.blabla');
        expect(test).not.toBeNull()
    })
});