const Room = function(area, isPainted){
    this.area = area
    this.isPainted = false
}

Room.prototype.painted = function() {
    this.isPainted = true
}

module.exports = Room;