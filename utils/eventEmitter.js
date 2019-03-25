function EventEmitter() {
  this.eventTable = {}
}

EventEmitter.prototype.check = function(event, cb) {
  if (typeof event !== 'string')
    throw new TypeError("'event' must be a string!")

  if (typeof cb !== 'function')
    throw new TypeError("'cb must be a function!'")

  if (!this.eventTable[event])
    this.eventTable[event] = {on: [], once: []}
}

EventEmitter.prototype.on = function(event, cb) {
  this.check(event, cb)
  this.eventTable[event].on.push(cb)
}

EventEmitter.prototype.once = function(event, cb) {
  this.check(event, cb)
  this.eventTable[event].once.push(cb)
}

EventEmitter.prototype.emit = function() {
  const [event, ...args] = arguments
  const listener = this.eventTable[event] || {on: [], once: []}

  listener.on.forEach(cb => cb(...args))
  listener.once.forEach(cb => cb(...args))

  if (listener.once.length > 0)
    listener.once = []
}

export default EventEmitter