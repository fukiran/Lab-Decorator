const assert = require('assert');
const Paint = require('../paint.js');


describe('Paint', function(){
    let paint;
    beforeEach(function(){
        paint = new Paint (10, false)
    })

    it('should have number of liters', function(){
        const actual = paint.liters;
        assert.strictEqual(actual, 10)
    })
    it('should be able to check if it is starts full', function(){
        const actual = paint.isEmpty;
        assert.strictEqual(actual, false)
    })
    it('should be able to check if it is empty', function() {
        const actual = paint.checkEmpty();
        assert.strictEqual(actual, paint.isEmpty);
    })
});

