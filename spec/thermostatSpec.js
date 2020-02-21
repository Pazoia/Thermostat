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

  it('increases temp with up function', () => {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases temp with down function', () => {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('set minimum temp to 10', () => {
    thermostat.temperature = 10;
    thermostat.down();
    expect(thermostat.temperature).toEqual(10);
  });

  it('set max temp to 25 if power saving on', () => {
    thermostat.temperature = 25;
    thermostat.powerSavingOn();
    expect(thermostat.temperature).toEqual(25);
  });
});
