/**
 * Created by Jamal on 16/1/15.
 */

var nums = [100, 2, 25];

function div(x, y) {
  return x / y;
}

_.reduce(nums, div);

_.reduceRight(nums, div);

function allOf() {
  return _.reduceRight(arguments, function (truth, f) {
    return truth && f();
  }, true);
}

function anyOf() {
  return _.reduceRight(arguments, function (truth, f) {
    return truth || f();
  }, false);
}

function T() {
  return true
}

function F() {
  return false
}

allOf();
allOf(T, T);
allOf(T, T, T, T, F);

anyOf();
anyOf(T, T, F);
anyOf(F, F, F, F);

