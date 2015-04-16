(function(){
  
  var app = angular.module('bookStore', []);
  
  app.controller('storeController', function(){
    this.products = books;
    
  })
  
  app.controller('tabController', function(){
    this.tab = 1;
    
    this.setTab = function(newValue){
      this.tab = newValue;
    }
    
    this.isSet = function(bookName){
      return this.tab === bookName;
    }
    
  })
  
  var books = [{
    name: 'One Flew Over the Cuckoo\'s Nest',
    description: 'One Flew Over the Cuckoo\'s Nest (1962) is a novel written by Ken Kesey. Set in an Oregon psychiatric hospital, the narrative serves as a study\ of the institutional processes and the human mind as well as a critique of behaviorism and a celebration of humanistic principles. Published in 1962, the novel\ was adapted into a Broadway play by Dale Wasserman in 1963. Bo Goldman adapted the novel for the 1975 film directed by Miloš Forman, which won five Academy\ Awards.',
    author: 'Ken Kesey',
    authorBio: 'an American author, best known for his novel One Flew Over the Cuckoo\'s Nest (1962)[1] and as a countercultural figure who considered himself a\ link between the Beat Generation of the 1950s and the hippies of the 1960s. "I was too young to be a beatnik, and too old to be a hippie," Kesey said in a\ 1999 interview with Robert K. Elder.',
    price: 15,
    titleImage: 'http://upload.wikimedia.org/wikipedia/en/thumb/c/c1/OneFlewOverTheCuckoosNest.jpg/220px-OneFlewOverTheCuckoosNest.jpg',
    quotes : [{
      by: 'McMurphy',
      body: 'Which one of you nuts has got any guts?'
    }, 
    {
      by: 'Chief Bromden',
      body: 'Mmmmmm, Juicy Fruit.'
      
    }
    ]
  }, 
  {
    name: 'A Farewell to Arms',
    description: 'A Farewell to Arms is a novel written by Ernest Hemingway set during the Italian campaign of World War I. The book, published in 1929, is a\ first-person account of American Frederic Henry, serving as a Lieutenant ("Tenente") in the ambulance corps of the Italian Army. The title is taken from a poem\ by 16th-century English dramatist George Peele.',
    author: 'Ernest Hemingway',
    price: 12,
    authorBio: 'an American author and journalist. His economical and understated style had a strong influence on 20th-century fiction, while his life of\ adventure and his public image influenced later generations. Hemingway produced most of his work between the mid-1920s and the mid-1950s, and won the Nobel\ Prize in Literature in 1954. He published seven novels, six short story collections, and two non-fiction works. Additional works, including three novels, four\ short story collections, and three non-fiction works, were published posthumously. Many of his works are considered classics of American literature.',
    titleImage: 'http://upload.wikimedia.org/wikipedia/en/thumb/4/48/Hemingway_farewell.png/220px-Hemingway_farewell.png',
    quotes : [{
      by: 'Ernest Hemingway',
      body: 'All thinking men are atheists.'
    }, 
    {
      by: 'Katherine Barkley',
      body: 'Tell me, baby, when you lie here all the time in hot weather don’t you get excited?'
    },
    {
      by: 'Captain',
      body: 'Priest every night five against one.'
    }
    ]
  }, 
  {
    name: 'The Catcher in the Rye',
    description: 'The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular\ with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world\'s major languages. Around 250,000\ copies are sold each year with total sales of more than 65 million books. The novel\'s protagonist Holden Caulfield has become an icon for teenage rebellion.\ The novel also deals with complex issues of identity, belonging, loss, connection, and alienation.',
    author: 'J. D. Salinger',
    authorBio: 'an American writer who won acclaim early in life. He led a very private life for more than a half-century. He published his final original work in 1965 and gave his last interview in 1980.',
    price: 5,
    titleImage: 'http://upload.wikimedia.org/wikipedia/en/thumb/3/32/Rye_catcher.jpg/220px-Rye_catcher.jpg',
    quotes : [{
      by: 'J. D. Salinger',
      body: 'Don\'t ever tell anybody anything. If you do, you start missing everybody.'
    }, 
    {
      by: 'J. D. Salinger',
      body: 'I\'m quite illiterate, but I read a lot'
    },
    {
      by: 'J. D. Salinger',
      body: 'I like it when somebody gets excited about something. It\'s nice.'
    },
    {
      by: 'J. D. Salinger',
      body: 'The mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one.'
    }
    ]
    
  }]
}())