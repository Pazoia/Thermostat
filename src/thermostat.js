/* 'use strict' 
--> this make the testing more vigorous, 
    there are certain allowances in non strict mode that will not throw errors.  
*/
'use strict';

function Thermostat() {
  this.MAX_TEMP_POWER_SAVING_ON = 25;
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
};

Thermostat.prototype.up = function () {
  this.temperature ++;
};

Thermostat.prototype.down = function () {
  if (this.temperature > this.MINIMUM_TEMPERATURE)
    this.temperature --;
};

Thermostat.prototype.powerSavingOn = function () {
  if (this.temperature < this.MAX_TEMP_POWER_SAVING_ON)
    this.temperature ++;
};