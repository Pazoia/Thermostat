/* 'use strict' 
--> this make the testing more vigorous, 
    there are certain allowances in non strict mode that will not throw errors.  
*/
'use strict';

function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.up = function () {
  this.temperature ++;
};

Thermostat.prototype.down = function () {
  this.temperature --;
};