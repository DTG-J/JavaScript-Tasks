// function charactersInRange (char1, char2){
//         const startCode = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
//         const endCode = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

//         let result = '';
      
//         for (let code = startCode + 1; code < endCode; code++) { // +1 and < to exclude boundaries
//           result+=(String.fromCharCode(code)+' ');
//         }
//         return result.trim();
//       }
      
function charactersInRange (char1, char2){

  const start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
  const end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

  const chars = Array.from ({length: end - start - 1}, (_, i) => String.fromCharCode (start + i + 1));
 const result = chars.reduce ((accum, char) => accum + char + ' ', '');
 return result; }
 
  
  



console.log (charactersInRange ('a', 'd') ) //	b c
console.log (charactersInRange ('#', ':') ) //	$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
console.log (charactersInRange ('C', '#') ) //	$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B 
