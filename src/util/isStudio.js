const toBePainted = [
    '                    +  +                    \n' +
    '                +++++  +++++                \n' +
    '            +++++++++  +++++++++            \n' +
    '        +++++++++++++  +++++++++++ +        \n' +
    '    +++++++++++++++++  +++++++     +++++    \n' +
    '+++++++++++++++++++++  +++         +++++++++\n' +
    '+++++++++++++++++++++              +++++++++\n' +
    '++++++++++++++++++                 +++++++++\n' +
    '++++++++++++++                     +++++++++\n' +
    '++++++++++++++                     +++++++++\n' +
    '++++++++++++++                     +++++++++\n' +
    '++++++++++++++                     +++++++++\n' +
    '++++++++++++++                     +++++++++\n' +
    '+++++++++    +                     +++++++++\n' +
    '+++++        +                +        +++++\n' +
    '+            +            +                +\n' +
    '             +        +                     \n' +
    '             +    +                         \n' +
    '             +                              \n'

];
const config = 'color: #000000';

export function paintedEggShell () {
    try {
        toBePainted.forEach(function (item, index) {
            console.log('%c%s', config, `${item}${' '.repeat(Math.floor(Math.random() * 10))}`);
            if (index === toBePainted.length - 1) {
                console.log('%cCreated By ITStudio', `${config}; font-size: 18px`);
            }
        });
        // console.log('%c%s', config, 'Contact us: http://www.itstudio.club 中国海洋大学爱特工作室');
    } catch (e) {
        console.log(e);
    }
}
