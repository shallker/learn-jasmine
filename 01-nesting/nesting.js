describe('app', function () {
    beforeEach(function () {
        console.log('beforeEach');
    });

    afterEach(function () {
        console.log('afterEach');
    });

    it('should be app', function () {
        expect('app').toEqual('app');
    });

    describe('app.module', function () {
        it('should be app.module', function () {
            expect('app.module').toEqual('app.module');
        });
    });

});
