/**
 * Created by Jamal on 17/1/15.
 */

var zombie = {name: "Bub", film: "Day of the Dead"}

_.keys(zombie)

_.values(zombie)

_.pluck([
  {title: "Chtton", author: "Anthony"},
  {title: "Grendel", author: "Gardner"},
  {title: "After Dark", author: "author"}
])

_.pairs(zombie)

_.object(_.map(_.pairs(zombie), function (pair) {
  return [pair[0].toUpperCase(), pair[1]]
}))

_.invert(zombie)

/*_.invert = function(obj) {
 var result = {};
 var keys = _.keys(obj);
 for (var i = 0, length = keys.length; i < length; i++) {
 result[obj[keys[i]]] = keys[i];
 }
 return result;
 };*/

_.keys(_.invert({a: 138, b: 9}))

_.pluck(_.map([
  {title: "Chtton", author: "Anthony"},
  {title: "Grendel", author: "Gardner"},
  {title: "After Dark"}
], function (obj) {
  return _.defaults(obj, {author: "unknown"})
}), 'author');

var person = {name: "Romy", token: "j3983ij", password: "tigress"};

var info = _.omit(person, 'token', 'password')

info;

var creds = _.pick(person, 'token', 'password')
creds;

