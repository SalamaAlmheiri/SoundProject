
//BG music
var piano = document.getElementById("music");
var intro= document.querySelector('.intro');


  // Start, stop comments
  piano.addEventListener('music', function(){
    console.log("Playing!");
  });

  piano.addEventListener('music', function(){
    console.log("Finished!");
  });

  intro.addEventListener('click', function(){
    intro.classList.add('hidden');
    piano.play();
  });


//Tone
  const synth= new Tone.Synth().toDestination();

//Shapes click sound
  var square= document.getElementById('square');
  var circle= document.getElementById('circle');
  var triangle= document.getElementById('triangle');
  var rect= document.getElementById('rect');
  var diamond= document.getElementById('diamond');
  var star= document.getElementById('star');

square.addEventListener('click', function(e){
    synth.triggerAttackRelease("B4", "8n");
});

circle.addEventListener('click', function(e){
  synth.triggerAttackRelease("C4", "8n");
});

triangle.addEventListener('click', function(e){
  synth.triggerAttackRelease("D6", "8n");
});


rect.addEventListener('click', function(e){
  synth.triggerAttackRelease("E4", "8n");
});

diamond.addEventListener('click', function(e){
  synth.triggerAttackRelease("F4", "8n");
});

star.addEventListener('click', function(e){
  synth.triggerAttackRelease("G3", "8n");
});
