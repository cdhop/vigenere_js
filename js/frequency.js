function character_count(text, char_set) {
  var result = {};

  for(var j=0; j < char_set.length; j++) {
    result[char_set[j]] = 0;
  }

  for(var i=0; i < text.length; i++) {
    if(is_inset(text[i], char_set)) {
      count = result[text[i]];
      result[text[i]] = count + 1;
    }  
  }

  return result;
}

function total_character_count(char_counts) {
  var result = 0;

  for(key in char_counts) {
    result += char_counts[key];
  }

  return result;
}

function is_inset(character, char_set) {
  var result = false;

  if(char_set.indexOf(character) >= 0) result = true;

  return result;
}

function build_frequency_chart(char_counts, context) {
  var characters = [];
  var counts = []; 

  for(key in char_counts) {
    characters.push(key);
    counts.push(char_counts[key]);
  } 
  console.log(characters);
  console.log(counts);

  var feq_chart = new Chart( context, {
    type: 'bar',
    data: {
      labels: characters,
      datasets: [{
        label: 'Frequency Counts',
        data: counts,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
