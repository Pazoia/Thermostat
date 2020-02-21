/* 'use strict' 
--> this make the testing more vigorous, 
    there are certain allowances in non strict mode that will not throw errors.
*/
'use strict';

describe('Thermostat', () => {
  
  var thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature with up function', () => {
    thermostat.up()
    expect(thermostat.temperature).toEqual(21);
  });
});
