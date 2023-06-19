describe('Test my greet function' , function(){
    it("it should return 'Hello Fabchi RJ' when called with 'Fabchi RJ'" , function(){
        assert.equal("Hello, RJ", greet("RJ"), "this should not be true");
    });



    it("it should return 'Hello Fabchi RJ' when called with 'Fabchi RJ'" , function(){
        assert.equal("Hello, Fabchi RJ", greet("Fabchi RJ"), "this should not be true");
    });



    it("it should return 'Hello Fabchi RJ' when called with 'Fabchi RJ'" , function(){
        assert.equal("Hello, RJ", greet("RJ"), "this should not be true");
    });


    it("it should return 'Hello Fabchi RJ' when called with 'Fabchi RJ'" , function(){
        assert.equal("Hello, RJF", greet("RJF"), "this should not be true");
    });

});