describe("to verify calculator.js file using nested suites",function() { 

    it('test element textContent', function(){
        // je créer le container qui simule le body de la page web... 
        const container = document.createElement('div');
        const myelement = document.createElement('div');
        myelement.classList.add('myelement');
        container.appendChild(myelement);
        // ... que je sers ensuite à la fonction
        changeText(container);
        const test = container.querySelector('.myelement');
        expect(test.textContent).toEqual('after modification');
    })
});