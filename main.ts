//% color="#AA278D" weight=100 icon="\uf1ad" block="Basic Blocks"
namespace hello {
    //% block="Test Block"
    export function helloWorld() {
        serial.writeLine("Hello");
        led.toggle(0, 0);
    }
}