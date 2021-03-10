$(document).ready(
    function(){
        $("#addWord").click(addWord);
        $("button#generate").click(generateHaiku);
    }
);


let wordBank = [

    {Word: "dog", syllables: 1},
    {Word: "dream", syllables: 1},
    {Word:"love", syllables: 1},
    {Word:"haiku", syllables: 2},
    {Word:"acquire", syllables: 2},
    {Word:"comfort", syllables: 2},
    {Word:"reunion", syllables: 3},
    {Word:"illustrate", syllables: 3},
    {Word:"family", syllables: 3},
    {Word:"overwhelming", syllables: 4},
    {Word:"ideology", syllables: 4},
    {Word:"anybody", syllables: 4},
    {Word:"unbelievable", syllables: 5},
    {Word:"opportunity", syllables: 5},
    {Word:"communication", syllables: 5},
    {Word:"automatically", syllables: 6},
    {Word:"familiarity", syllables: 6},
    {Word:"incomprehensible", syllables: 6},
    {Word:"materialization", syllables: 7},
    {Word:"unidentifiable", syllables: 7},
    {Word:"indivisibility", syllables: 7}

];


function addWord(){
    let newWord = $("#enterWord").val();
    let count = newWord.split("-").length;
    let word2 = newWord.split('-').join('');
    let wordObject = {Word:word2, syllables: count};
    wordBank.push(wordObject);
    $("input#enterWord").val("");

}

function generateHaiku(){
    let fiveSevenFive = [5,7,5];
    let addedNum = 0;
    let next = 0;
    let line1 = [];
    let line2 = [];
    let line3 = [];
    for(let i = 0; i < fiveSevenFive.length; i++){
        next++;
        addedNum = 0;
        let y = fiveSevenFive[i];
        for(let j = 0; j < fiveSevenFive[i]; j++){
            let oneVal = wordBank.filter(obj => obj.syllables <= y || obj.syllables === 1);
            let returnObject = oneVal[Math.floor(Math.random() * (oneVal.length))];

            y -= returnObject.syllables;

            if(fiveSevenFive[i] === 7){

                if (addedNum === fiveSevenFive[i]){
                    break;
                }

                else{
                    addedNum += returnObject.syllables;
                    line2.push(returnObject.Word);
                }

            }
            if(fiveSevenFive[i] === 5){
                if (addedNum >= fiveSevenFive[i]){
                    break;
                }
                else{
                    if(next === 1){
                        addedNum += returnObject.syllables;
                        line1.push(returnObject.Word);
                    }
                    if(next === 3){
                        addedNum += returnObject.syllables;
                        line3.push(returnObject.Word);
                    }
                }

            }

        }

    }

    let line1_string = line1.join(" ");
    $("#line1").html(line1_string);

    let line2_string = line2.join(" ");
    $("#line2").html(line2_string);

    let line3_string = line3.join(" ");
    $("#line3").html(line3_string);
}