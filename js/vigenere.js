var vigenere_square = {
  "a": {"a": "A", "c": "C", "b": "B", "e": "E", "d": "D", "g": "G", "f": "F", "i": "I", "h": "H", "k": "K", "j": "J", "m": "M", "l": "L", "o": "O", "n": "N", "q": "Q", "p": "P", "s": "S", "r": "R", "u": "U", "t": "T", "w": "W", "v": "V", "y": "Y", "x": "X", "z": "Z"},
  "b": {"a": "B", "c": "D", "b": "C", "e": "F", "d": "E", "g": "H", "f": "G", "i": "J", "h": "I", "k": "L", "j": "K", "m": "N", "l": "M", "o": "P", "n": "O", "q": "R", "p": "Q", "s": "T", "r": "S", "u": "V", "t": "U", "w": "X", "v": "W", "y": "Z", "x": "Y", "z": "A"},
  "c": {"a": "C", "c": "E", "b": "D", "e": "G", "d": "F", "g": "I", "f": "H", "i": "K", "h": "J", "k": "M", "j": "L", "m": "O", "l": "N", "o": "Q", "n": "P", "q": "S", "p": "R", "s": "U", "r": "T", "u": "W", "t": "V", "w": "Y", "v": "X", "y": "A", "x": "Z", "z": "B"},
  "d": {"a": "D", "c": "F", "b": "E", "e": "H", "d": "G", "g": "J", "f": "I", "i": "L", "h": "K", "k": "N", "j": "M", "m": "P", "l": "O", "o": "R", "n": "Q", "q": "T", "p": "S", "s": "V", "r": "U", "u": "X", "t": "W", "w": "Z", "v": "Y", "y": "B", "x": "A", "z": "C"},
  "e": {"a": "E", "c": "G", "b": "F", "e": "I", "d": "H", "g": "K", "f": "J", "i": "M", "h": "L", "k": "O", "j": "N", "m": "Q", "l": "P", "o": "S", "n": "R", "q": "U", "p": "T", "s": "W", "r": "V", "u": "Y", "t": "X", "w": "A", "v": "Z", "y": "C", "x": "B", "z": "D"},
  "f": {"a": "F", "c": "H", "b": "G", "e": "J", "d": "I", "g": "L", "f": "K", "i": "N", "h": "M", "k": "P", "j": "O", "m": "R", "l": "Q", "o": "T", "n": "S", "q": "V", "p": "U", "s": "X", "r": "W", "u": "Z", "t": "Y", "w": "B", "v": "A", "y": "D", "x": "C", "z": "E"},
  "g": {"a": "G", "c": "I", "b": "H", "e": "K", "d": "J", "g": "M", "f": "L", "i": "O", "h": "N", "k": "Q", "j": "P", "m": "S", "l": "R", "o": "U", "n": "T", "q": "W", "p": "V", "s": "Y", "r": "X", "u": "A", "t": "Z", "w": "C", "v": "B", "y": "E", "x": "D", "z": "F"},
  "h": {"a": "H", "c": "J", "b": "I", "e": "L", "d": "K", "g": "N", "f": "M", "i": "P", "h": "O", "k": "R", "j": "Q", "m": "T", "l": "S", "o": "V", "n": "U", "q": "X", "p": "W", "s": "Z", "r": "Y", "u": "B", "t": "A", "w": "D", "v": "C", "y": "F", "x": "E", "z": "G"},
  "i": {"a": "I", "c": "K", "b": "J", "e": "M", "d": "L", "g": "O", "f": "N", "i": "Q", "h": "P", "k": "S", "j": "R", "m": "U", "l": "T", "o": "W", "n": "V", "q": "Y", "p": "X", "s": "A", "r": "Z", "u": "C", "t": "B", "w": "E", "v": "D", "y": "G", "x": "F", "z": "H"},
  "j": {"a": "J", "c": "L", "b": "K", "e": "N", "d": "M", "g": "P", "f": "O", "i": "R", "h": "Q", "k": "T", "j": "S", "m": "V", "l": "U", "o": "X", "n": "W", "q": "Z", "p": "Y", "s": "B", "r": "A", "u": "D", "t": "C", "w": "F", "v": "E", "y": "H", "x": "G", "z": "I"},
  "k": {"a": "K", "c": "M", "b": "L", "e": "O", "d": "N", "g": "Q", "f": "P", "i": "S", "h": "R", "k": "U", "j": "T", "m": "W", "l": "V", "o": "Y", "n": "X", "q": "A", "p": "Z", "s": "C", "r": "B", "u": "E", "t": "D", "w": "G", "v": "F", "y": "I", "x": "H", "z": "J"},
  "l": {"a": "L", "c": "N", "b": "M", "e": "P", "d": "O", "g": "R", "f": "Q", "i": "T", "h": "S", "k": "V", "j": "U", "m": "X", "l": "W", "o": "Z", "n": "Y", "q": "B", "p": "A", "s": "D", "r": "C", "u": "F", "t": "E", "w": "H", "v": "G", "y": "J", "x": "I", "z": "K"},
  "m": {"a": "M", "c": "O", "b": "N", "e": "Q", "d": "P", "g": "S", "f": "R", "i": "U", "h": "T", "k": "W", "j": "V", "m": "Y", "l": "X", "o": "A", "n": "Z", "q": "C", "p": "B", "s": "E", "r": "D", "u": "G", "t": "F", "w": "I", "v": "H", "y": "K", "x": "J", "z": "L"},
  "n": {"a": "N", "c": "P", "b": "O", "e": "R", "d": "Q", "g": "T", "f": "S", "i": "V", "h": "U", "k": "X", "j": "W", "m": "Z", "l": "Y", "o": "B", "n": "A", "q": "D", "p": "C", "s": "F", "r": "E", "u": "H", "t": "G", "w": "J", "v": "I", "y": "L", "x": "K", "z": "M"},
  "o": {"a": "O", "c": "Q", "b": "P", "e": "S", "d": "R", "g": "U", "f": "T", "i": "W", "h": "V", "k": "Y", "j": "X", "m": "A", "l": "Z", "o": "C", "n": "B", "q": "E", "p": "D", "s": "G", "r": "F", "u": "I", "t": "H", "w": "K", "v": "J", "y": "M", "x": "L", "z": "N"},
  "p": {"a": "P", "c": "R", "b": "Q", "e": "T", "d": "S", "g": "V", "f": "U", "i": "X", "h": "W", "k": "Z", "j": "Y", "m": "B", "l": "A", "o": "D", "n": "C", "q": "F", "p": "E", "s": "H", "r": "G", "u": "J", "t": "I", "w": "L", "v": "K", "y": "N", "x": "M", "z": "O"},
  "q": {"a": "Q", "c": "S", "b": "R", "e": "U", "d": "T", "g": "W", "f": "V", "i": "Y", "h": "X", "k": "A", "j": "Z", "m": "C", "l": "B", "o": "E", "n": "D", "q": "G", "p": "F", "s": "I", "r": "H", "u": "K", "t": "J", "w": "M", "v": "L", "y": "O", "x": "N", "z": "P"},
  "r": {"a": "R", "c": "T", "b": "S", "e": "V", "d": "U", "g": "X", "f": "W", "i": "Z", "h": "Y", "k": "B", "j": "A", "m": "D", "l": "C", "o": "F", "n": "E", "q": "H", "p": "G", "s": "J", "r": "I", "u": "L", "t": "K", "w": "N", "v": "M", "y": "P", "x": "O", "z": "Q"},
  "s": {"a": "S", "c": "U", "b": "T", "e": "W", "d": "V", "g": "Y", "f": "X", "i": "A", "h": "Z", "k": "C", "j": "B", "m": "E", "l": "D", "o": "G", "n": "F", "q": "I", "p": "H", "s": "K", "r": "J", "u": "M", "t": "L", "w": "O", "v": "N", "y": "Q", "x": "P", "z": "R"},
  "t": {"a": "T", "c": "V", "b": "U", "e": "X", "d": "W", "g": "Z", "f": "Y", "i": "B", "h": "A", "k": "D", "j": "C", "m": "F", "l": "E", "o": "H", "n": "G", "q": "J", "p": "I", "s": "L", "r": "K", "u": "N", "t": "M", "w": "P", "v": "O", "y": "R", "x": "Q", "z": "S"},
  "u": {"a": "U", "c": "W", "b": "V", "e": "Y", "d": "X", "g": "A", "f": "Z", "i": "C", "h": "B", "k": "E", "j": "D", "m": "G", "l": "F", "o": "I", "n": "H", "q": "K", "p": "J", "s": "M", "r": "L", "u": "O", "t": "N", "w": "Q", "v": "P", "y": "S", "x": "R", "z": "T"},
  "v": {"a": "V", "c": "X", "b": "W", "e": "Z", "d": "Y", "g": "B", "f": "A", "i": "D", "h": "C", "k": "F", "j": "E", "m": "H", "l": "G", "o": "J", "n": "I", "q": "L", "p": "K", "s": "N", "r": "M", "u": "P", "t": "O", "w": "R", "v": "Q", "y": "T", "x": "S", "z": "U"},
  "w": {"a": "W", "c": "Y", "b": "X", "e": "A", "d": "Z", "g": "C", "f": "B", "i": "E", "h": "D", "k": "G", "j": "F", "m": "I", "l": "H", "o": "K", "n": "J", "q": "M", "p": "L", "s": "O", "r": "N", "u": "Q", "t": "P", "w": "S", "v": "R", "y": "U", "x": "T", "z": "V"},
  "x": {"a": "X", "c": "Z", "b": "Y", "e": "B", "d": "A", "g": "D", "f": "C", "i": "F", "h": "E", "k": "H", "j": "G", "m": "J", "l": "I", "o": "L", "n": "K", "q": "N", "p": "M", "s": "P", "r": "O", "u": "R", "t": "Q", "w": "T", "v": "S", "y": "V", "x": "U", "z": "W"},
  "y": {"a": "Y", "c": "A", "b": "Z", "e": "C", "d": "B", "g": "E", "f": "D", "i": "G", "h": "F", "k": "I", "j": "H", "m": "K", "l": "J", "o": "M", "n": "L", "q": "O", "p": "N", "s": "Q", "r": "P", "u": "S", "t": "R", "w": "U", "v": "T", "y": "W", "x": "V", "z": "X"},
  "z": {"a": "Z", "c": "B", "b": "A", "e": "D", "d": "C", "g": "F", "f": "E", "i": "H", "h": "G", "k": "J", "j": "I", "m": "L", "l": "K", "o": "N", "n": "M", "q": "P", "p": "O", "s": "R", "r": "Q", "u": "T", "t": "S", "w": "V", "v": "U", "y": "X", "x": "W", "z": "Y"}
};

function isAlpha(aChar) {
  var myCharCode = aChar.charCodeAt(0);
 
  if(((myCharCode > 64) && (myCharCode <  91)) ||
    ((myCharCode > 96) && (myCharCode < 123))) {
      return true;
    }
   
  return false;
}
      
function generate_mask(text, key) {
  var mask = '';
  var key_position = 0;

  for(var i = 0; i < text.length; i++) {
    if(isAlpha(text[i])) {
      mask += key[key_position];
      key_position++;
      key_position = key_position % key.length; 
    } else {
      mask += ' ';
    }
  }
 
  return mask;
}

function encrypt(plain_text, mask) {
  var cipher_text = '';

  for(var i=0; i < plain_text.length; i++) {
    if(isAlpha(plain_text[i])) {
      cipher_text += vigenere_square[mask[i]][plain_text[i]];
    } else {
      cipher_text += plain_text[i];
    }
  }

  return cipher_text;
}

function decrypt(cipher_text, mask) {
  var plain_text = '';
 
  for(var i=0; i < cipher_text.length; i++) {
    if(isAlpha(cipher_text[i])) {
      row = vigenere_square[mask[i]];
      for(var k in row) {
        if(row[k] == cipher_text[i]) plain_text += k;
      }
    } else {
      plain_text += cipher_text[i];
    }
  } 
 
  return plain_text;
}

function get_sequences(alpha_string, sequence_size) {
  var sequences = [];
  
  for(var i=0; i < alpha_string.length; i++) {
    var position = i;
    var char_group = alpha_string.slice(i, i + sequence_size);
    var sequence = [position, char_group];
    sequences.push(sequence);
  } 

  return sequences;
}

function get_occurances(sequences) {
  var occurances = {};

  for(var j=0; j < sequences.length; j++) {
    if(occurances.hasOwnProperty(sequences[j][1])) {
      positions = occurances[sequences[j][1]];
      positions.push( sequences[j][0]);
      occurances[sequences[j][1]] = positions; 
    } else {
      positions = [ sequences[j][0] ];
      occurances[sequences[j][1]] = positions; 
    }
  }

  return occurances;
}

function get_occurance_distances(occurances) {
  var occurance_distances = {};

  for(key in occurances) {
    var positions = occurances[key];
    if(positions.length > 2) {
      var position_distances = [];
      for(var i=0; i < positions.length; i++) {
        if(i+1 < positions.length) {
          var next = i+1;
          position_distances.push(positions[next] - positions[i]);
        }
      }
      occurance_distances[key] = position_distances;
    }
  }

  return occurance_distances;
}

function array_gcd(number_array) {
  var result = 0;

  for(var i=0; i < number_array.length; i++) {
    if(i == 0) {
      result = number_array[i];
    } else {
      result = gcd(result, number_array[i]);       
    }
  }

  return result;
}

function gcd(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function generate_position_array(alpha_string, array_size) {
  var position_array = Array(array_size).fill("");

  for(i=0; i < alpha_string.length; i++) {
    position_array[i % array_size] += alpha_string[i];  
  } 

  return position_array;
}

function generate_alpha_string(text) {
  var alpha_string = '';

  for(var i=0; i < text.length; i++) {
    if(isAlpha(text[i])) alpha_string += text[i];
  }

  return alpha_string;
}

function get_chi_squared(s) {
    var counts = new Array(26);
    var expected = [0.08167,0.01492,0.02782,0.04253,0.12702,0.02228,0.02015,0.06094,0.06966,0.00153,0.00772,0.04025,0.02406,0.06749,0.07507,0.01929,0.00095,0.05987,0.06327,0.09056,0.02758,0.00978,0.02360,0.00150,0.01974,0.00074];
    var observed = 0;
    var result = 0.0;

    for(var i=0; i<26; i++) { counts[i] = 0; }
    for(var i=0; i<s.length; i++) {
        counts[s.charCodeAt(i) - 65]++;
        observed++;
    }

    for(var i=0; i<26; i++) {
        result += Math.pow((counts[i] - observed*expected[i]), 2) / (observed * expected[i]);
    }

    return(parseFloat(result).toFixed(2));
}

function caesar_shift(str, shift) {
    var result = "";
    for(var i=0; i<str.length; i++) {
        var c = str.charCodeAt(i);
        result += String.fromCharCode((c+65-shift) % 26 + 65)
    }
    return result;
}

function filter_occurances(occurances, min_occurances) {
  var filtered_occurances = {};

  for(key in occurances) {
    var positions = occurances[key];
    if(positions.length >= min_occurances) {
      filtered_occurances[key] = positions;
    }
  }
  
  return filtered_occurances;
}

function analyze_position(position_string) {
  var position_results = {};
  var character_set = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for(var i=0; i < character_set.length; i++) {
    shift_string = caesar_shift(position_string, i);
    position_results[character_set[i]] = parseFloat(get_chi_squared(shift_string)).toFixed(2);
  }

  return position_results;
}

function build_position_array(position_hash) {
  var results = new Array();

  for(var key in position_hash) {
    results.push(new Array(key, parseFloat(position_hash[key])));
  }

  return results;
}
