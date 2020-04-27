/**
 * flowjs Example 用
 * https://flow.org/en/docs/types/
 */
const str: string = 'milkmidi';

const num: number = 9527;

const arr: string[] = ['1', '2', '3'];


type ObjectValue = {
  key: string;
  value: string;
  propertyName: ?string; // 這個屬性 key 值可能會是 null
}

const arr2: ObjectValue[] = [];

const dom:HTMLElement = document.getElementById('fakeID');


function promise():Promise<string> {
  return new Promise((resolve, reject) => {
    resolve('string');
  });
}


function acceptsMaybeString(value: ?string) {
}
acceptsMaybeString('bar'); // Works!
acceptsMaybeString(undefined); // Works!
acceptsMaybeString(null); // Works!
acceptsMaybeString(); // Works!
