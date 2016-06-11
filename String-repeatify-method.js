String.prototype.repeatify = function(timesToRepeat) {
   var string = this;

   for (var i = 1; i < timesToRepeat; i++) {
      string += this;
   }

   return string;
};


/* 
 * TIPS:
 *
 * 1. First line can also be written as: 
 * 'String.prototype.repeatify = String.prototype.repeatify || function(timesToRepeat)'
 * in case the proptotype method repeatify already exists.
 */
