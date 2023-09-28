var pageFirst = {
    type: jsPsychSurveyHtmlForm,
    preamble: '<p>昨日は運動を何分間行いましたか</p>',
    html: '<p> <input name="first" type="text" /> 分 </p>',
    button_label: '次へ'
};

var pageSecond = {
    type: jsPsychSurveyLikert,
    questions: [{
        prompt: "昨日，運動をしたことで，どの程度の疲労感を感じましたか",
        name: 'exercise_2',
        labels: [
            "非常に疲れた", 
            "少し疲れた", 
            "まったく疲れなかった", 
        ]
    }],
    randomize_question_order: false,
    button_label : "次へ"
};

var pageThird = {
    type: jsPsychSurveyLikert,
    questions: [{
        prompt: "昨日，運動をしたことで，どの程度の達成感を感じましたか",
        name: 'exercise_3',
        labels: [
            "とても達成感を感じた", 
            "少し達成感を感じた", 
            "まったく達成感を感じなかった", 
        ]
    }],
    randomize_question_order: false,
    button_label : "終了"
};

/*タイムラインの設定*/
const timeline = [pageFirst, pageSecond, pageThird]
