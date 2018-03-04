function build_sequences(text, character_set, size) {
  var sequences = new Array();
  var charonly_text = build_charonly_text(text, character_set);

  for(text_location = 0; text_location + size < charonly_text.length; text_location++) {
    var sequence = charonly_text.substring(text_location, text_location + size);
    sequences.push(sequence);
  }

  return sequences;
}

function build_charonly_text(text, character_set) {
  var charonly_text = "";

  for(text_location = 0; text_location < text.length; text_location++) {
    if(character_set.indexOf(text[text_location]) > -1) {
      charonly_text += text[text_location];
    }
  }

  return charonly_text;
}

function count_sequences(sequences) {
  var sequence_counts = [];

  for(loc = 0; loc < sequences.length; loc++) {
    if(sequences[loc] in sequence_counts) {
      sequence_counts[sequences[loc]] = sequence_counts[sequences[loc]] + 1;
    } else {
      sequence_counts[sequences[loc]] = 1;
    }
  }

  return sequence_counts;
}

function filter_minimum_sequence_counts(sequence_counts, minimum) {
  var filtered_sequence_counts = [];
  
  for(var key in sequence_counts) {
    if(sequence_counts[key] >= minimum) filtered_sequence_counts[key] = sequence_counts[key];
  }
  
  return filtered_sequence_counts;
}
