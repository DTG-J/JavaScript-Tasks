function charactersInRange (char1, char2){
        const startCode = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
        const endCode = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

        let result = '';
      
        for (let code = startCode + 1; code < endCode; code++) { // +1 and < to exclude boundaries
          result+=(String.fromCharCode(code)+' ');
        }
        return result.trim();
      }
      
console.log (charactersInRange ('a', 'd') ) //	b c
console.log (charactersInRange ('#', ':') ) //	$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
console.log (charactersInRange ('C', '#') ) //	$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B


