export function printConsoleArt() {
  const red = 'color:#ff0000;font-weight:bold';
  console.log(
    `%c
 ████████  ██████
    ██    ██
    ██    ██   ███
    ██    ██    ██
    ██     ██████ `,
    red,
  );
  console.log(
    '%cYou opened the console. Of course you did.\n%cPress ~ on the page for a terminal, or try the Konami code. If you like poking at source, let’s talk: timgarciaa@gmail.com',
    'font-size:14px;font-weight:bold',
    'color:gray',
  );
}
