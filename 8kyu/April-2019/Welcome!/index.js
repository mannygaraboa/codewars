function greet(language) {
	var languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  };

  if(language == 'english')
  {
    return languages.english;
  }
  
  else if(language == 'czech')
  {
    return languages.czech;
  }
  else if(language == 'danish')
  {
    return languages.danish;
  }
  else if(language == 'dutch')
  {
    return languages.dutch;
  }
  else if(language == 'estonian')
  {
    return languages.estonian;
  }
  else if(language == 'finnish')
  {
    return languages.finnish;
  }
  else if(language == 'flesmish')
  {
    return languages.flemish;
  }
  else if(language == 'french')
  {
    return languages.french;
  }
  else if(language == 'german')
  {
    return languages.german;
  }
  else if(language == 'irish')
  {
    return languages.irish;
  }
  else if(language == 'italian')
  {
    return languages.italian;
  }
  else if(language == 'latvian')
  {
    return languages.latvian;
  }
  else if(language == 'lithuanian')
  {
    return languages.lithuanian;
  }
  else if(language == 'polish')
  {
    return languages.polish;
  }
  else if(language == 'spanish')
  {
    return languages.spanish;
  }
  else if(language == 'swedish')
  {
    return languages.swedish;
  }
  else if(language == 'welsh')
  {
    return languages.welsh;
  }
  
  else
  {
    return languages.english;
  }
}

greet();