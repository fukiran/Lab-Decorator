const assert = require('assert');
const Room = require('../room.js');

describe('Room', function() {
    let room;

    beforeEach(function() {
        room = new Room(20, false)
    });

    it('it should have a paintable area', function() {
        const actual = room.area;
        assert.strictEqual(actual, 20);
    });

    it('should start not painted', function() {
        const actual = room.isPainted;
        assert.equal(actual, false);
    });
    it('should paint the room', function() {
        room.painted();
        const actual = true
        assert.strictEqual(actual, room.isPainted)
    });
});