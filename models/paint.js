const Paint = function(liters, isEmpty){
    this.liters = liters
    this.isEmpty = false
}

Paint.prototype.checkEmpty = function() {
    
    if (this.isEmpty == false) {
        return false
    } else {
        return true
    }
}

module.exports = Paint;